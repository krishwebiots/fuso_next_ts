'use client';
import BlogGridView from '@/Components/CommonComponents/BlogGridView';

const BlogInfiniteScrollContainer = () => {
  return <BlogGridView gridSize={3} type='infinite-scroll' />;
}

export default BlogInfiniteScrollContainer