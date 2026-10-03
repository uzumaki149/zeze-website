export default function Input({
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      className={`w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${className}`}
      {...props}
    />
  );
}