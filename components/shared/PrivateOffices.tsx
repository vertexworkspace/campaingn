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
import heroImageUrl from "../../public/images/hero.webp";
import image2 from "../../public/images/hero3.webp";
import image3 from "../../public/images/solution-section/modalImages/1.webp";
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
      address: "MG Rd, Ballalbagh, Mangalore, Karnataka 575003",
      image: officeImg,
    },
    {
      title: "Vertex Treo",
      address: "Kadri kambla road, Mangalore, Karnataka 575003",
      image: officeImage2,
    },
    {
      title: "Vertex Five",
      address: "Kadri, Mangalore, Karnataka 575003",
      image: officeImage3,
    },
    {
      title: "Ajanta Business Centre",
      address: "Bejai - Kapikad Road, Kapikad, Mangalore",
      image: heroImageUrl,
    },
    {
      title: "Ashoka Business Centre",
      address: "Bejai - Kapikad Road, Kapikad, Mangalore",
      image: image2,
    },
    {
      title: "Vertex Square",
      address: "MG Road, Mangalore",
      image: image3,
    },
    {
      title: "Vertex Quad",
      address: "Kottara, Mangalore",
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
        <div className="mt-8 mb-12 w-full h-[550px] md:h-[550px]  overflow-hidden">
          <StyledMap />
        </div>

        {/* Office Cards Carousel */}
        <div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="pb-0!"
          >
            {offices.map((office, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="bg-white overflow-hidden transition flex flex-col h-[420px]">
                  <div className="relative w-full h-52 shrink-0">
                    <Image src={office.image} alt={office.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 p-6 text-left">
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-primary line-clamp-2">{office.title}</h3>
                      <p className="text-secondary mt-1 text-base sm:text-lg leading-relaxed line-clamp-3">{office.address}</p>
                    </div>
                    <div className="mt-auto pt-6">
                      <Button
                        aria-label="Get a Quote"
                        onClick={() => setOpen(true)}
                        className="bg-[#0097DC] hover:bg-[#007bb5] text-white font-semibold px-6 py-2"
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
        {open && <ContactForm showModal onClose={() => setOpen(false)} />}
      </div>
    </section>
  );
}
