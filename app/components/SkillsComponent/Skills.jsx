"use client";
import { useEffect, useRef } from "react";
import { FaWordpress, FaReact, FaShopify, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiMongodb, SiExpress } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { SiHostinger } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiGodaddy } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = gsap.utils.toArray(".skills-icon");

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        gsap.fromTo(
          icons,
          { color: "var(--hover-color)" },
          {
            color: "var(--text-color)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "top -20%",
              scrub: true,
            },
          }
        );
      },

      "(max-width: 768px)": function () {
        gsap.fromTo(
          icons,
          { color: "var(--hover-color)" },
          {
            color: "var(--text-color)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              end: "top -130%",
              scrub: true,
            },
          }
        );
      },
    });
  }, []);

  return (
    <div className="ag-skills-container" ref={containerRef}>
      <div className="ag-skills-title">
        <div>
          <h2>Skills</h2>
          <p>Showcasing my skills</p>
        </div>
      </div>

      <div className="ag-all-skills">
        <div className="ag-skills">
          <AiOutlineHtml5 className="skills-icon" />
          <span>HTML</span>
        </div>

        <div className="ag-skills">
          <FaCss3 className="skills-icon" />
          <span>CSS</span>
        </div>

        <div className="ag-skills">
          <FaJsSquare className="skills-icon" />
          <span>JavaScript</span>
        </div>

        <div className="ag-skills">
          <FaNodeJs className="skills-icon" />
          <span>Node.js</span>
        </div>

        <div className="ag-skills">
          <RiNextjsFill className="skills-icon" />
          <span>Next.js</span>
        </div>

        <div className="ag-skills">
          <FaReact className="skills-icon" />
          <span>React</span>
        </div>
        <div className="ag-skills">
          <FaWordpress className="skills-icon" />
          <span>WordPress</span>
        </div>
        <div className="ag-skills">
          <FaShopify className="skills-icon" />
          <span>Shopify</span>
        </div>

        <div className="ag-skills">
          <SiExpress className="skills-icon" />
          <span>Express.js</span>
        </div>

        <div className="ag-skills">
          <SiMongodb className="skills-icon" />
          <span>MongoDB</span>
        </div>

        <div className="ag-skills">
          <FaGitAlt className="skills-icon" />
          <span>Git</span>
        </div>

        <div className="ag-skills">
          <VscGithubInverted className="skills-icon" />
          <span>GitHub</span>
        </div>

        <div className="ag-skills">
          <AiFillApi className="skills-icon" />
          <span>APIs</span>
        </div>

        <div className="ag-skills">
          <DiGoogleAnalytics className="skills-icon" />
          <span>Google Analytics</span>
        </div>

        <div className="ag-skills">
          <SiHostinger className="skills-icon" />
          <span>Hostinger</span>
        </div>

        <div className="ag-skills">
          <IoLogoVercel className="skills-icon" />
          <span>Vercel</span>
        </div>
        <div className="ag-skills">
          <SiGodaddy className="skills-icon" />
          <span>GoDaddy</span>
        </div>
        <div className="ag-skills">
          <FaAws className="skills-icon" />
          <span>Amazon Web Services</span>
        </div>

        <div className="ag-skills">
          <img
            className="gsap-icon"
            alt="gsap-logo"
            src="GSAP.svg"
            height="100px"
            width="100px"
            loading="lazy"
          />
          <span>GSAP</span>
        </div>

        <div className="ag-skills">
          <img
            className="gsap-icon"
            alt="framer-logo"
            src="Framer.svg"
            height="100px"
            width="100px"
            loading="lazy"
          />
          <span>Framer</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
