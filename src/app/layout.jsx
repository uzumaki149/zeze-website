
import "@fontsource/lora";
import "@fontsource/darker-grotesque/index.css";
import "../index.css";
import "./globals.css";
import "@fontsource/bodoni-moda/400.css";

import PublicLayout from "../layouts/PublicLayout";
import GravityParticles from "../components/effects/GravityParticles";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: {
    default: "Jhan-Zine Maningo | Home",
    template: "%s | Jhan-Zine Maningo",
  },
  description: "Personal portfolio of Jhan-Zine Maningo.",
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
