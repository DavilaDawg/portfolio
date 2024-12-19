"use client";

import React from "react";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Labs from "@/components/main/Labs"
import Contacts from "@/components/main/Contacts";
import { Navbar } from "@/components/main/Navbar"; 

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="flex flex-col">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="lab-reports">
          <Labs />
        </section>
        {/* <section id="contacts">
          <Contacts/>
        </section> */}
      </div>
    </main>
  );
}