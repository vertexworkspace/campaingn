"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import img1 from "../../public/images/why-choose-vertex/1.webp";
import img2 from "../../public/images/why-choose-vertex/2.webp";
import img3 from "../../public/images/why-choose-vertex/3.webp";
import img4 from "../../public/images/why-choose-vertex/4.webp";
import { AmenitiesModal } from "./AmenitiesModal";
import { useState } from "react";

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
    <section className="bg-gray-50 py-16 lg:py-24 px-6 lg:px-12">
      <div className="px-4 sm:px-6 lg:px-20 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-[40px] font-semibold text-primary leading-snug">
              Why Choose Vertex
            </h2>
            <p className="mt-2 text-secondary font-normal text-base sm:text-lg">
              At Vertex Workspaces, we understand that some ideas need focus and
              confidentiality.
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

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left Column (Tall Card for Desktop, Square on Mobile) */}
          <div className="relative rounded-lg overflow-hidden group h-[250px] sm:h-[250px] lg:h-[630px]">
            <Image
              src={amenities[0].image}
              alt={amenities[0].title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-end transition-colors duration-300">
              <p className="text-white font-semibold text-lg sm:text-2xl lg:text-3xl p-4">
                {amenities[0].title}
              </p>
            </div>
          </div>

          {/* Right Columns (2x2 Grid in Desktop, uniform in Mobile) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-6">
            {/* Top two cards */}
            {amenities.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="relative rounded-lg overflow-hidden group h-[250px] sm:h-[250px] lg:h-auto"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-end transition-colors duration-300">
                  <p className="text-white font-semibold text-lg sm:text-2xl lg:text-3xl p-4">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom full-width card */}
            <div className="relative col-span-1 sm:col-span-2 rounded-lg overflow-hidden group h-[250px] sm:h-[250px] lg:h-auto">
              <Image
                src={amenities[3].image}
                alt={amenities[3].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end transition-colors duration-300">
                <p className="text-white font-semibold text-lg sm:text-2xl lg:text-3xl p-4">
                  {amenities[3].title}
                </p>
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
