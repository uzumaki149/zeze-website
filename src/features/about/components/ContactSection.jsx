import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  {
    label: "Email",
    href: "mailto:zzvillegas75@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
  },
];

function ContactSection() {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div>
        <h2 className="font-ui text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Let's connect.
        </h2>

        <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Feel free to contact me for opportunities or collaboration.
        </p>
      </div>

      <div className="flex items-center gap-2">
        {socials.map((social) => {
          const Icon = social.icon;
          const isEmail = social.href.startsWith("mailto:");

          return (
            <a
              key={social.label}
              href={social.href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              title={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ContactSection;