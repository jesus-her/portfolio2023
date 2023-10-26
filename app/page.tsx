import About from "@/components/about";
import Cards from "@/components/cards";
import Contact from "@/components/contact";
import Experience from "@/components/experience";

import Intro from "@/components/hero";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import SectionHeading from "@/components/section-heading";
import Skills from "@/components/skills";
import { cards } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 max-w-5xl mx-auto overflow-x-hidden ">
      <Intro />
      <SectionDivider />
      <About />

      <SectionHeading small>Why me?</SectionHeading>

      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Cards card={card} key={index} />
        ))}
      </div>
      <SectionDivider />

      <Projects />

      <Skills />
      <SectionDivider />

      <Experience />
      <SectionDivider />

      <Contact />
    </main>
  );
}
