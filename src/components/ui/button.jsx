export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`rounded-lg px-4 py-2 font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}