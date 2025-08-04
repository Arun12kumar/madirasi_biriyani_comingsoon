// src/App.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger, TextPlugin);

const App = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const countdownRef = useRef(null);
  const overlayRef = useRef(null);
  const subscribeRef = useRef(null);

  useEffect(() => {
    gsap.from(overlayRef.current, {
      backgroundColor: "rgba(0,0,0,0)",
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0, rotation: -180 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5,
      }
    );

    gsap.to(textRef.current, {
      text: "COMING SOON",
      duration: 2,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(countdownRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      delay: 2,
      ease: "back.out(1.7)",
    });

    gsap.from(subscribeRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subscribeRef.current,
        start: "top 90%",
      },
    });

    // Floating background particles
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      p.className = "absolute rounded-full bg-yellow-500 opacity-60";
      p.style.width = `${Math.random() * 8 + 5}px`;
      p.style.height = p.style.width;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      containerRef.current.appendChild(p);
      particles.push(p);
    }

    particles.forEach((p) => {
      gsap.to(p, {
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        duration: gsap.utils.random(4, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-hidden">
      <img
        src="/images/biriyani_image.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center px-4 space-y-8"
      >
        {/* Logo */}
        <div className="relative">
          <img
            src="/images/logo.jpg"
            ref={logoRef}
            alt="Madrasi Biriyani Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
            <div className="shine-effect"></div>
          </div>
        </div>

        {/* Animated Text */}
        <h1
          ref={textRef}
          className="text-white text-4xl md:text-6xl font-bold tracking-widest text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        />

        {/* Countdown */}
        <div
          ref={countdownRef}
          className="flex space-x-4 md:space-x-8 mt-2 text-center"
        >
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
            <div key={unit}>
              <div className="text-white text-3xl md:text-5xl font-mono font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {("00" + (30 - i * 7)).slice(-2)}
              </div>
              <div className="text-yellow-300 text-xs md:text-sm mt-2 uppercase tracking-wide">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Email Subscribe */}
        <div ref={subscribeRef} className="mt-8 w-full max-w-md">
          <div className="flex">
            <input
              type="email"
              placeholder="Get notified when we launch"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-r-lg transition-colors duration-300">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
