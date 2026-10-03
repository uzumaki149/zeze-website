"use client";

function BlogFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-14 border-t border-zinc-800 pt-8">
      <div className="flex items-center justify-between">
        <p className="font-grotesque text-base text-zinc-500">
          © 2026 Zanzenj. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="font-grotesque text-base text-zinc-400 transition hover:text-zinc-200"
        >
          ↑ back to top
        </button>
      </div>
    </footer>
  );
}

export default BlogFooter;