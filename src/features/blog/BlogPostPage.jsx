
import { blogPosts } from "./data/blogPosts";

import BlogHeader from "./components/BlogHeader";
import AuthorCard from "./components/AuthorCard";
import BlogFooter from "./components/BlogFooter";

function BlogPostPage({ slug }) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <h1>Post not found.</h1>;
  }

  const Article = post.article;

  if (!Article) {
    return <h1>Article not found.</h1>;
  }

  return (
    <article className="p-10">
      <BlogHeader post={post} />

      <div className="mt-7">
        <AuthorCard post={post} />
      </div>

      <Article />

      <BlogFooter />
    </article>
  );
}

export default BlogPostPage;
