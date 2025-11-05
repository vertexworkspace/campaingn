"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      text: "“My experience with the Vertex workspace is 5 stars. Good parking space, professional meeting space, and 5-star staff. Thank you.”",
      name: "Mithun Raj",
      role: "Director · Productions",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 2,
      text: "“Vertex Workspace has transformed how I work — quiet, clean, and full of energy. Highly recommended!”",
      name: "Sneha Kumar",
      role: "Creative Strategist",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
    {
      id: 3,
      text: "“Perfect environment for startups. Great amenities and a fantastic support team.”",
      name: "Rahul Menon",
      role: "Co-founder · Pixel Bay",
      image: "/images/testimonials/1.png",
      logo: "/images/testimonials/svg/exito.svg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white overflow-hidden py-12  md:py-16 lg:py-20 relative">
      <div className="relative px-12 sm:px-6 lg:px-32 mx-autoflex flex-col lg:flex-row items-center justify-between  gap-10">
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative z-10 flex flex-col lg:flex-row  justify-between gap-10"
                  >
                    {/* LEFT SIDE — TEXT */}
                    <div className="relative z-20 flex flex-col items-start justify-center space-y-6 w-full lg:w-1/2 text-center lg:text-left">
                      <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-3xl font-semibold text-primary max-w-2xl mx-auto lg:mx-0">
                        {testimonial.text}
                      </p>

                      {/* NAVIGATION BUTTONS */}
                      <div className="flex items-center justify-center lg:justify-start gap-4">
                        <button onClick={prevSlide} className="h-9 w-9 sm:h-10 sm:w-10 transition">
                          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.3587 0.99995L1.41422 10.9444L11.3587 20.8889"
                              stroke="#D1D1D1"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>

                        <button onClick={nextSlide} className="h-9 w-9 sm:h-10 sm:w-10 transition">
                          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M0.999998 20.889L10.9445 10.9445L0.999998 1"
                              stroke="#848484"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* RIGHT SIDE — IMAGE */}
                    <div className="relative z-30 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                      <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[90%] max-w-[900px]">
                        <Image
                          alt={testimonial.name}
                          width={1000}
                          height={1000}
                          src={testimonial.image}
                          className="object-contain w-full h-auto  relative z-30"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* DARK BAR BELOW */}
      <div className="relative z-0 mt-[-60px] sm:mt-[-80px] md:mt-[-150px]">
        <div className="bg-[#12181C] text-white">
          <div className="sm:px-6 lg:px-32 mx-auto flex flex-col sm:flex-row items-center justify-between  py-5 sm:py-6 gap-4">
            <div className="flex justify-between w-full sm:w-[50%] text-center sm:text-left">
              <div className="flex flex-col">
                <h4 className="text-base sm:text-3xl font-semibold text-white">{testimonials[current].name}</h4>
                <p className="text-[20px] sm:text-[26px] text-white">{testimonials[current].role}</p>
              </div>
              <Image src={testimonials[current].logo} alt="Logo" width={110} height={100} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
