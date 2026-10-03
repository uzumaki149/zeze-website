export const dynamic = "force-static";

import { blogPosts } from "../features/blog/data/blogPosts";
import { journalEntries } from "../features/journal/data/journalEntries";

export default function sitemap() {
  const baseUrl = "https://zeze-website.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/journal",
    "/projects",
    "/contact",
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
  }));

  const journalRoutes = journalEntries
    .filter((entry) => entry.slug === "amber-jack")
    .map((entry) => ({
      url: `${baseUrl}/journal/${entry.slug}`,
    }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
    })),
    ...blogRoutes,
    ...journalRoutes,
  ];
}