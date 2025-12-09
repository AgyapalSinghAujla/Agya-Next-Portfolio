"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ag-contact-form form", {
        opacity: 0,
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ag-contact-form",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(
        ".ag-contact-form input, .ag-contact-form textarea, .ag-contact-form button",
        {
          opacity: 0,
          y: 30,
          stagger: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ag-contact-form",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [formResponseColor, setFormResponseColor] = useState("green");
  const [formResponse, setFormResponse] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormResponseColor("green");
    setFormResponse("Submitting your response, please wait...");

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_AFFILIATE_PROGRAM_SHEET_ID,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const result = await response.text();
        setFormResponse("Thank you! Your submission has been received.");
        setFormData({
          name: "",
          email: "",
          message: "",
          date: new Date().toISOString().split("T")[0],
        });

        setTimeout(() => setFormResponse(""), 2000);
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      setFormResponseColor("red");
      setFormResponse("An error occurred while submitting. Please try again.");
    }
  };

  return (
    <div className="ag-contact-container" ref={containerRef}>
      <div className="ag-contact-title">
        <div>
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </div>
      </div>

      <div className="ag-contact-content">
        <div className="ag-contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me your requirement"
              required
            />
            <div>
              <button type="submit">Send</button>
              {formResponse && (
                <p
                  className="ag-formResponse-message"
                  style={{ color: formResponseColor }}
                >
                  {formResponse}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
