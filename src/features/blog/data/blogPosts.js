
import laravelCover from "../../../assets/images/blog/laravel-api.jpg";
import reactCover from "../../../assets/images/blog/react-state.png";
import postgresCover from "../../../assets/images/blog/postgresql.webp";

import authorAvatar from "../../../assets/images/blog/author.png";

import LaravelApiArticle from "../articles/LaravelApiArticle";
import ReactStateArticle from "../articles/ReactStateArticle";
import PostgreSqlArticle from "../articles/PostgreSqlArticle";

export const blogPosts = [
  {
    id: 1,
    slug: "how-i-built-my-first-laravel-api",
    title: "How I Built My First Laravel API.",
    excerpt:
      "Building your first API feels daunting, but Laravel makes it simple. When I built mine, the framework's elegant routing and migrations completely streamlined the backend process. Here's how I went from a blank terminal to a functional JSON API so you can do the same.",
    date: "Jul 27, 2026",
    readTime: "2 min",
    views: 2,
    image: laravelCover,
    author: {
      name: "Zanzenj",
      avatar: authorAvatar,
      role: "Information System Student",
    },
    article: LaravelApiArticle,
  },
  {
    id: 2,
    slug: "react-state-management",
    title: "React State Management: What I Learned",
    excerpt:
      "Exploring how state, events, and components work together—and learning that understanding React takes time and practice.",
    date: "Oct 2, 2026",
    readTime: "2 min",
    views: 2,
    image: reactCover,
    author: {
      name: "Zanzenj",
      avatar: authorAvatar,
      role: "Information System Student",
    },
    article: ReactStateArticle,
  },
  {
    id: 3,
    slug: "why-i-switched-to-postgresql",
    title: "Why I Switched to PostgreSQL",
    excerpt:
      "My experience exploring PostgreSQL and understanding its role in application development.",
    date: "Oct 2, 2026",
    readTime: "2 min",
    views: 2,
    image: postgresCover,
    author: {
      name: "Zanzenj",
      avatar: authorAvatar,
      role: "Information System Student",
    },
    article: PostgreSqlArticle,
  },
];
