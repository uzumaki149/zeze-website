function LayoutContainer({ children, className = "" }) {
  return (
    <div
      className={`
        mx-auto
        max-w-5xl
        px-5
        py-6

        xl:px-10
        xl:py-8

        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default LayoutContainer;