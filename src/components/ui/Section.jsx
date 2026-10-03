function Section({ children, className = "" }) {
  return (
    <section
      className={`
        pt-6 pb-12
        xl:pt-8 xl:pb-16
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default Section;