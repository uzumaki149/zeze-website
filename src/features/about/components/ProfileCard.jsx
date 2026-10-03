import Image from "next/image";
import { FileText, Mail, MapPin } from "lucide-react";
import profileImage from "../../../assets/images/profile.jpg";

function ProfileCard() {
  return (
    <section className="flex flex-col gap-5 border-b border-zinc-200 pb-7 dark:border-zinc-800 sm:flex-row sm:items-center sm:gap-6">
      <Image
        src={profileImage}
        alt="Jhan-Zine Maningo"
        width={144}
        height={144}
        priority
        className="h-28 w-28 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32"
      />

      <div className="min-w-0 flex-1">
        <h2 className="font-ui text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Jhan-Zine Maningo
        </h2>

        <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <MapPin size={14} aria-hidden="true" />
          <span>Negros Oriental, Philippines</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 16"
            className="ml-1 h-3 w-5 shrink-0"
            role="img"
            aria-label="Philippines flag"
          >
            <rect width="24" height="8" fill="#0038A8" />
            <rect y="8" width="24" height="8" fill="#CE1126" />
            <path d="M0 0 L12 8 L0 16 Z" fill="#FFFFFF" />
            <circle cx="3.5" cy="8" r="1.2" fill="#FCD116" />
            <circle cx="2.3" cy="3" r=".7" fill="#FCD116" />
            <circle cx="2.3" cy="13" r=".7" fill="#FCD116" />
            <path d="M7.5 8 8.1 6.5 8.7 8 8.1 9.5Z" fill="#FCD116" />
          </svg>
        </p>

        <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
          BSIS Student / Aspiring Web Developer
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            <FileText size={14} aria-hidden="true" />
            View Resume
          </a>

          <a
            href="mailto:zzvillegas75@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <Mail size={14} aria-hidden="true" />
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;