import {
  Facebook,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

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

function AboutSocials() {
  return (
    <section
      className="
        flex
        flex-col
        gap-5
        rounded-xl
        border
        border-zinc-200
        bg-white/60
        p-5
        sm:flex-row
        sm:items-center
        sm:justify-between
        dark:border-zinc-800
        dark:bg-zinc-900/60
      "
    >
      <div>
        <h2 className="font-ui text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Follow me
        </h2>
        <p className="mt-1 font-ui text-sm text-zinc-500 dark:text-zinc-400">
          If you're into that.
        </p>
      </div>

      <div className="flex items-center gap-2">
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
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-zinc-200
                text-zinc-600
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-blue-500/50
                hover:bg-blue-500/5
                hover:text-blue-600
                dark:border-zinc-700
                dark:text-zinc-400
                dark:hover:text-blue-400
              "
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default AboutSocials;