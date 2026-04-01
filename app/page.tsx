import Navbar from "@/app/src/components/Navbar";
import Hero from "@/app/src/components/Hero";
import About from "@/app/src/components/About";
import Experience from "@/app/src/components/Experience";
import Skills from "@/app/src/components/Skills";
import Projects from "@/app/src/components/Project";
import Certifications from "@/app/src/components/Certifications";
import Contact from "@/app/src/components/Contact";
import Footer from "@/app/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
