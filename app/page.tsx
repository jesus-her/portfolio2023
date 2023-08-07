import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Filter1GrainTexture from "@/components/filters/Filter1GrainTexture.tsx";
import Intro from "@/components/hero";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4  relative">
      <Intro />
      <SectionDivider />
      <About />

      {/* <Projects /> */}

      <Skills />

      {/* <Experience /> */}

      <Contact />
    </main>
  );
}
