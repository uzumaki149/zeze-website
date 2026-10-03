
import Link from "next/link";
import { ArrowRight, Facebook, Github, Linkedin, Send } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourprofile",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
  },
  {
    label: "Telegram",
    href: "https://t.me/yourusername",
    icon: Send,
  },
];

function SidebarSocials() {
  return (
    <section className="mt-4 space-y-5">
      <Link
        href="/about"
        className="
          inline-flex items-center gap-2 px-3
          font-ui text-sm font-medium text-zinc-400
          transition-colors duration-200
          hover:text-blue-400
        "
      >
        More about Zanzenj
        <ArrowRight size={18} />
      </Link>

      <div className="flex items-center justify-between">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="
                flex h-9 w-9 items-center justify-center rounded-full
                text-zinc-400 transition-all duration-200
                hover:-translate-y-0.5 hover:bg-zinc-800
                hover:text-blue-400
              "
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default SidebarSocials;