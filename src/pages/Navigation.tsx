import React, { useState, useEffect } from 'react';
import bike from "../assets/dirtbike.png";

function Location() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const getBikeTransform = (e) => {
    const offsetX = (e.clientX / window.innerWidth) * 30 - 15;
    const offsetY = (e.clientY / window.innerHeight) * 30 - 15;
    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  const handleMouseMove = (e) => {
    // Clear the existing timeout to reset the inactivity timer
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    // Update position and indicate mouse is moving
    setIsMouseMoving(true);
    setPosition({ x: e.clientX, y: e.clientY });

    // Set a timeout to stop the movement and restart the bounce after 3 seconds
    const newTimeoutId = setTimeout(() => {
      setIsMouseMoving(false);
    }, 2000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      // Cleanup timeout on component unmount
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div 
      className="h-screen bg-black p-10 sm:p-20 lg:p-36 flex flex-col justify-center"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col justify-center items-center relative space-y-6 sm:space-y-10 lg:space-y-12">
        <h1 className="text-[#edf42af9] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center leading-tight">
          <span className="relative inline-block">
            LET'S TAKE <br />
            <span className="relative z-10 inline-block">
              <span className="relative flex items-center justify-center group cursor-pointer">
                A RIDE
                <span className="absolute w-24 h-24 sm:w-24 sm:h-24 md:w-30 md:h-30 border-2 border-white rounded-full mt-[-80px] overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-150 z-10">
                  <img
                    src="https://cdn.prod.website-files.com/65a12c5f07c5850dac0dce55/65a12c5f07c5850dac0dce8a_map-p-500.webp"
                    alt="map"
                    className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute w-8 h-8 text-white mb-10 z-20 group-hover:text-black mt-[-40px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </span>
          </span>
        </h1>

        <div className="absolute top-[52%] sm:top-[30%] left-[calc(50%+1rem)] transform -translate-y-1/2 w-32 h-12 sm:h-16 bg-gray-900 text-white text-xs sm:text-sm flex items-center justify-center px-4 py-2 rounded-full z-10">
          Locate the shop
        </div>
      </div>

      <div className="flex justify-center mt-[-60px] sm:mt-[-75px]">
        <img
          src={bike}
          alt="dirtbike"
          className="w-auto max-h-[40vh] sm:max-h-[50vh] lg:max-h-[60vh] object-contain mt-[-15px]"
          style={{
            animation: isMouseMoving ? 'none' : 'bounce 2s infinite ease-in-out',
            transform: isMouseMoving ? getBikeTransform({ clientX: position.x, clientY: position.y }) : 'none',
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default Location;
