"use client";

import Image from "next/image";
import { Button } from "../ui/Button"; // adjust import path based on your project
import officeImg from "../../public/images/2.png"; // replace with your actual image path
import officeImage2 from "../../public/images/solution-section/5.webp";
import officeImage3 from "../../public/images/solution-section/1.webp";
import { ContactForm } from "./ContactForm";
import { useRef, useState } from "react";
import { StyledMap } from "../ui/StyledMap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperDots from "../ui/SwiperDots";
export default function PrivateOffices({ title, description, buttontext }: { title: string; description: string; buttontext: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleDotClick = (i: number) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideToLoop(i); // loop safe navigation
  };
  const offices = [
    {
      title: "Vertex One",
      address: "Gateway Building, MG Rd, Ballalbagh, Mangaluru, Karnataka 575003",
      image: officeImg,
    },
    {
      title: "Vertex Treo",
      address: "Kambala Road, Mallikatte, Kadri, Mangaluru, Karnataka 575003",
      image: officeImage2,
    },
    {
      title: "Vertex Five",
      address: "Mallikatte Rd, Mallikatte, Kadri, Mangaluru, Karnataka 575003",
      image: officeImage3,
    },
  ];

  return (
    <section className="bg-[#F8F8F8] pt-10 pb-14 lg:py-16 px-6 lg:px-12">
      <div className="px-4 sm:px-6 lg:px-20 mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-[40px] text-start font-semibold text-primary leading-snug">{title}</h2>
        <p className="mt-2 text-secondary font-normal text-base sm:text-lg">{description}</p>

        {/* Map */}
        <div className="mt-8 mb-12 w-full h-[300px]  overflow-hidden">
          <StyledMap />
        </div>

        {/* Office Cards */}
        <div className="md:hidden">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {offices.map((office, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white overflow-hidden transition">
                  <div className="relative w-full h-52">
                    <Image src={office.image} alt={office.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-primary">{office.title}</h3>
                    <p className="text-secondary mt-1text-base sm:text-lg leading-relaxed">{office.address}</p>
                    <div className="mt-6">
                      <Button
                        aria-label="Get a Quote"
                        onClick={() => setOpen(true)}
                        className="bg-[#0097DC] hover:bg-[#007bb5] text-white font-semibold px-6 py-2 "
                      >
                      {buttontext}
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperDots total={offices.length} current={current} onDotClick={handleDotClick} />
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 xl:gap-20">
          {offices.map((office, index) => (
            <div key={index} className="bg-white overflow-hidden transition flex flex-col h-full">
              {/* 🖼️ Image */}
              <div className="relative w-full h-52">
                <Image src={office.image} alt={office.title} fill className="object-cover" />
              </div>

              {/* 📄 Content section */}
              <div className="flex flex-col flex-1 p-6 text-left">
                <div>
                  <h3 className="text-3xl font-semibold text-primary">{office.title}</h3>
                  <p className="text-secondary mt-1 text-lg leading-relaxed">{office.address}</p>
                </div>

                {/* 🧭 Button pinned at the bottom */}
                <div className="mt-auto pt-6 flex ">
                  <Button
                    aria-label="Get a Quote"
                    onClick={() => setOpen(true)}
                    className="bg-[#0097DC] hover:bg-[#0097DC]/80 text-white font-semibold px-6 py-2"
                  >
                    {buttontext}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {open && <ContactForm showModal onClose={() => setOpen(false)} />}
      </div>
    </section>
  );
}
