import Navbar from "@/app/src/components/Navbar";
import Hero from "@/app/src/components/Hero";
import About from "@/app/src/components/About";
import Projects from "@/app/src/components/Project";
import Contact from "@/app/src/components/Contact";
import Footer from "@/app/src/components/Footer";
import Skills from "@/app/src/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
