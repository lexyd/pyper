import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ProductPillars from "@/components/ProductPillars";
import Persona from "@/components/Persona";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <ProductPillars />
      <Persona />
      <Waitlist />
      <Footer />
    </main>
  );
}
