"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImageUrl from "../../public/images/solution-section/1.png";
import SolutionSectionModal from "./modalComponents/SolutionSectionModal";
import { useRef, useState } from "react";
import type React from "react";
import {
  Pc,
  Router,
  Meeting,
  ShakeHand,
  HotCoffee,
  WomenPc,
  CoffeeMaker,
  Seat,
  Clock,
  Projector,
  HandShake,
  Flat,
  Mail,
  Like,
  Coffe,
  Developer,
  Hand,
  Syestem,
} from "@/public/icons/icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperDots from "../ui/SwiperDots";

type SolutionData = {
  title: string;
  image: string;
  subtitle?: string;
  priceLabel?: string;
  ctaLabel?: string;
  peiceTitle?: string;
  titleText?: string;
  priceSubTitle?: string;
  modalImage?: string;
  features?: Array<{ icon: React.ReactNode | React.ComponentType<{ className?: string }>; text: string }>;
};

const solutions: SolutionData[] = [
  {
    title: "Coworking Spaces",
    titleText: "Work. Collaborate. Grow in a space built for productivity.",
    image: "/images/solution-section/1.webp",
    subtitle: "Enjoy 24-hour access to your own dedicated workstation with all the amenities you need to focus on and thrive.",
    peiceTitle: "Monthly Pass",

    modalImage: "/images/solution-section/1.webp",
    priceLabel: "₹6,000 + GST / per month",
    ctaLabel: "Book Now",
    features: [
      { icon: Pc, text: "Secure, fully furnished desks in a premium workspace" },
      { icon: Router, text: "High-speed Wi-Fi, printing, and pantry facilities included" },
      { icon: Meeting, text: "Equipped with essential facilities to support your daily workflow" },
      { icon: ShakeHand, text: "Ideal for professionals and small teams seeking consistency" },
    ],
  },
  {
    title: "Flexi Desks",
    image: "/images/solution-section/flexi-desk.webp",
    titleText: "Flexible Workdays. One Pass Away.",
    modalImage: "/images/solution-section/flexi-desk.webp",
    subtitle: "Flexible seating for dynamic schedules and changing needs.",
    priceLabel: "₹299 + GST / per day",
    peiceTitle: "Flexi Desk",
    ctaLabel: "Book Now",
    features: [
      { icon: Pc, text: "8-hour access to shared desks in common area" },
      { icon: HotCoffee, text: "Includes Wi-Fi, coffee, and community amenities" },
      { icon: WomenPc, text: "Perfect for freelancers, remote workers, or travelers" },
      { icon: CoffeeMaker, text: "Choose where you work each day with no fixed seat" },
    ],
  },
  {
    title: "Virtual Offices",
    image: "/images/solution-section/3.webp",
    peiceTitle: "Virtual Address",
    titleText: "Your Official Business Address, Without the Office.",
    modalImage: "/images/solution-section/3.webp",
    subtitle: "Establish a professional presence with a prestigious mailing address with no physical space required.",
    priceLabel: "₹1,000 + GST / per month",
    ctaLabel: "Book Now",
    features: [
      { icon: Flat, text: "Prime business address for registration & correspondence" },
      { icon: WomenPc, text: "Affordable plans for startups and remote businesses" },
      { icon: Mail, text: "Mail and courier handling support" },
      { icon: Like, text: "Enhance brand credibility with minimal overhead" },
    ],
  },
  {
    title: "Event Spaces",
    image: "/images/solution-section/4.webp",

    titleText: "Professional Spaces for Every Occasion",
    modalImage: "/images/solution-section/4.webp",
    peiceTitle: "Vertex Events",
    priceSubTitle: "(Available at Vertex One / Treo)",
    subtitle: "Host impactful meetings, workshops, or events in modern, fully equipped venues.",
    priceLabel: "₹5,000 + GST / 4-hour slot",
    ctaLabel: "Book Now",
    features: [
      { icon: Seat, text: "Spacious rooms which could accommodate up to 30 guests" },
      { icon: Clock, text: "4-hour booking slots with flexible extensions" },
      { icon: Projector, text: "Audio-visual setup, projector, and presentation support" },
      { icon: HandShake, text: "Ideal for corporate meets, training, or networking events" },
    ],
  },
  {
    title: "Meeting Rooms",
    image: "/images/solution-section/5.webp",
    peiceTitle: "Flexi Desk",
    titleText: "Where Ideas Meet. Collaborate. Conquer.",
    modalImage: "/images/solution-section/5.webp",
    subtitle: "Host seamless meetings in fully equipped, professional spaces designed to make every discussion productive.",
    priceLabel: "₹499 + GST / hour",
    ctaLabel: "Book Room",
    features: [
      { icon: Developer, text: "Display and conferencing tools" },
      { icon: Coffe, text: "Secure high-speed Wi-Fi" },
      { icon: Hand, text: "On-demand printing" },
      { icon: Coffe, text: "Fits small to mid-size teams" },
    ],
  },
];

export default function SolutionsSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SolutionData | null>(null);
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleDotClick = (i: number) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideToLoop(i); // loop safe navigation
  };
  return (
    <section className="pb-14 lg:py-16 bg-white px-6 lg:px-12">
      <div className="text-center mb-10 px-4 sm:px-6 lg:px-20 mx-auto ">
        <h2 className="text-3xl md:text-[48px] font-semibold text-primary">Explore our host of solutions</h2>
        <p className="mt-3 text-secondary text-lg lg:px-10">
          From coworking spaces to virtual offices, you can choose from a range of solutions or even bundle our offerings to tailor solutions to suit
          your business.
        </p>
      </div>

      {/* Mobile: Swiper */}
      <div className="md:hidden px-4 sm:px-6 lg:px-20 mx-auto">
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
          {solutions.map((solution, index) => (
            <SwiperSlide key={index}>
              <motion.div
                onClick={() => {
                  setSelected(solution);
                  setOpen(true);
                }}
                className="relative overflow-hidden group cursor-pointer h-[300px]"
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 "
                />
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-linear-to-t from-black/80 via-black/40 to-transparent " />
                <div className="absolute bottom-5 left-5 flex items-center justify-between w-[calc(100%-2.5rem)]">
                  <h3 className="text-white text-2xl font-semibold">{solution.title}</h3>
                  <div
                    onClick={() => {
                      setSelected(solution);
                      setOpen(true);
                    }}
                    className="p-1 flex items-center justify-center border border-white text-white text-lg font-bold transition-all"
                  >
                    <svg className="h-4 w-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.6251 10.8118L0.999994 10.8133M10.8118 20.6251L10.8133 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperDots total={solutions.length} current={current} onDotClick={handleDotClick} />
      </div>

      {/* Desktop/Tablet: Grid Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-20 mx-auto  auto-rows-[250px] md:auto-rows-[300px]">
        {solutions.map((solution, index) => (
          <motion.div
            onClick={() => {
              setSelected(solution);
              setOpen(true);
            }}
            key={index}
            className={`relative overflow-hidden  group cursor-pointer ${index === 0 ? "lg:row-span-2 h-full" : "h-full"}`}
          >
            <Image
              src={solution.image}
              alt={solution.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 "
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-linear-to-t from-black/80 via-black/40 to-transparent " />

            {/* Text Overlay */}
            <div className="absolute bottom-5 left-5 flex items-center justify-between w-[calc(100%-2.5rem)]">
              <h3 className="text-white text-2xl xl:text-[30px] font-semibold">{solution.title}</h3>
              <div
                onClick={() => {
                  setSelected(solution);
                  setOpen(true);
                }}
                className="p-1 flex items-center justify-center border border-white  text-white text-lg font-bold   transition-all"
              >
                <svg className="h-4 w-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.6251 10.8118L0.999994 10.8133M10.8118 20.6251L10.8133 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <SolutionSectionModal isOpen={open} onClose={() => setOpen(false)} data={selected ?? undefined} />
    </section>
  );
}
