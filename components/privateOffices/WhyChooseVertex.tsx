"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import img1 from "../../public/images/why-choose-vertex/7.webp";
import img2 from "../../public/images/why-choose-vertex/2.webp";
import img3 from "../../public/images/why-choose-vertex/3.webp";
import img4 from "../../public/images/hero.webp";
import { AmenitiesModal } from "./AmenitiesModal";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperDots from "../ui/SwiperDots";

const amenities = [
  {
    id: 1,
    title: "Fully furnished,",
    title2:"workspaces ready",
    image: img1,
  },
  {
    id: 2,
    title: "Dedicated private ",
    title2:"cabins for secure work",
    image: img2,
  },
  {
    id: 3,
    title: "Housekeeping ensures ",
    title2:"a clean environment",
    image: img3,
  },
  {
    id: 4,
    title: "High-speed internet for",
    title2:"seamless connectivity",
    image: img4,
  },
];

export default function WhyChooseVertex() {
  const [isOpen, setIsOpen] = useState(false);
   const [current, setCurrent] = useState(0);
      const swiperRef = useRef<any>(null);
    
      const handleDotClick = (i: number) => {
        if (!swiperRef.current) return;
        swiperRef.current.slideToLoop(i); // loop safe navigation
      };

  return (
    <section className="bg-[#F8F8F8] pt-8 pb-12 lg:pt-20 px-6 lg:px-12">
      <div className="px-4 sm:px-6 lg:px-20 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between flex-wrap items-start lg:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-[40px] font-semibold text-primary leading-snug">Why Choose Vertex</h2>
            <p className="mt-2 text-secondary font-normal text-base sm:text-lg">
              At Vertex Workspaces, we understand that some ideas need focus and confidentiality.
            </p>
          </div>

          <Button
            aria-label="View More Amenities"
            onClick={() => setIsOpen(true)}
            variant="outline"
            className="border font-bold border-primary text-primary text-lg hover:bg-gray-100 px-5 py-2 rounded-none"
          >
            View More Amenities
          </Button>
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper  onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} >
            {amenities.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative  overflow-hidden group h-[250px]">
                  <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div className="absolute inset-0 flex items-end transition-colors duration-300">
                    <p className="text-white font-semibold text-lg sm:text-2xl p-4">{item.title} <br />{item.title2}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperDots total={amenities.length} current={current} onDotClick={handleDotClick} />
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {/* Left Column (Tall Card for Desktop) */}
          <div className="relative  overflow-hidden group h-[630px] xl:h-full">
            <Image src={amenities[0].image} alt={amenities[0].title} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute inset-0 flex items-end transition-colors duration-300">
              <p className="text-white font-semibold text-3xl xl:text-[38px] p-4">{amenities[0].title} <br /> {amenities[0].title2}</p>
            </div>
          </div>

          {/* Right Columns (2x2 Grid in Desktop) */}
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-6">
            {/* Top two cards */}
            {amenities.slice(1, 3).map((item) => (
              <div key={item.id} className="relative  overflow-hidden group h-auto">
                <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
                <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute inset-0 flex items-end transition-colors duration-300">
                  <p className="text-white font-semibold text-3xl xl:text-[38px] p-4">{item.title} <br />{item.title2}</p>
                </div>
              </div>
            ))}

            {/* Bottom full-width card */}
            <div className="relative col-span-2  overflow-hidden group h-auto">
              <Image src={amenities[3].image} alt={amenities[3].title} className="object-cover w-full h-[300px] xl:h-[400px]" />
              <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute inset-0 flex items-end transition-colors duration-300">
                <p className="text-white font-semibold text-3xl xl:text-[38px] p-4">{amenities[3].title} <br /> {amenities[3].title2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Modal */}
      <AmenitiesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
