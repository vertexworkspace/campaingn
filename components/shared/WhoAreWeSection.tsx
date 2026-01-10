"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WhoAreWeSectionProps {
  aboutImage?: string | any;
}

export default function WhoAreWeSection({ aboutImage }: WhoAreWeSectionProps) {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Who are we?
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-xl text-gray-700 leading-relaxed">
              At Triviora Global, we design learning programs that help graduates build real, job-ready skills and prepare for global roles. Our focus is simple: practical training, taught by industry experts, using the same tools and workflows professionals use every day. The goal isn't just to learn, but to be ready to step into the role with confidence.
            </p>

            <div className="pt-2">
              <Link 
                href="#"
                className="text-[#DC143C] font-semibold text-lg hover:underline inline-flex items-center gap-2"
              >
                Read More <span className="text-xl">&gt;</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            {aboutImage ? (
              <Image
                src={aboutImage}
                alt="Team members working together"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">About Image Placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

