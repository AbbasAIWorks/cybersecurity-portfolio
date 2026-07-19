import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Tools } from "@/components/sections/Tools";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Timeline />
        <Tools />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
