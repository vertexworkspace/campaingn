"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

interface AlternativeHeroSectionProps {
  heroImage?: string | any;
}

export default function AlternativeHeroSection({ heroImage }: AlternativeHeroSectionProps) {
  return (
    <section className="relative w-full bg-[#1a1a1a] min-h-screen flex items-center overflow-hidden">
      {/* Decorative Foliage - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[#2d5016] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content (2/3 width) */}
          <div className="lg:col-span-2 text-white space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Develop the skills that move the world forward.
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Prepare for global careers with practical, outcome focused learning.
            </p>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#DC143C] hover:bg-[#DC143C]/90 text-white font-semibold text-lg px-8 py-4 rounded-md"
              >
                Explore the Program
              </Button>
            </div>
          </div>

          {/* Right Side - Image (1/3 width) */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="Professional working on laptop"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
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

