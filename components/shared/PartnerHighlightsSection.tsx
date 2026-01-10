"use client";

import React from "react";
import { GraduationCap, Building2, Globe, Heart } from "lucide-react";

const partnerCategories = [
  {
    icon: GraduationCap,
    text: "Academic institutions and colleges",
  },
  {
    icon: Building2,
    text: "Industry leaders and MSMEs",
  },
  {
    icon: Globe,
    text: "Global Service Provider Partners",
  },
  {
    icon: Heart,
    text: "CSR and ecosystem partners",
  },
];

export default function PartnerHighlightsSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              Partner Highlights
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">
              We work closely with:
            </p>
          </div>

          {/* Partner Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {partnerCategories.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center sm:items-start space-y-4 text-center sm:text-left"
                >
                  <div className="text-[#DC143C]">
                    <IconComponent className="w-10 h-10 lg:w-12 lg:h-12" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-700 font-medium">
                    {partner.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Concluding Text */}
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
              Together, we design programs and solutions that align talent, technology, and real-world demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

