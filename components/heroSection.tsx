"use client";
import Image from "next/image";

const HeroSection = () => {
  const handleScroll = () => {
    document
      .getElementById("recent-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center justify-center">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center lg:text-start">
          Hi, I&#39;m Ali Ahmad.
        </h1>
        <h2 className="text-center lg:text-justify text-lg md:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
          A Frontend Developer with over 3 years of experience creating
          immersive and responsive web applications. I specialize in React,
          Next.js, and cutting-edge frontend technologies, including Three.js
          for 3D experiences. My passion lies in crafting high-quality user
          interfaces that merge performance with elegance.
        </h2>

        <button
          onClick={handleScroll}
          className="inline-block w-fit border border-white/40 hover:bg-white/20 text-white font-light py-3 px-6 rounded-md transition-all duration-500 ease-in-out"
        >
          Explore My Work
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image
          src={"/assets/images/Ali.jpeg"}
          alt="My Portfolio Image"
          width={400}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
