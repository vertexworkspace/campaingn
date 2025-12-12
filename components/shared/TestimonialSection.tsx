"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// 🧩 Testimonial data model
interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
  logo: string;
}

// 🧠 Component
export default function TestimonialSection({ testimonials,solutions=false }: { testimonials: Testimonial[],solutions?: boolean }) {
  // ✅ Testimonials data


  // ✅ State
  const [current, setCurrent] = useState<number>(0);

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // ✅ Navigation functions
  const nextSlide = () =>
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  // ✅ Animation settings
  const slideAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  return (
    <section className="bg-white overflow-hidden  pt-6 pb-0 md:py-16 lg:py-20 relative">
      {/* Mobile Navigation Buttons */}
      <div className="lg:hidden">
        {/* Left Button */}
        <button


          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute left-4 top-[50%] -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 cursor-pointer transition"
        >
          <svg
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3587 0.99995L1.41422 10.9444L11.3587 20.8889"
              stroke="#848484"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-0  top-[50%] -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 cursor-pointer transition"
        >
          <svg
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

      {/* ===================== MAIN SECTION ===================== */}
      <div className="relative px-12 sm:px-6 lg:px-32 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full relative">
          {/* Navigation Buttons (Static) */}
          <div className="absolute hidden w-full left-0 top-[300px] lg:left-auto lg:top-[480px] lg2:top-[360px] lg:relative z-20 lg:flex  items-center justify-between lg:justify-start gap-4 mb-4 lg:mb-0">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer transition"
            >
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3587 0.99995L1.41422 10.9444L11.3587 20.8889"
                  stroke="#848484"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="h-9 w-9 sm:h-10 cursor-pointer sm:w-10 transition"
            >
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

          {/* ===================== TESTIMONIAL SLIDER ===================== */}
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="relative z-10 flex flex-col lg:flex-row justify-between lg:gap-10"
                  >
                    {/* LEFT — Text Content */}
                    <div className="relative z-20 flex flex-col items-start justify-start mt-4 lg:mt-8 space-y-3 w-full lg:w-1/2 text-center lg:text-left  lg2:pt-10">

                   {testimonial.text.split('\n').map((line, index) => (
  <p
    key={index}
    // We add 'mt-4' to every line except the first one to create spacing
    className={`font-semibold text-primary max-w-2xl mx-auto lg:mx-0  ${
      testimonial.text.length > 200
        ? 'text-[14px] sm:text-[16px] md:text-[16px]'
        : `text-[16px] sm:text-[18px] md:text-[20px] ${solutions ? ' lg:text-3xl' : 'lg:text-xl'}`
    }`}
  >
    {line}
  </p>
))}
                    </div>

                    {/* RIGHT — Image */}
                    <div className="relative z-30 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                      <div className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[90%] max-w-[900px]">
                        <Image
                          alt={testimonial.name}
                          width={1000}
                          height={1000}
                          src={testimonial.image}
                          className="object-cover w-full h-[300px] lg:h-[550px] xl:h-[60vh] relative z-30"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ===================== DARK FOOTER BAR ===================== */}
      <div className="relative z-0 mt-[-20px] sm:mt-[-10px] lg:mt-[-15px] lg2:mt-[-150px] ">
        <div className="bg-[#12181C] text-white">
          <div className="sm:px-6 lg:px-32 mx-auto flex flex-col sm:flex-row items-center justify-between py-10 sm:py-12 gap-4">
            <div className="flex justify-between items-center px-10 lg:px-0 w-full lg:w-[50%] text-center sm:text-left">
              {/* Person Info */}
              <div className="flex text-start flex-col">
                <h4 className="text-lg sm:text-3xl font-semibold text-white">
                  {testimonials[current].name}
                </h4>
{!solutions && (
    <p className="text-white">
      {testimonials[current].role}
    </p>
  )}
              </div>

              {/* Logo */}
      {!solutions &&  <div className="relative min-h-[80px] flex items-center justify-center">
  <Image
    src={testimonials[current].logo}
    alt={`${testimonials[current].name} logo`}
    height={150}
    width={150}
    className="object-cover"
  />
</div>}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
