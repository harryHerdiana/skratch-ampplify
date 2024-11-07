'use client';

import type { Schema } from '@/amplify/data/resource';
import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/data';
import { getUrl, uploadData } from 'aws-amplify/storage';
import { useState } from 'react';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();

export default function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [contentImages, setContentImages] = useState<File[]>([]);

  const handleImageUpload = async (file: File) => {
    try {
      const key = `media/${Date.now()}-${file.name}`;
      await uploadData({
        key,
        data: file,
      }).result;
      
      const { url } = await getUrl({ key });
      return url.toString();
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Check if user is admin
      const user = await getCurrentUser();
      
      // Upload featured image
      const featuredImageUrl = featuredImage 
        ? await handleImageUpload(featuredImage)
        : '';

      // Upload content images
      const imageUrls = await Promise.all(
        contentImages.map(image => handleImageUpload(image))
      );

      // Create blog post
      await client.models.Blog.create({
        title,
        content,
        featuredImage: featuredImageUrl,
   
        status: 'DRAFT',
        slug: title.toLowerCase().replace(/\s+/g, '-'),
        publishedBy: user.userId,
        publishedAt: new Date().toISOString(),
      });

      // Reset form
      setTitle('');
      setContent('');
      setFeaturedImage(null);
      setContentImages([]);

    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFeaturedImage(e.target.files?.[0] || null)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Content Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setContentImages(Array.from(e.target.files || []))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">Content (Markdown)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded h-64"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
} 