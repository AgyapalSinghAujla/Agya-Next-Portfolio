"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const toggleRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle(
      "light-theme",
      savedTheme === "light"
    );
    gsap.set(toggleRef.current, {
      x: savedTheme === "light" ? 18 : 0,
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    document.documentElement.classList.toggle(
      "light-theme",
      newTheme === "light"
    );

    localStorage.setItem("theme", newTheme);

    gsap.to(toggleRef.current, {
      x: newTheme === "light" ? 18 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="toggle-container" onClick={toggleTheme}>
      <div className="toggle-track">
        <div ref={toggleRef} className="toggle-button">
          {theme === "dark" ? (
            <MdDarkMode className="toggle-dark-icon" />
          ) : (
            <MdLightMode
              className="toggle-light-icon"
              style={{ color: "white" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
