import AboutHero from "../../features/about/components/AboutHero";
import ProfileCard from "../../features/about/components/ProfileCard";
import Biography from "../../features/about/components/Biography";
import ContactSection from "../../features/about/components/ContactSection";

export const metadata = {
  title: {
    default: "About",
    template: "%s | Jhan-Zine Maningo",
  },
  description:
    "Learn more about Jhan-Zine Maningo, a passionate web developer and designer.",
  icons: {
    icon: "/mej.png",
  },
};

function AboutPage() {
  return (
    <section className="w-full py-10 sm:py-14 xl:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <AboutHero />

        <div className="flex flex-col gap-6 sm:gap-7">
          <ProfileCard />
          <Biography />
          <ContactSection />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;