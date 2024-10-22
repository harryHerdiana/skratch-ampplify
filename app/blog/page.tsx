import BlogPageComponent from "@/components/pages/blog";
import defaultMetadata from "../seo";

export const metadata = {
    ...defaultMetadata,
    title: 'Home | My Awesome App',
    description: 'Explore the home page of My Awesome App!',
  };

export default function BlogPage() {
    return <BlogPageComponent/>;
}