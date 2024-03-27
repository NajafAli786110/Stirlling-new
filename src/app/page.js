import About from "@/components/About";
import { HeroSection } from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <HeroSection />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Reviews />
    </main>
  );
}