
import { Facebook, Github, Linkedin, Send } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/uzumaki149",
    icon: Github,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jay.rey.165033/",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jhan-zine-maningo-5682a037a",
    icon: Linkedin,
  },
  {
    label: "Telegram",
    href: "https://t.me/@zezemvj101",
    icon: Send,
  },
];

export default function ContactSocials() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${label} profile`}
          title={label}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-600 transition duration-200 hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-500/10 hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:text-green-400"
        >
          <Icon size={17} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
