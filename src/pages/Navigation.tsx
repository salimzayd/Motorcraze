import React from 'react';
import bike from "../assets/dirtbike.png";

function Location() {
  return (
    <div className="h-screen bg-black p-10 sm:p-20 lg:p-36 flex flex-col justify-center">
      {/* Title and hover effect */}
      <div className="flex flex-col justify-center items-center relative space-y-6 sm:space-y-10 lg:space-y-12">
        <h1 className="text-[#edf42af9] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center leading-tight">
          <span className="relative inline-block">
            LET'S TAKE <br />
            <span className="relative z-10 inline-block">
              <span className="relative flex items-center justify-center group cursor-pointer">
                A RIDE
                {/* Circle with map image */}
                <span className="absolute w-24 h-24 sm:w-24 sm:h-24 md:w-30 md:h-30 border-2 border-white rounded-full mt-[-80px] overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-150 z-10">
                  <img
                    src="https://cdn.prod.website-files.com/65a12c5f07c5850dac0dce55/65a12c5f07c5850dac0dce8a_map-p-500.webp"
                    alt="map"
                    className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </span>
                {/* SVG Icon */}
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

        {/* Tooltip text always visible next to the circle */}
        <div className="absolute top-[52%] sm:top-[30%] left-[calc(50%+1rem)] transform -translate-y-1/2 w-32 h-12 sm:h-16 bg-gray-900 text-white text-xs sm:text-sm flex items-center justify-center px-4 py-2 rounded-full z-10">
          Locate the shop
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-[-60px] sm:mt-[-75px]">
        <img
          src={bike}
          alt="dirtbike"
          className="w-auto max-h-[40vh] sm:max-h-[50vh] lg:max-h-[60vh] object-contain mt-[-15px]"
        />
      </div>
    </div>
  );
}

export default Location;
