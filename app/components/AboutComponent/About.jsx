"use client";

import React, { use, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const headingsRef = useRef([]);
  const imagedivRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        headingsRef.current,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          delay: 4,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "power3.out",
        }
      );

      const words = textRef.current.innerHTML.split(" ");
      textRef.current.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      const wordElements = gsap.utils.toArray(".word");

      gsap.fromTo(
        wordElements,
        { color: "var(--hover-color)" },
        {
          color: "var(--text-color)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      if (window.innerWidth <= 768) {
        gsap.to(imagedivRef.current, {
          borderRadius: "20px 20px 20px 20px", 
          scrollTrigger: {
            trigger: imagedivRef.current,
            start: "top 65%",
            end: "top 40%",
            scrub: 1,
          },
        });

        gsap.to(imageRef.current, {
          scale: 1.5, 
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 65%",
            end: "top 45%",
            scrub: 1,
          },
        });
      }

      if (window.innerWidth >= 769) {
        gsap.to(imagedivRef.current, {
          borderRadius: "20px 20px 20px 20px", 
          scrollTrigger: {
            trigger: imagedivRef.current,
            start: "top 15%",
            end: "top 10%",
            scrub: 1,
          },
        });

        gsap.to(imageRef.current, {
          scale: 1.5, 
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 15%",
            end: "top -5%",
            scrub: 1,
          },
        });
      }
    }
  }, []);

  return (
    <div className="ag-about-container">
      <div className="ag-about-text">
        <h1
          className="ag-about-text-1"
          ref={(el) => (headingsRef.current[0] = el)}
        >
          Code.
        </h1>
        <h1
          className="ag-about-text-2"
          ref={(el) => (headingsRef.current[1] = el)}
        >
          Create.
        </h1>
        <h1
          className="ag-about-text-3"
          ref={(el) => (headingsRef.current[2] = el)}
        >
          Elevate.
        </h1>
      </div>

      <div className="ag-about-info">
        <div className="ag-about-info-img" ref={imagedivRef}>
          <img src="HeroBanner_WebP.webp" ref={imageRef} alt="" />
        </div>

        <div className="ag-about-info-text">
          <p ref={textRef}>
            Websites are more than just functional spaces—they're immersive
            experiences where visuals, typography, and motion come together to
            tell a story, evoke emotions, and create memorable interactions.
            <br />
            <br />
            Every element, from the smallest detail to the overall design, plays
            a role in shaping how users feel and engage, transforming a simple
            visit into an inspiring journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
