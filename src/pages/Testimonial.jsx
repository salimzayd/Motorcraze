import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="main h-screen w-full">
        <div className="head ml-10">
          <h3 className="text-3xl font-semibold text-white">
            <span className="text-yellow-300">Testimonials</span> for you
          </h3>
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 text-center">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
              <span className="text-yellow-400">"</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cumque! Nulla maiores esse consequatur modi aliquid commodi iste aspernatur, ab molestias fugit! Facere, id illo."
            </p>
            <span className="block text-white text-lg sm:text-xl md:text-2xl mt-4">- Lorem ipsum</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
