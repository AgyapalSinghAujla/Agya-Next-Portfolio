"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/AboutComponent/About";
import Skills from "./components/SkillsComponent/Skills";
import Experience from "./components/ExperienceComponent/Experience";
import Projects from "./components/ProjectComponent/Projects";
import Contact from "./components/ContactComponent/Contact";
import IntroLoader from "./components/LoadersComponent/IntroLoader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (!showIntro) {
      ScrollTrigger.refresh();
    }
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroLoader onFinish={handleIntroFinish} />}

      <div className={`ag-main-content ${showIntro ? "hidden" : "visible"}`}>
        <Header />

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <Footer />
      </div>
    </>
  );
}
