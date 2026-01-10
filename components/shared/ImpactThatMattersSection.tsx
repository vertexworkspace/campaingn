"use client";

import React from "react";
import Link from "next/link";

const impactMetrics = [
  {
    value: "500+",
    description: "jobs created (Year 1 target)",
  },
  {
    value: "2,000+",
    description: "professionals trained",
  },
  {
    value: "50+",
    description: "business partners engaged",
  },
  {
    value: "₹10 Cr+",
    description: "Community Value Created",
  },
];

export default function ImpactThatMattersSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Title and Tagline */}
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Impact That Matters
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
              Beyond numbers, we measure success by transformed lives and stronger local economies.
            </p>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mb-12 lg:mb-16">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center ${
                  index < impactMetrics.length - 1
                    ? "lg:border-r lg:border-gray-300 lg:pr-8"
                    : ""
                }`}
              >
                <div className="space-y-2">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                    {metric.value}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="#programs"
              className="inline-flex items-center gap-2 text-[#DC143C] font-semibold text-lg hover:underline"
            >
              Explore our featured skilling program <span className="text-xl">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

