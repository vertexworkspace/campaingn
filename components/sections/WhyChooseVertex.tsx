"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import img1 from "../../public/images/why-choose-vertex/1.webp";
import img2 from "../../public/images/why-choose-vertex/2.webp";
import img3 from "../../public/images/why-choose-vertex/3.webp";
import img4 from "../../public/images/why-choose-vertex/4.webp";
import { AmenitiesModal } from "../AmenitiesModal";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const amenities = [
  {
    id: 1,
    title: "Fully furnished, workspaces ready",
    image: img1,
  },
  {
    id: 2,
    title: "Dedicated private cabins for secure work",
    image: img2,
  },
  {
    id: 3,
    title: "Housekeeping ensures a clean environment",
    image: img3,
  },
  {
    id: 4,
    title: "High-speed internet for seamless connectivity",
    image: img4,
  },
];

export default function WhyChooseVertex() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#F8F8F8] py-16 lg:pt-20 px-6 lg:px-12">
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
            onClick={() => setIsOpen(true)}
            variant="outline"
            className="border font-bold border-primary text-primary text-lg hover:bg-gray-100 px-5 py-2 rounded-none"
          >
            View More Amenities
          </Button>
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper  spaceBetween={24} slidesPerView={1} loop={true} // ✅ Enables looping
            autoplay={{
              delay: 2000, // ✅ 3 seconds per slide
              disableOnInteraction: false, // Keeps autoplay active after user swipes
            }}
            modules={[Autoplay]} >
            {amenities.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative  overflow-hidden group h-[250px]">
                  <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end transition-colors duration-300">
                    <p className="text-white font-semibold text-lg sm:text-2xl p-4">{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {/* Left Column (Tall Card for Desktop) */}
          <div className="relative  overflow-hidden group h-[630px] xl:h-full">
            <Image src={amenities[0].image} alt={amenities[0].title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-end transition-colors duration-300">
              <p className="text-white font-semibold text-3xl p-4">{amenities[0].title}</p>
            </div>
          </div>

          {/* Right Columns (2x2 Grid in Desktop) */}
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-6">
            {/* Top two cards */}
            {amenities.slice(1, 3).map((item) => (
              <div key={item.id} className="relative  overflow-hidden group h-auto">
                <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-end transition-colors duration-300">
                  <p className="text-white font-semibold text-3xl p-4">{item.title}</p>
                </div>
              </div>
            ))}

            {/* Bottom full-width card */}
            <div className="relative col-span-2  overflow-hidden group h-auto">
              <Image src={amenities[3].image} alt={amenities[3].title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end transition-colors duration-300">
                <p className="text-white font-semibold text-3xl p-4">{amenities[3].title}</p>
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
