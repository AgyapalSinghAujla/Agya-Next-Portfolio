"use client";
import { useState, useEffect } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 130,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <div className="ag-navbar-div">
        <h1
          className="ag-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 25400 25400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_x0020_1">
              <path d="M4818.76 19267.69l-945.97 1891.92c-81.03,162.06 -73.02,340.12 22.24,494.25 95.25,154.14 250.94,240.94 432.13,240.94l9378.44 0c197.21,0 366.17,-104.42 454.37,-280.81 830.05,-1660.08 1652.05,-3304.1 2482.92,-4965.83l-3.78 -7.56 7.56 0 -3.78 7.57 1309.76 2619.51 9.07 0 -4.54 9.07 -941.43 1882.87c-81.03,162.06 -73.02,340.12 22.24,494.25 95.26,154.13 250.94,240.93 432.13,240.93l1796.09 0 1806.63 0c181.19,0 336.87,-86.8 432.13,-240.93 95.26,-154.13 103.27,-332.19 22.24,-494.25 -1476.54,-2953.09 -2953.01,-5906.03 -4429.95,-8859.9 -88.2,-176.39 -257.16,-280.81 -454.37,-280.81 -197.21,0 -366.17,104.42 -454.37,280.81 -1161.33,2322.64 -2322.66,4645.3 -3483.98,6967.96l0 0.01 -9.09 0 -225.75 0 -4200.4 0c-181.19,0 -336.87,-86.8 -432.13,-240.93 -95.26,-154.13 -103.26,-332.2 -22.23,-494.26 1476.48,-2952.93 2952.04,-5904.05 4430.69,-8861.37 88.19,-176.39 257.16,-280.82 454.37,-280.82 197.21,0 366.18,104.44 454.37,280.82l387.22 774.45 5.97 0.06c67.44,194.1 251.94,333.44 469.01,333.44 213.45,0 395.42,-134.73 465.55,-323.78l0.02 0 732.86 -1465.72c73.87,-147.74 73.87,-306.64 0,-454.37 -686.87,-1373.75 -1373.76,-2747.52 -2060.63,-4121.26 -88.19,-176.39 -257.16,-280.82 -454.37,-280.82 -197.21,0 -366.18,104.43 -454.37,280.82 -2475.37,4950.75 -4950.76,9901.51 -7426.14,14852.27l0.74 1.47 -1.47 0zm2624.05 9.07l-4.53 -9.07 9.06 0 -4.53 9.07zm5257.19 -10514.37l-1.51 -3.02 3.02 -0.01 -1.51 3.03z" />
            </g>
          </svg>
        </h1>

        <ul className="ag-nav-links">
          {["about", "skills", "experience", "projects"].map((item) => (
            <li key={item}>
              <button
                className={activeSection === item ? "active" : ""}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div className="ag-nav-contact">
          <button onClick={() => scrollToSection("contact")}>Hire Me</button>
        </div>

        <div className="ag-nav-hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoMdClose className=" nav-icon nav-icon-close" />
          ) : (
            <HiOutlineBars3CenterLeft className="nav-icon" />
          )}
        </div>
      </div>

      <div
        className={`ag-mobile-navbar  ${
          isMobileMenuOpen ? "mobileDrawerOpen" : ""
        }`}
      >
        <ul className="ag-mobile-nav-links">
          {["about", "skills", "experience", "projects"].map((item) => (
            <li key={item} onClick={toggleMobileMenu}>
              <button
                className={activeSection === item ? "active" : ""}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                <LuExternalLink className="nav-link-icon" />
              </button>
            </li>
          ))}
        </ul>

        <div className="ag-mobile-nav-contact" onClick={toggleMobileMenu}>
          <button onClick={() => scrollToSection("contact")}>Hire Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
