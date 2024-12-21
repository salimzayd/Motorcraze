import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../assets/cards/a.jpeg";
import e from "../assets/cards/e.jpeg";
import f from "../assets/cards/f.jpeg";

const Cards = () => {
  const cardData = [
    { title: "Lorem ipsum 'dolor' sit amet", image: a },
    { title: "Lorem ipsum 'dolor' sit amet", image: e },
    { title: "Lorem ipsum 'dolor' sit amet", image: a },
    { title: "Lorem ipsum 'dolor' sit amet", image: f },
    { title: "Lorem ipsum 'dolor' sit amet", image: e },
    { title: "Lorem ipsum 'dolor' sit amet", image: f },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false, // Disable center mode on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false, // Disable center mode on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode on very small screens
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Title */}
      <div className="w-full mb-8 px-8 text-left">
        <p className="text-3xl font-semibold text-white">
          <span className="text-yellow-300">Guides</span> for you
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full px-8">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-4 md:px-6">
              <div className="relative overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-500">
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[300px] md:h-[400px] object-cover" // Adjust the height for better scaling
                />
                {/* Gradient Text Overlay */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {card.title.split("'dolor'").map((part, idx) => (
                      <span key={idx}>
                        {part}
                        {idx === 1 && (
                          <span className="text-yellow-300"> dolor</span>
                        )}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
