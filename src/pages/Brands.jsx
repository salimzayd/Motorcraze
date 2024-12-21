import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agv from "../assets/brnds/agv.png";
import aprilia from "../assets/brnds/aprilia.png";
import bmw from "../assets/brnds/bmw.png";
import ducati from "../assets/brnds/ducati.png";
import enfield from "../assets/brnds/enfield.png";
import honda from "../assets/brnds/honda.png";
import kawasaki from "../assets/brnds/kawasaki.png";
import ninja from "../assets/brnds/ninja.png";
import suzuki from "../assets/brnds/suzuki.png";
import triumph from "../assets/brnds/truimph.png";
import yamaha from "../assets/brnds/yamaha.png";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust speed for smoother transition
    arrows: false,
    slidesToShow: 3,  // 3 visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',  // Smooth transition effect
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brandLogos = [
    agv,
    aprilia,
    bmw,
    ducati,
    enfield,
    honda,
    kawasaki,
    ninja,
    suzuki,
    triumph,
    yamaha,
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 mt-20 mb-20 overflow-hidden">
      {/* Text Section */}
      <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
        <h2 className="text-white ml-0 md:ml-28 text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
          Featuring the world's top{" "}
          <span className="text-yellow-300">brands</span> for you
        </h2>
      </div>

      {/* Slider Section */}
      <div className="w-full md:w-1/2 relative bg-black">
        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`brand-${index}`}
                className="h-16 w-auto object-contain mx-auto" // Adjust image size
              />
            </div>
          ))}
        </Slider>

        {/* Fade effect at the left end */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent"></div>

        {/* Fade effect at the right end */}
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default Brands;
