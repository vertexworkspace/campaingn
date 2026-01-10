"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

interface TrivioraHeroSectionProps {
  heroImage?: string | any;
}

export default function TrivioraHeroSection({ heroImage }: TrivioraHeroSectionProps) {
  return (
    <section className="relative w-full bg-[#0A4A5E] min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          {/* Decorative Circles - Overlapping content */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Teal Circle - Behind text on left */}
            <div className="absolute top-0 -left-24 lg:-left-32 w-80 h-80 lg:w-96 lg:h-96 bg-[#0A4A5E] rounded-full opacity-40 blur-3xl"></div>
            {/* Green Circle - Behind image on right */}
            <div className="absolute bottom-0 -right-24 lg:-right-32 w-96 h-96 lg:w-[500px] lg:h-[500px] bg-[#4CAF50] rounded-full opacity-40 blur-3xl"></div>
          </div>

          {/* Left Side - Content */}
          <div className="text-white space-y-6 lg:space-y-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Connecting People to Opportunities
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Building skills, technology, and talent pathways for a changing world.
            </p>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#DC143C] hover:bg-[#DC143C]/90 text-white font-semibold text-lg px-8 py-4 rounded-md shadow-lg"
              >
                Explore our program
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] z-10">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="Professional working on laptop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Hero Image Placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

