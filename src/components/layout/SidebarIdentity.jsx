import Link from "next/link";

function SidebarIdentity() {
  return (
    <div className="shrink-0">
      <Link href="/" aria-label="Go to homepage">
        <h1 className="font-ui text-base font-bold tracking-tight text-black transition-colors duration-150 hover:text-blue-300 dark:text-white sm:text-lg">
          ZEZE
        </h1>
      </Link>
    </div>
  );
}

export default SidebarIdentity;
