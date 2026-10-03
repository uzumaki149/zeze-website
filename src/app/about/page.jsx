import AboutHero from "../../features/about/components/AboutHero";
import ProfileCard from "../../features/about/components/ProfileCard";
import Biography from "../../features/about/components/Biography";
import ContactSection from "../../features/about/components/ContactSection";

export const metadata = {
  title: {
    default: "About",
    template: "%s | Jhan-Zine Maningo",
  },
  description: "Learn more about Jhan-Zine Maningo, a passionate web developer and designer.",
  icons: {
    icon: "/mej.png",
  },
};

function AboutPage() {
  return (
    <section className="flex h-full w-full flex-col justify-center overflow-hidden">
  <div className="mx-auto w-full max-w-3xl px-4 sm:px-0">
    <AboutHero />

    <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6">
      <ProfileCard />
      <Biography />
      <ContactSection />
    </div>
  </div>
</section>
  );
}

export default AboutPage;
