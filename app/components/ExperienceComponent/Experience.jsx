"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".ag-experience-experience-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          x: -100,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="ag-experience-container" ref={containerRef}>
      <div className="ag-experience-title">
        <div>
          <h2>experience</h2>
          <p>Showcasing my development journey</p>
        </div>
      </div>

      <div className="ag-experience-content">
        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-details">
            <h1>Claret World</h1>
            <h2>Senior Web Developer</h2>
            <p>
              <ul>
                <li>Leading development and maintenance of live Shopify and WordPress websites, ensuring fast performance, clean UI, and seamless user experience.
                </li>

                <li>Currently building a Headless Shopify Storefront using React.js, GraphQL APIs, and modern frontend architecture for improved speed, scalability, and custom UX.
                </li>

                <li>Handling end-to-end web solutions including custom feature development, third-party app integrations, SEO improvements, and automation.
                </li>  
              </ul>
            </p>
          </div>
          <div className="ag-experience-experience-time-period">
            [ Dec, 2025 - Present ]
          </div>
        </div>

        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-details">
            <h1>Unimarck Pharma Ltd.</h1>
            <h2>Senior Web Developer</h2>
            <p>
              <ul>
                <li>Managed and optimized Shopify and WordPress websites, focusing on reliability, UX, conversions, and high performance.</li>
                <li>Built custom Shopify features and pages, API-based integrations, and enhanced product management workflows.</li>
                <li>Started development of a Headless Shopify solution using React.js and GraphQL APIs, contributing to improved loading speeds and personalized customer journeys.</li>  
              </ul>
            </p>
          </div>
          <div className="ag-experience-experience-time-period">
            [ July, 2024 - Nov, 2025 ]
          </div>
        </div>

        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-details">
            <h1>Echo Web Studio</h1>
            <h2>Junior Web Developer</h2>
            <p>
              Front-end development, crafting viusually appealing and responsive
              websites. <br />
              Collaboration with senior developers and designers to meet project
              requirements. <br />
            </p>
          </div>
          <div className="ag-experience-experience-time-period">
            [ Sep, 2023 - June, 2024 ]
          </div>
        </div>

        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-details">
            <h1>ThinkNEXT Technologies</h1>
            <h2>Web Developer Intern</h2>
            <p>
              Supported the development of responsive web interfaces.
              Collaborated with cross-functional teams to implement design
              mockups and meet functional requirements. <br />
            </p>
          </div>
          <div className="ag-experience-experience-time-period">
            [ Jan, 2023 - May, 2023 ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
