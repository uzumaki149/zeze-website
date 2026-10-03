import StacksHero from "./components/StacksHero";
import StackGrid from "./components/StackGrid";

function StacksPage() {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <StacksHero />
      <StackGrid />
    </section>
  );
}

export default StacksPage;