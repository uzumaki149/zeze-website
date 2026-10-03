import Section from "../../../components/ui/Section";
import SectionHeading from "../../../components/ui/SectionHeading";

function LatestWriting() {
  return (
    <Section>
      <SectionHeading
        title="Latest Writing"
        description="Thoughts on software engineering, frontend architecture, and things I'm learning."
      />

      {/* Blog cards will go here */}
    </Section>
  );
}

export default LatestWriting;