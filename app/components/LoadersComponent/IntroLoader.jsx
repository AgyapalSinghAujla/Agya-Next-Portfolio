"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroLoader = ({ onFinish }) => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (onFinish) onFinish();
      },
    });

    tl.to(
      leftDoorRef.current,
      { x: "-100%", duration: 1.5, ease: "power3.inOut" },
      "+=0.5"
    )
      .to(
        rightDoorRef.current,
        { x: "100%", duration: 1.5, ease: "power3.inOut" },
        "<"
      )
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });
  }, []);

  return (
    <div ref={containerRef} className="ag-intro-loader-container">
      <div ref={leftDoorRef} className="ag-intro-left-door" />
      <div ref={rightDoorRef} className="ag-intro-right-door" />
      <div ref={logoRef} className="ag-intro-logo">
        <h1 className="ag-intro-logo-svg">
          <svg
            width="250"
            height="250"
            viewBox="0 0 25400 25400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_x0020_1">
              <path d="M4818.76 19267.69l-945.97 1891.92c-81.03,162.06 -73.02,340.12 22.24,494.25 95.25,154.14 250.94,240.94 432.13,240.94l9378.44 0c197.21,0 366.17,-104.42 454.37,-280.81 830.05,-1660.08 1652.05,-3304.1 2482.92,-4965.83l-3.78 -7.56 7.56 0 -3.78 7.57 1309.76 2619.51 9.07 0 -4.54 9.07 -941.43 1882.87c-81.03,162.06 -73.02,340.12 22.24,494.25 95.26,154.13 250.94,240.93 432.13,240.93l1796.09 0 1806.63 0c181.19,0 336.87,-86.8 432.13,-240.93 95.26,-154.13 103.27,-332.19 22.24,-494.25 -1476.54,-2953.09 -2953.01,-5906.03 -4429.95,-8859.9 -88.2,-176.39 -257.16,-280.81 -454.37,-280.81 -197.21,0 -366.17,104.42 -454.37,280.81 -1161.33,2322.64 -2322.66,4645.3 -3483.98,6967.96l0 0.01 -9.09 0 -225.75 0 -4200.4 0c-181.19,0 -336.87,-86.8 -432.13,-240.93 -95.26,-154.13 -103.26,-332.2 -22.23,-494.26 1476.48,-2952.93 2952.04,-5904.05 4430.69,-8861.37 88.19,-176.39 257.16,-280.82 454.37,-280.82 197.21,0 366.18,104.44 454.37,280.82l387.22 774.45 5.97 0.06c67.44,194.1 251.94,333.44 469.01,333.44 213.45,0 395.42,-134.73 465.55,-323.78l0.02 0 732.86 -1465.72c73.87,-147.74 73.87,-306.64 0,-454.37 -686.87,-1373.75 -1373.76,-2747.52 -2060.63,-4121.26 -88.19,-176.39 -257.16,-280.82 -454.37,-280.82 -197.21,0 -366.18,104.43 -454.37,280.82 -2475.37,4950.75 -4950.76,9901.51 -7426.14,14852.27l0.74 1.47 -1.47 0zm2624.05 9.07l-4.53 -9.07 9.06 0 -4.53 9.07zm5257.19 -10514.37l-1.51 -3.02 3.02 -0.01 -1.51 3.03z" />
            </g>
          </svg>
        </h1>
        <p className="ag-intro-logo-title" >Web Dev.</p>
      </div>
    </div>
  );
};

export default IntroLoader;
