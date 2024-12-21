import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import one from "../assets/bk/1.jpg";
import two from "../assets/bk/2.jpg";
import three from "../assets/bk/3.jpg";
import four from "../assets/bk/4.jpeg";

const Scrollbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);
    
    const bikeDetails = [
        {
            firstName: "Used",
            lastName: "Bikes",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
            image: one,
        },
        {
            firstName: "Genuine",
            lastName: "Accessories",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
            image: two,
        },
        {
            firstName: "Riding",
            lastName: "Gears",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
            image: four,
        },
        {
            firstName: "Bike",
            lastName: "Servicing",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
            image: three,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.indexOf(entry.target);
                        setActiveIndex(index);
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is in view
            }
        );

        sectionRefs.current.forEach((section) => observer.observe(section));

        return () => {
            sectionRefs.current.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="bg-[#2e2e2e] scroll-smooth flex items-center justify-center">
            <div className="bg-[#2e2e2e] h-5/6 w-11/12 flex">
                {/* Sticky Sidebar */}
                <div className="bg-black w-1/4 p-4 h-[calc(100vh-8rem)] sticky top-16 flex flex-col justify-between rounded-3xl">
                    <div className="text-center mb-4">
                        <h1 className="text-2xl font-semibold text-gray-400">
                            {bikeDetails[activeIndex].firstName}
                        </h1>
                        <h2 className="text-2xl font-semibold text-yellow-300">
                            {bikeDetails[activeIndex].lastName}
                        </h2>
                        <div className="h-[1px] bg-gray-400 mx-auto mt-16"></div>
                    </div>
                    <p className="text-white text-center mb-14">
                        {bikeDetails[activeIndex].content}
                    </p>
                    <button className="mt-4 text-white py-2 px-4 rounded-xl hover:bg-gray-900 border border-yellow-400">
                        GET INFO
                    </button>
                </div>

                {/* Scrollable Sections */}
                <div className="w-3/4 scroll-smooth pl-10">
                    {bikeDetails.map((data, index) => (
                        <section
                            ref={(el) => (sectionRefs.current[index] = el)}
                            key={index}
                            className="panel flex justify-center items-center sticky top-0 text-white h-screen"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: "100%" }} // Start just below the frame
                                animate={{ opacity: 1, y: "0%" }}  // Move into the frame
                                exit={{ opacity: 0, y: "-100%" }}   // Exit upwards
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="w-full h-[calc(100vh-8rem)] aspect-video overflow-hidden rounded-3xl"
                            >
                                <img
                                    src={data.image}
                                    alt={`${data.firstName} ${data.lastName}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Scrollbar;
