import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import BackendFlow from "@/components/BackendFlow";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <BackendFlow />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
