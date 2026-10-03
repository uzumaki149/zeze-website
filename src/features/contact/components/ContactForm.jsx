
"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageSquare, Send } from "lucide-react";
import ContactSocials from "./ContactSocials";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const recipient = "your-email@example.com";
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition duration-200 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-green-500 dark:focus:bg-zinc-950";

  const labelClass =
    "mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300";

  return (
    <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
      <aside className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white/60 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-7">
        <div>
          <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <MessageSquare size={19} aria-hidden="true" />
          </span>

          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Let’s connect.
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Have a project in mind, a question, or an opportunity to discuss?
            Send me a message or reach out through my social profiles.
          </p>

          <a
            href="mailto:jhanzinemaningo060@gmail.com"
            className="mt-6 inline-flex items-center gap-2 break-all text-xs font-medium text-zinc-800 transition-colors hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-400"
          >
            <Mail size={15} aria-hidden="true" />
            jhanzinemaningo060@gmail.com
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-500">
            Find me online
          </p>
          <ContactSocials />
        </div>
      </aside>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-zinc-200 bg-white/60 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-7"
      >
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Send a message
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Fields marked with <span className="text-green-600">*</span> are
            required.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name <span className="text-green-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-green-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-green-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows={6}
            className={`${inputClass} min-h-40 resize-y`}
            required
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-500">
            Your email application will open with your message prepared.
          </p>

          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-green-500 dark:focus-visible:ring-offset-zinc-950"
          >
            <Send size={15} aria-hidden="true" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
