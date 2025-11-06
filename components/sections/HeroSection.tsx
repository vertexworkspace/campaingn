"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImageUrl from "../../public/stockImages/HeroBannerImage1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  const swiperRef = useRef<any>(null);
  const slides = [heroImageUrl, heroImageUrl, heroImageUrl];
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  const handleDotClick = (i: number) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideToLoop(i); // loop safe navigation
  };

  return (
    <section className="relative w-full  bg-white pb-10 lg:pb-16 lg:pt-36 overflow-hidden">
      <svg className="absolute top-0" width="996" height="1117" viewBox="0 0 996 1117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M994.492 -30.0756L474.003 732.561L473.819 732.832L473.994 733.109L757.234 1184.27H502.326L326.723 876.953L326.289 876.193L325.854 876.953L150.251 1184.27H-104.652L181.08 733.111L181.249 732.841L181.078 732.573L-92.1119 306.538H164.012L329.576 592.506L329.979 593.203L330.424 592.533L744.648 -30.0756H994.492Z"
          stroke="#0097DC"
        />
      </svg>
      <div className="px-0 sm:px-6 relative  lg:px-20">
        {/* ✅ RIGHT SIDE - SWIPER */}
        <div className="relative w-full lg:w-[70%] lg:ml-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
            className="h-full"
          >
            {slides.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                  <Image src={src} alt={`Office slide ${idx + 1}`} fill sizes="100vw" className="object-cover" priority />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Custom Navigation Buttons + Dots */}
          <div className="absolute bottom-6 right-5  z-20 flex items-center gap-6">
            {/* Dots */}
            <div className="flex justify-center gap-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-7 h-[2.55px] rounded-2xl transition-all cursor-pointer ${i === current ? "bg-[#0097DC] scale-125" : "bg-[#E2E2E2]"}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button onClick={handleNext} className=" text-[#D1D1D1]">
              <ChevronRight
                className={`${
                  current === slides.length - 1 ? "text-[#D1D1D1]" : "text-[#D1D1D1]"
                } size-10 transition-colors duration-300 cursor-pointer`}
              />
            </button>
          </div>
        </div>

        {/* ✅ LEFT SIDE - FORM SECTION */}
        <div className="hidden lg:block lg:absolute top-1/2 -translate-y-1/2 left-6 sm:left-10 lg:left-[5%] bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[44%] xl:w-[35%] p-6 sm:p-10 z-10">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-[40px] lg:text-[50px] font-semibold leading-tight text-primary">
              Private Offices <br />
              That Mean Business
            </h1>
            <p className="mt-3 text-base sm:text-lg lg:text-[22px] text-primary">
              Vertex Private Offices give you privacy, productivity, and prestige all under one roof.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
