import defaultMetadata from "@/app/seo";
import BlogDetailPageComponent from "@/components/pages/blog-detail";

export const metadata = {
    ...defaultMetadata,
    title: 'Home | My Awesome App',
    description: 'Explore the home page of My Awesome App!',
  };

export default function BlogDetailPage() {
    return <BlogDetailPageComponent/>;
}