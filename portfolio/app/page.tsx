import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Results } from "@/components/Results";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Results />
    </main>
  );
}
