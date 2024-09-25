// import Experience from "@/components/home/Experience";
import Experience from "@/components/home/experience";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import MobileNav from "@/components/shared/MobileNav";
import NavBar from "@/components/shared/NavBar";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen gap-8">
      <div className="hidden sm:block h-1">
        <NavBar />
      </div>
      <div className="sm:hidden">
        <MobileNav />
      </div>
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
