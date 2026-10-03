import ContactForm from "../../features/contact/components/ContactForm";


export const metadata = {
  title: {
    default: "Contact",
    template: "%s | Jhan-Zine Maningo",
  },
  description: "Get in touch with Jhan-Zine Maningo.",
  icons: {
    icon: "/mej.png",
  },
};

export default function ContactPage() {
  return (
    <section className="flex min-h-[calc(100svh-3rem)] w-full items-center justify-center xl:min-h-[calc(100svh-10rem)]">
      <div className="w-full max-w-3xl">
        <h1 className="font-ui text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
          contact
        </h1>

        <p className="mt-3 mb-8 max-w-2xl font-ui text-lg leading-6 text-zinc-600 dark:text-green-400">
          If you’d like to work together, have a question, or just want to say
          hello, feel free to reach out.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}