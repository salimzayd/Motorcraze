import React, { useState, useEffect } from "react";
import dirt from "../../src/assets/dirtbike.png";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverLine, setHoverLine] = useState(null);
  const [scrollY, setScrollY] = useState(0); // track position

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // update scroll
    };

    window.addEventListener("scroll", handleScroll);

    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e, line) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get the text area bounding box
    setPosition({
      x: e.clientX - rect.left, // Adjust for the container's position
      y: e.clientY - rect.top, // Adjust for the container's position
    });
    setHoverLine(line);
  };

  // Calculate the stronger transform effect for the bike image
  const getBikeTransform = (e) => {
    const offsetX = (e.clientX / window.innerWidth) * 30 - 15; // Adjusted X-axis transform
    const offsetY = (e.clientY / window.innerHeight) * 30 - 15; // Adjusted Y-axis transform
    return `translate(${offsetX}px, ${offsetY}px)`; // Stronger movement effect
  };

  return (
    <div
      className="relative bg-black w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8"
      onMouseMove={(e) => {
        // Only track mouse move when outside of text area
        if (!isHovered) {
          setPosition({ x: e.clientX, y: e.clientY });
        }
      }}
    >
      <div className="relative z-10 text-center mb-[-10px]">
        {/* First Text with Hover Glow */}
        <div
          className="relative text-silver/10 text-4xl sm:text-5xl md:text-9xl font-bold leading-none font-family: 'Creepster', cursive"
          onMouseMove={(e) => handleMouseMove(e, "first")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          RIDE FOR
          {isHovered && hoverLine === "first" && (
            <div
              className="absolute pointer-events-none"
              style={{
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)", // Ensures the glow is centered on the mouse
                mixBlendMode: "screen",
                pointerEvents: "none",
                zIndex: 0, // Ensure it stays behind the text
                opacity: 0.8, // Glow opacity
              }}
            >
              <div
                className="relative w-[250px] h-[250px] rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255, 223, 0, 1), rgba(255, 223, 0, 0.9), rgba(255, 223, 0, 0.3), transparent)`,
                  filter: `blur(80px) drop-shadow(0 0 50px rgba(255, 223, 0, 0.7)) drop-shadow(0 0 100px rgba(255, 223, 0, 0.4))`,
                  opacity: 0.9,
                }}
              />
            </div>
          )}
        </div>

        {/* Second Text with Scroll Transition */}
        <div
          className="relative text-silver/10 text-4xl sm:text-5xl md:text-9xl font-bold leading-none font-[system-ui] mt-[-5px]"
          onMouseMove={(e) => handleMouseMove(e, "second")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`, // Moves down as you scroll
            transition: "transform 0.3s ease-out", // Smooth transition effect
          }}
        >
          YOUR PASSION
          {isHovered && hoverLine === "second" && (
            <div
              className="absolute pointer-events-none"
              style={{
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)", // Ensures the glow is centered on the mouse
                mixBlendMode: "screen",
                pointerEvents: "none",
                zIndex: 0, // Ensure it stays behind the text
                opacity: 0.8, // Glow opacity
              }}
            >
              <div
                className="relative w-[250px] h-[250px] rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255, 223, 0, 1), rgba(255, 223, 0, 0.9), rgba(255, 223, 0, 0.3), transparent)`,
                  filter: `blur(80px) drop-shadow(0 0 50px rgba(255, 223, 0, 0.7)) drop-shadow(0 0 100px rgba(255, 223, 0, 0.4))`,
                  opacity: 0.9,
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Bike Image: Only move with mouse when outside of text */}
      <img
        src={dirt}
        alt="dirt bike"
        className="z-10 w-[500px] sm:w-[600px] md:w-[700px] object-contain pointer-events-auto mt-[-15px] sm:mt-0"
        style={{
          transform: !isHovered ? getBikeTransform({ clientX: position.x, clientY: position.y }) : "none", // Only transform when not hovering over text
          transition: "transform 0.1s ease-out", // Smooth transition effect for the bike image
        }}
      />
    </div>
  );
};

export default Home;
