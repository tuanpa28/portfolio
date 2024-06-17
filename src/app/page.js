import AboutSection from "@/components/home/about";
import ContactSection from "@/components/home/contact";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import HeroSection from "@/components/home/hero-section";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
