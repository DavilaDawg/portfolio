import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills"
import Video from "@/components/main/Video"; 

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero/>
        <Skills/>
        <Projects/>
        <Video/>
      </div>
    </main>
  );
}
