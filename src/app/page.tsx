import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Platforms from "@/components/sections/Platforms";
import Framework from "@/components/sections/Framework";
import Ecosystem from "@/components/sections/Ecosystem";
import Speaking from "@/components/sections/Speaking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Platforms />
        <Framework />
        <Ecosystem />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
