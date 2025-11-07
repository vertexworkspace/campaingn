"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImageUrl from "../../public/stockImages/HeroBannerImage1.png";
import SolutionSectionModal from "./SolutionSectionModal";
import { useState } from "react";

const solutions = [
  {
    title: "Coworking Spaces",
    image: "/stockImages/HeroBannerImage1.png",
  },
  {
    title: "Flexi Desks",
    image: "/stockImages/HeroBannerImage1.png",
  },
  {
    title: "Virtual Offices",
    image: "/stockImages/HeroBannerImage1.png",
  },
  {
    title: "Event Spaces",
    image: "/stockImages/HeroBannerImage1.png",
  },
  {
    title: "Meeting Rooms",
    image: "/stockImages/HeroBannerImage1.png",
  },
];

export default function SolutionsSection() {
  const [open, setOpen] = useState(false);
    return (
      <section className="py-16 bg-white px-6 lg:px-12">
        <div className="text-center mb-10 px-4 sm:px-6 lg:px-20 mx-auto ">
          <h2 className="text-3xl md:text-[48px] font-semibold text-primary">
            Explore our host of solutions
          </h2>
          <p className="mt-3 text-secondary text-lg px-10">
            From coworking spaces to virtual offices, you can choose from a range of
            solutions or even bundle our offerings to tailor solutions to suit your
            business.
          </p>
        </div>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-20 mx-auto  auto-rows-[250px] md:auto-rows-[300px]">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              
              className={`relative overflow-hidden  group cursor-pointer ${
                index === 0 ? "lg:row-span-2 lg:h-[630px]" : "h-full"
              }`}
            >
              <Image
                src={solution.image}
                alt={solution.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 "
              />
  
              {/* Overlay */}
              <div className="absolute inset-0   transition-all"></div>
  
              {/* Text Overlay */}
              <div className="absolute bottom-5 left-5 flex items-center justify-between w-[calc(100%-2.5rem)]">
                <h3 className="text-white text-xl font-semibold">
                  {solution.title}
                </h3>
                <div onClick={() => setOpen(true)} className="p-1 flex items-center justify-center border border-white  text-white text-lg font-bold   transition-all">
                <svg className="h-4 w-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6251 10.8118L0.999994 10.8133M10.8118 20.6251L10.8133 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <SolutionSectionModal isOpen={open} onClose={() => setOpen(false)} />
      </section>
    );
  }