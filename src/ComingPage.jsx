import React from "react";

const ComingPage = () => {
  return (
    <div className="relative h-screen w-screen bg-[#CEAA4D] overflow-hidden flex flex-col justify-center px-8 md:px-20">
      {/* Textual content */}
      <div className="z-10 max-w-xl text-[#351400]">
        <img src="/images/logo.jpg" alt="Madrasi Biryani Logo" className="w-24 mb-6" />

        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>

        <p className="text-lg font-medium mb-6">
          Experience the rich heritage of biryani,<br /> crafted with timeless passion
        </p>

        <div className="flex gap-4 text-2xl">
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-whatsapp" /></a>
          <a href="#"><i className="fab fa-facebook" /></a>
        </div>
      </div>

      {/* Image masked using SVG */}
      <div className="absolute top-0 right-0 h-full w-[60%] hidden md:block">
        <svg viewBox="0 0 800 800" className="h-full w-full absolute top-0 right-0">
          <defs>
            <clipPath id="waveMask" clipPathUnits="objectBoundingBox">
              
              <path d="M0,0 H1 V0.75 C0.9,0.8 0.7,0.7 0.6,0.8 C0.5,0.9 0.3,1 0,0.9 Z" />
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href="/images/biriyani_image.png"
            clipPath="url(#waveMask)"
          />
        </svg>
      </div>
    </div>
  );
};

export default ComingPage;
