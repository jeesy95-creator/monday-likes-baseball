import Hero from "./components/Hero";
import BrandSection from "./components/BrandSection";
import Services from "./components/Services";
import FeaturedProject from "./components/FeaturedProject";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandSection />
      <Services />
      <FeaturedProject />
      <CTA />
    </>
  );
}
