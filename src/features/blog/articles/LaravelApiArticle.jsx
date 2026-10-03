
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Database,
  GitBranch,
  Layers3,
  Terminal,
} from "lucide-react";

function LaravelApiArticle() {
  const concepts = [
    {
      number: "01",
      title: "Migrations",
      description:
        "Create and manage database tables using PHP instead of writing SQL manually.",
      icon: Database,
    },
    {
      number: "02",
      title: "Artisan CLI",
      description:
        "Generate controllers, models, and other application components through terminal commands.",
      icon: Terminal,
    },
    {
      number: "03",
      title: "API Routing",
      description:
        "Define organized API endpoints inside routes/api.php.",
      icon: GitBranch,
    },
    {
      number: "04",
      title: "API Resources",
      description:
        "Format database records into consistent JSON responses for the frontend.",
      icon: Braces,
    },
    {
      number: "05",
      title: "Postman",
      description:
        "Test API endpoints and inspect the responses returned by the server.",
      icon: Layers3,
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-1 pb-16 font-grotesque text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
      {/* Introduction */}
      <div className="mb-14">
        <p className="text-xl leading-9 text-zinc-800 dark:text-zinc-200 sm:text-2xl sm:leading-10">
          When most people build their first web application, they spend
          most of their time designing frontend screens or refining the
          user interface.
        </p>

        <p className="mt-6">
          But after building my first backend systems, I started to
          understand something just as important: <strong className="font-semibold text-zinc-900 dark:text-zinc-100">APIs.</strong>
        </p>
      </div>

      {/* Article contents */}
      <div className="mb-14 flex items-center gap-3 border-y border-zinc-200 py-4 text-xs font-medium uppercase tracking-[0.18em] text-zinc-800 dark:text-zinc-400 dark:border-zinc-800">
        <span>In this article</span>
        <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        <span>01 — 04</span>
      </div>

      {/* Section 1 */}
      <section className="mb-16">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-800 dark:text-zinc-400">01</span>
          <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-800 dark:text-zinc-400">
            The fundamentals
          </span>
        </div>

        <h2 className="mb-5 font-sans text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          What is an API?
        </h2>

        <p className="mb-6">
          Think of a restaurant waiter. A waiter doesn't cook the food.
          Instead, they take your order to the kitchen and bring your
          meal back to the table.
        </p>

        <div className="my-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-7">
          <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            A simple analogy
          </div>

          <div className="grid grid-cols-3 items-center gap-2 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                <Layers3 size={21} className="text-zinc-600 dark:text-zinc-300" />
              </div>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 sm:text-sm">
                Frontend
              </span>
              <span className="text-[11px] leading-4 text-zinc-400">
                Places a request
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="h-px w-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-[10px] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 sm:text-xs">
                API
              </span>
              <div className="h-px w-full bg-zinc-300 dark:bg-zinc-700" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                <Database size={21} className="text-zinc-600 dark:text-zinc-300" />
              </div>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 sm:text-sm">
                Backend
              </span>
              <span className="text-[11px] leading-4 text-zinc-400">
                Processes data
              </span>
            </div>
          </div>
        </div>

        <p>
          An API works in a similar way. It acts as a communication
          layer between an application's frontend and backend. The
          frontend sends a request, the server processes it, and the
          API returns a response, often in JSON format.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-16">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-800 dark:text-zinc-400">02</span>
          <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-800 dark:text-zinc-400">
            Building with Laravel
          </span>
        </div>

        <h2 className="mb-5 font-sans text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          How I Built It with Laravel
        </h2>

        <p className="mb-8">
          Laravel provides tools that help simplify backend development.
          These were some of the key parts of the process I learned:
        </p>

        <div className="space-y-0">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;

            return (
              <div
                key={concept.number}
                className="group flex gap-4 border-t border-zinc-200 py-5 dark:border-zinc-800 sm:gap-6"
              >
                <span className="pt-1 font-mono text-xs text-zinc-400">
                  {concept.number}
                </span>

                <div className="flex min-w-0 flex-1 gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:group-hover:bg-zinc-800">
                    <Icon size={17} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="font-sans text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {concept.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                      {concept.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-zinc-200 dark:border-zinc-800" />
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-16">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-800 dark:text-zinc-400">03</span>
          <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-800 dark:text-zinc-400">
            A practical example
          </span>
        </div>

        <h2 className="mb-5 font-sans text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          From Request to Response
        </h2>

        <p className="mb-6">
          Imagine a mobile app displaying a user's profile. The app
          sends a request to an endpoint such as{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
            /api/user
          </code>
          . The backend handles the request, retrieves the appropriate
          data, and returns a response that the app can display.
        </p>

        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="font-mono text-xs text-zinc-500">
                Example response
              </span>
            </div>
            <span className="rounded-md bg-emerald-500/10 px-2 py-1 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
              JSON
            </span>
          </div>

          <pre className="overflow-x-auto bg-white p-5 font-mono text-xs leading-7 text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300 sm:p-6 sm:text-sm">
            <code>{`{
  "id": 1,
  "name": "Zanzenj",
  "email": "user@example.com"
}`}</code>
          </pre>
        </div>

        <p className="mt-6">
          This is a simplified example of the kind of data an API
          might return. The frontend can then use that response to
          display the user's profile.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-16">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-800 dark:text-zinc-400">04</span>
          <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-800 dark:text-zinc-400">
            Looking beyond the interface
          </span>
        </div>

        <h2 className="mb-5 font-sans text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Why It Matters
        </h2>

        <p className="mb-6">
          Modern applications often have separate frontends, such as
          websites and mobile apps, communicating with a shared backend.
          An API provides a structured way for these different clients
          to exchange data with the server.
        </p>

        <p>
          Understanding how APIs work helped me look beyond the visible
          parts of an application and pay more attention to how its
          different components communicate.
        </p>
      </section>

      {/* Personal reflection */}
      <section className="border-t border-zinc-200 pt-9 dark:border-zinc-800">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-800 dark:text-zinc-400">05</span>
          <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-800 dark:text-zinc-400">
            Personal reflection
          </span>
        </div>

        <h2 className="mb-5 font-sans text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          My Take
        </h2>

        <p className="mb-6">
          I think we often focus on visual design when learning to code.
          But my development journey started to feel different when I
          explored the backend and opened{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
            routes/api.php
          </code>
          .
        </p>

        <blockquote className="my-8 border-l-2 border-zinc-400 pl-5 text-xl font-medium leading-9 text-zinc-800 dark:border-zinc-500 dark:text-zinc-200 sm:pl-6 sm:text-2xl">
          The frontend is the face. The API is the connection that
          helps bring the application together.
        </blockquote>

        <p>
          Building my first Laravel API gave me a better understanding
          of how data moves through an application. It also reminded me
          that learning backend development is a process, and every
          new concept adds to what I already know.
        </p>
      </section>

    </article>
  );
}

export default LaravelApiArticle;
