import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // Glowing loop effect using text-shadow
    gsap.to(textRef.current, {
      textShadow: "0 0 3px #ffb347, 0 0 10px #eb7221ff",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col items-center justify-around">
      {/* Background Image */}
      <img
        src="images/background.png"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        alt="Background"
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, black 100%)",
        }}
      />

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center backdrop-blur-[2px] bg-transparent px-6 py-1 rounded-xl">
        <img
          src="images/logo.jpg"
          alt="Logo"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover shadow-md"
        />
        <h1
          ref={textRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-[#ffcc70] via-[#ffb347] to-[#ff944d] bg-clip-text text-transparent px-4 py-3"
        >
          Coming Soon
        </h1>
        <p className="text-gray-300 font-sans text-xl">Taste our Magic</p>
      </div>
      <div className="flex gap-5">
        <button className="text-gray-300 font-sans text-sm hover:bg-[#e3e3e34a] px-2 py-1 rounded-full transition duration-300 ease-in-out">
          Kollam
        </button>
        <button className="text-gray-300 font-sans text-sm hover:bg-[#e3e3e34a] px-2 py-1 rounded-full transition duration-300 ease-in-out">
          +91 23452 4567
        </button>
        <button className="text-gray-300 font-sans text-sm hover:bg-[#e3e3e34a] px-2 py-1 rounded-full transition duration-300 ease-in-out">
          arun@gmail.com
        </button>
        <button className="text-gray-300 font-sans text-sm hover:bg-[#e3e3e34a] px-2 py-1 rounded-full transition duration-300 ease-in-out">
          www.biriyani.com
        </button>
      </div>
    </div>
  );
};

export default Hero;
