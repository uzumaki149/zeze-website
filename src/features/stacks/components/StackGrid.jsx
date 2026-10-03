import StackItem from "./StackItem";
import { stacks } from "../data/stacks";

function StackGrid() {
  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      {stacks.map((stack) => (
        <StackItem key={stack.id} stack={stack} />
      ))}
    </section>
  );
}

export default StackGrid;
