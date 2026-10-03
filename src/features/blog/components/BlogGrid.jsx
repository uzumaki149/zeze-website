import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blogPosts";

function BlogGrid() {
  return (
    <section className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </section>
  );
}

export default BlogGrid;