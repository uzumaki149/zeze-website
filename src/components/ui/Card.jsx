export default function Card({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-zinc-200
        bg-white
        shadow-sm
        transition-colors
        duration-300

        dark:border-zinc-800
        dark:bg-zinc-900

        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}