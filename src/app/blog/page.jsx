import BlogPage from "../../features/blog/BlogPage";

export const metadata = {
  title: {
    default: "Blogs",
    template: "%s | Jhan-Zine Maningo",
  },
  description: "Read the latest articles and insights from Jhan-Zine Maningo.",
  icons: {
    icon: "/mej.png",
  },
};

export default function Page() { return <BlogPage />; }
