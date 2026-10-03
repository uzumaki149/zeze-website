function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
        <p className="font-ui text-sm text-zinc-500 transition-colors duration-200 dark:text-zinc-400">
          © {new Date().getFullYear()} Zanzenj. All rights reserved.
        </p>

        <p className="font-ui text-sm text-zinc-500 transition-colors duration-200 dark:text-zinc-400">
          Built with React + Next.js + Tailwind CSS v4
        </p>
      </div>
    </footer>
  );
}

export default Footer;