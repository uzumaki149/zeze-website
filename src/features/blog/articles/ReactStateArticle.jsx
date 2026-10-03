
export default function ReactStateArticle() {
  return (
    <article className="mx-auto mt-8 max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Learning React · Notes from a beginner
        </p>

        <h2 className="font-ui text-3xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          React State sounded simple. Until I actually used it.
        </h2>

        <p className="font-ui text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I thought learning React was mostly about writing components.
          Then I discovered state, and suddenly, there were more questions
          than answers.
        </p>
      </header>

      <section className="space-y-4">
        <h3 className="font-ui text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          It starts with something small
        </h3>

        <p className="font-ui text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
          One of the first examples I encountered was a simple counter.
          It looked easy enough: store a number, click a button, and
          increase the value. But this small example introduced me to
          how React updates the interface when state changes.
        </p>

        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-500 dark:bg-zinc-950 dark:border-green-400">
          <div className="flex items-center justify-between border-b border-white/10 dark:border-green-400 px-4 py-3">
            <span className="font-mono text-xs text-zinc-400">Counter.jsx</span>
            <span className="font-mono text-xs text-zinc-500">React</span>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-7 text-zinc-200">
            <code>{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>`}</code>
          </pre>
        </div>

        <p className="font-ui text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
          The code is short, but understanding what happens after the
          button is clicked takes more thought. Why does the interface
          update? What exactly changes? And what happens when a component
          uses more than one state?
        </p>
      </section>

      <aside className="rounded-xl border-l-4 border-blue-500 bg-zinc-100 px-5 py-5 dark:bg-zinc-900 sm:px-7">
        <p className="font-ui text-lg font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
          "The difficult part is not always writing the code. Sometimes,
          it is understanding what the code is doing."
        </p>
      </aside>

      <section className="space-y-4">
        <h3 className="font-ui text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Then the questions keep coming
        </h3>

        <p className="font-ui text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
          As I continued learning, I came across concepts like component
          re-rendering, sharing state, and managing data between components.
          Each topic opened the door to another one. The more I explored,
          the more I realized that React State is not just about storing
          values.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <span className="mb-2 block font-mono text-xs text-blue-600 dark:text-blue-400">
              QUESTION 01
            </span>
            <p className="font-ui font-medium text-zinc-900 dark:text-zinc-100">
              When should I use state?
            </p>
            <p className="mt-2 font-ui text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Not every value needs to be stored as component state.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <span className="mb-2 block font-mono text-xs text-blue-600 dark:text-blue-400">
              QUESTION 02
            </span>
            <p className="font-ui font-medium text-zinc-900 dark:text-zinc-100">
              Why does a component re-render?
            </p>
            <p className="mt-2 font-ui text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Understanding updates is different from simply triggering them.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-ui text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Still learning, still confused
        </h3>

        <p className="font-ui text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
          Honestly, as a beginner, I still get confused. There are times
          when I understand a concept while reading about it, but struggle
          to apply it when building something on my own. It can feel like
          the learning process never ends.
        </p>

        <p className="font-ui text-sm leading-7 text-zinc-700 dark:text-zinc-300 sm:text-base">
          I am learning not to rush through every topic. Instead, I try
          small examples, make mistakes, read the documentation, and
          return to concepts that I do not fully understand yet.
        </p>
      </section>

      <footer className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
          A note to myself
        </p>
        <p className="mt-3 font-ui text-lg font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
          I do not have to understand everything today. I just have to
          keep building, keep asking, and keep learning.
        </p>
      </footer>
    </article>
  );
}
