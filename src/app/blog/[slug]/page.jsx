import BlogPostPage from "../../../features/blog/BlogPostPage";
import { blogPosts } from "../../../features/blog/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      icons: {
        icon: "/mej.png",
      },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    icons: {
      icon: "/mej.png",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <BlogPostPage slug={slug} />;
}