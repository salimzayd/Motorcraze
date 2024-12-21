import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import one from "../assets/bk/1.jpg";
import two from "../assets/bk/2.jpg";
import three from "../assets/bk/3.jpg";

const Scrollbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const panels = gsap.utils.toArray(".panel");
    let observer, scrollTween;

    // Normalize scroll for touch devices
    if (ScrollTrigger.isTouch === 1) {
      observer = ScrollTrigger.normalizeScroll(true);
    }

    // Prevent default scroll behavior on touch devices if there's an active tween
    document.addEventListener(
      "touchstart",
      (e) => {
        if (scrollTween) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
      { capture: true, passive: false }
    );

    // Function to scroll to a specific section
    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        onStart: () => {
          if (observer) {
            observer.disable();
            observer.enable();
          }
        },
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    // Create ScrollTriggers for each panel
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=100%",
        scrub: true,
        onToggle: (self) => {
          if (self.isActive && !scrollTween) {
            setActiveIndex(i);
            goToSection(i);
          }
        },
      });
    });

    // Snap to sections for a smooth experience
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (observer) observer.kill();
    };
  }, []);

  const bikeDetails = [
    {
      title1: "Used",
      title2: "Bikes",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
      image: one,
    },
    {
      title1: "Genuine",
      title2: "Accessories",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt magna aliquam erat volutpat. Ut wisi enim",
      image: two,
    },
    {
      title1: "Riding",
      title2: "Gears",
      details:
        "Lorem ipsum dolor sit amet, consectetuer, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
      image: three,
    },
  ];

  return (
    <div className="flex bg-[#2e2e2e]">
      {/* Sticky Sidebar with Strict Layout */}
      <div className="bg-black w-1/4 h-[calc(100vh-3rem)] sticky top-8 flex flex-col justify-center items-center rounded-3xl  ml-8 mt-8">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-400">
            {bikeDetails[activeIndex].title1}
          </h1>
          <h2 className="text-2xl font-semibold text-yellow-300">
            {bikeDetails[activeIndex].title2}
          </h2>
          <div className="h-[1px] bg-gray-400 mx-auto mt-8"></div>
        </div>
        <p className="text-white text-center mb-10">
          {bikeDetails[activeIndex].details}
        </p>
        <button className="mt-4 text-white py-2 px-4 rounded-xl hover:bg-gray-900 border border-yellow-400">
          GET INFO
        </button>
      </div>

      {/* Scrollable Sections with Image */}
      <div className="p-20 pl-48 w-3/4">
        {bikeDetails.map((bike, index) => (
          <section
            key={index}
            className="panel flex justify-center items-center text-white sticky top-0 h-screen"
          >
            <div
              className="w-full h-[calc(100vh-3rem)] aspect-video overflow-hidden rounded-3xl relative mt-8"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end", // Align the image to the bottom of the div
              }}
            >
              <img
                src={bike.image}
                alt={`${bike.title1} ${bike.title2}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(${activeIndex === index ? "0%" : 
                    activeIndex > index ? "-100%" : "100%"})`, // Image slides up for scroll down and slides down for scroll up
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Scrollbar;
