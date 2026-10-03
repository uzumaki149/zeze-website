function SectionHeading({
  title,
  description,
  children,
  className = "",
}) {
  return (
     <div
        className={`
            flex
            flex-col
            gap-6

            xl:flex-row
            xl:items-end
            xl:justify-between

            ${className}
        `}
        >
      <div>
        <h2
          className="
            font-ui
            text-3xl
            font-bold
            tracking-tight
            text-zinc-900
            dark:text-zinc-100
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-2
              max-w-2xl
              text-base
              leading-relaxed
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {description}
          </p>
        )}
      </div>

      {children && (
        <div className="shrink-0">
          {children}
        </div>
      )}
    </div>
  );
}

export default SectionHeading;