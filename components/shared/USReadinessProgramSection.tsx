"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { FileCheck, Eye, TrendingUp, Route } from "lucide-react";

interface USReadinessProgramSectionProps {
  programImage?: string | any;
}

const impactMetrics = [
  {
    icon: FileCheck,
    text: "Reduced error rates in prepared returns",
  },
  {
    icon: Eye,
    text: "Fewer IRS notices linked to preparer errors",
  },
  {
    icon: TrendingUp,
    text: "Improved productivity during peak tax season",
  },
  {
    icon: Route,
    text: "Clear career pathways for learners",
  },
];

export default function USReadinessProgramSection({ programImage }: USReadinessProgramSectionProps) {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Top Section - Program Description and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Side - Program Description */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              US Readiness Program
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                A focused, job-oriented course designed to prepare graduates for roles in US tax and compliance. 
                The program covers compliance fundamentals, including deductions, credits, documentation standards, 
                and regulatory requirements. The goal is to build accuracy and confidence in handling real-world 
                tax scenarios.
              </p>
              <p>
                Beyond technical skills, the program emphasizes workplace readiness. Learners train in ethical 
                practices, documentation workflows, and clear communication—skills that help them transition 
                smoothly into professional environments.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xl font-bold text-black">
                Built for accuracy, compliance, and employability.
              </p>
              
              <Button
                variant="primary"
                size="lg"
                className="bg-[#DC143C] hover:bg-[#DC143C]/90 text-white font-semibold text-lg px-8 py-4 rounded-md"
              >
                View Program Details
              </Button>
            </div>
          </div>

          {/* Right Side - Key Metrics */}
          <div className="space-y-8 lg:space-y-12">
            {/* Accurate Compliance Metric */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-black">Accurate Compliance</h3>
              <p className="text-3xl lg:text-4xl font-bold text-[#DC143C]">
                90%+ first-pass accuracy
              </p>
              <p className="text-sm text-gray-600">
                through real-case training on Forms 1040, 1120S, and 1065
              </p>
            </div>

            {/* Cost & Time Efficiency Metric */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-black">Cost & Time Efficiency</h3>
              <p className="text-3xl lg:text-4xl font-bold text-[#DC143C]">
                20-30% faster turnaround
              </p>
              <p className="text-sm text-gray-600">
                using industry tools like CCH Axcess.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section - Image */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-16 lg:mb-20 rounded-lg overflow-hidden">
          {programImage ? (
            <Image
              src={programImage}
              alt="Professional working with tablet"
              fill
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Program Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Bottom Section - Program Impact Metrics */}
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Program Impact Metrics
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="flex flex-col items-start space-y-4">
                  <div className="text-[#DC143C]">
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {metric.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

