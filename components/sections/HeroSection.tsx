"use client";

import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import heroImageUrl from "../../public/stockImages/HeroBannerImage1.png";

// Import Swiper styles
import "swiper/css";

export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-20 mx-auto py-12 sm:py-16 lg:py-24 items-center">
      <svg
        className="absolute left-0 top-0 h-full w-auto text-blue-100 pointer-events-none opacity-40"
        width="996"
        height="1117"
        viewBox="0 0 996 1117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M994.492 -30.0756L474.003 732.561L473.819 732.832L473.994 733.109L757.234 1184.27H502.326L326.723 876.953L326.289 876.193L325.854 876.953L150.251 1184.27H-104.652L181.08 733.111L181.249 732.841L181.078 732.573L-92.1119 306.538H164.012L329.576 592.506L329.979 593.203L330.424 592.533L744.648 -30.0756H994.492Z"
          stroke="#0097DC"
        />
      </svg>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-4">
          <div className="">
            {/* LEFT CONTENT */}
            <div className="mt-0 lg:absolute">
              <div className=" bg-white w-full lg:w-[70%] h-auto lg:h-[700px] text-primary   p-6 sm:p-8 lg:p-10 relative z-10">
                <div className="mt-2">
                  <h1 className="text-3xl sm:text-[40px] lg:text-[56px] font-semibold leading-tight text-primary">
                    Private Offices <br />
                    That Mean Business
                  </h1>
                  <p className="mt-3 text-base sm:text-lg lg:text-[24px] text-primary">
                    Vertex Private Offices give you privacy, productivity, and prestige all under one roof.
                  </p>
                </div>

                {/* Contact Form */}
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-8 lg:absolute"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="hidden lg:block lg:col-span-4"></div>
        <div className="col-span-1 lg:col-span-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="h-full"
          >
            {[heroImageUrl, heroImageUrl, heroImageUrl].map((src, idx) => (
              <SwiperSlide key={idx}>
                {/* Wrapper with fixed height */}
                <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[730px]">
                  <Image src={src} alt={`Office slide ${idx + 1}`} fill sizes="100vw" className="object-cover" priority />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
