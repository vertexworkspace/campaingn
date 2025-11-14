"use client";
import Image from "next/image";
import React, { useState } from "react";
import EventBrandingSpaces from "./EventBrandingSpaces";
import { Button } from "@/components/ui/Button";
import { WorkSpaceSeat, WorkSpaceCloack, WorkSpaceProjector, WorkSpaceShakeHand, Coffe, CoffeeMaker } from "../../../public/icons/icon";
import { ContactForm } from "@/components/shared/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const BanquetSpace = () => {
  const [open, setOpen] = useState(false);



  const features = [
    {
      icon: <WorkSpaceSeat />,
      title: "Spacious rooms which could accommodate up to 30 guests",
    },
    {
      icon: <WorkSpaceCloack />,
      title: "4-hour booking slots with flexible extensions",
    },
    {
      icon: <WorkSpaceProjector />,
      title: "Audio-visual setup, projector, and presentation support",
    },
    {
      icon: <WorkSpaceShakeHand />,
      title: "Ideal for corporate meets, training, or networking events",
    },
  ];

  const details = [
    {
      icon: <Coffe />,
      text: "Food Charged separately as per requirement",
    },
    {
      icon: <Coffe />,
      text: "Parking available on a first-come, first-served basis*",
    },
    {
      icon: <CoffeeMaker />,
      text: "Setup Includes Chairs, tables, microphone, AC, and projector",
    },
    {
      icon: <CoffeeMaker />,
      text: "Ideal for corporate conferences, networking meetings, or private celebrations",
    },
  ];

  return (
    <section className="lg:pl-8 lg:pe-3 mt-10 lg:mt-20 pb-10 lg:pb-8 bg-white text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-8 lg:mb-20 px-4 sm:px-0 sm:mb-20">
        <h2 className="text-2xl md:text-[40px] text-primary font-semibold mb-6 sm:mb-8">Workspaces Designed Around You</h2>

        <div className="lg:grid grid-cols-1 hidden  sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
          {features.map((f, i) => (
            <div key={i} className="p-5 sm:p-6 border border-[#0097DC]  flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">{f.icon}</div>
              <p className="text-sm sm:text-base md:text-lg text-secondary font-medium">{f.title}</p>
            </div>
          ))}
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          loop={true} // ✅ Enables looping
          autoplay={{
            delay: 2000, // ✅ 3 seconds per slide
            disableOnInteraction: false, // Keeps autoplay active after user swipes
          }}
          modules={[Autoplay]}
          className=""
        >
          {features.map((f, i) => (
            <SwiperSlide key={i}>
              <div key={i} className="p-5  sm:p-6 border border-[#0097DC] lg:hidden flex flex-col items-center text-center">
                <div className="mb-3 sm:mb-4">{f.icon}</div>
                <p className="text-sm sm:text-base md:text-lg text-secondary font-medium">{f.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Banquet Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center px-4 sm:px-0">
        {/* Left: Image */}
        <div className="w-full hidden lg:block lg:col-span-5">
          <Image
            src="/dummy/1.webp"
            alt="Banquet Space"
            width={1000}
            height={1000}
            className="w-full h-[300px] sm:h-[500px] md:h-[730px] object-cover "
          />
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl md:text-[40px] text-primary font-semibold mb-4 sm:mb-6">Banquet Space</h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-2 mb-6">
            {details.map((item, index) => (
              <li key={index} className="flex items-start gap-3  p-3 sm:p-0  sm:bg-transparent">
                <div className="flex items-center justify-center lg:mt-2 w-8 h-8 lg:w-8 lg:h-8 flex-shrink-0">{item.icon}</div>
                <p className="text-sm sm:text-base md:text-lg text-secondary leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="w-full lg:hidden mb-11 lg:col-span-5">
            <Image
              src="/dummy/1.webp"
              alt="Banquet Space"
              width={1000}
              height={1000}
              className="w-full h-[300px] sm:h-[500px] lg:h-[730px] object-cover "
            />
          </div>
          {/* Pricing Boxes */}
          <div className="space-y-4 mb-6">
            <div className="border border-[#0097DC]  py-4 px-5 sm:px-7 flex flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 transition">
              <div>
                <p className="text-base sm:text-lg lg:text-[28px]">Weekday Corporate Events</p>
                <p className="text-sm sm:text-lg text-secondary">(4-hour slot)</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-[22px] sm:text-[29px] font-extrabold text-[#0097DC]">₹1,000</p>
                <p className="text-[#0097DC] text-sm sm:text-lg font-extrabold">+ GST</p>
              </div>
            </div>

            <div className="border border-[#0097DC] py-4 px-5 sm:px-7 flex flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 transition">
              <div>
                <p className="text-base sm:text-lg lg:text-[28px]">Private Events</p>
                <p className="text-sm sm:text-lg text-secondary">(4-hour slot - Weekends Only)</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-[22px] sm:text-[29px] font-extrabold text-[#0097DC]">₹25,000</p>
                <p className="text-[#0097DC] text-sm sm:text-lg font-extrabold">+ GST</p>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:leading-[2]  text-primary mt-2 sm:mt-4 mb-8 lg:mb-8">
            * Custom setups such as round tables, décor, etc. charged extra
            <br />
            ** Valet Parking available at additional cost
          </p>
          <div className="flex lg:block justify-center">
            <Button
              onClick={() => setOpen(true)}

              aria-label="Get a Quote"
              className="bg-[#0097DC] hover:bg-[#0097DC]/80 text-white font-semibold px-6 py-2"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-16">
        <EventBrandingSpaces />
      </div>
      {open && <ContactForm modalHeading="Full-Scale Banquet Venue" modalDescription="A refined setting for formal and private events." defaulltSolution="Event Spaces" showModal onClose={() => setOpen(false)} />}
    </section>
  );
};

export default BanquetSpace;
