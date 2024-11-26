import Contact from "@/components/contact";
import HeroSection from "@/components/heroSection";
import Projects from "@/components/projects";
import Stack from "@/components/stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-16 lg:p-24 space-y-20 md:space-y-32 lg:space-y-52">
      <HeroSection />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}
