import "@fontsource/lora";
import "@fontsource/darker-grotesque/index.css";
import "../index.css";
import "./globals.css";
import "@fontsource/bodoni-moda/400.css";

import PublicLayout from "../layouts/PublicLayout";
import GravityParticles from "../components/effects/GravityParticles";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  metadataBase: new URL("https://zeze-website.vercel.app"),
  title: {
    default: "Jhan-Zine Maningo | Personal Portfolio",
    template: "%s | Jhan-Zine Maningo",
  },
  description:
    "Explore the personal portfolio of Jhan-Zine Maningo, featuring web development projects, blog articles, journal entries, and contact information.",
  applicationName: "Jhan-Zine Maningo Portfolio",
  verification: {
    google: "eGcLcnz5VcbmBR-nuRgg5mR8AbYXJzEJ4E_GHOElTDY",
  },
  authors: [{ name: "Jhan-Zine Maningo" }],
  openGraph: {
    type: "website",
    siteName: "Jhan-Zine Maningo",
    title: "Jhan-Zine Maningo | Personal Portfolio",
    description:
      "Explore web development projects, blog articles, journal entries, and more.",
    url: "https://zeze-website.vercel.app",
  },
  twitter: {
    card: "summary",
    title: "Jhan-Zine Maningo | Personal Portfolio",
    description:
      "Explore web development projects, blog articles, journal entries, and more.",
  },
  icons: {
    icon: "/mej.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950">
        <ScrollToTop />
        <GravityParticles />
        <div className="relative z-10">
          <PublicLayout>{children}</PublicLayout>
        </div>
      </body>
    </html>
  );
}
