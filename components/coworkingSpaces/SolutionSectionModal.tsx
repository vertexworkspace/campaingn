"use client";

import Image from "next/image";
import { X, Wifi, Users, MonitorCheck, Printer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface SolutionSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionSectionModal({
  isOpen,
  onClose,
}: SolutionSectionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🔹 Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* 🔹 Modal Container */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-white mt-28  shadow-2xl w-full max-w-7xl relative p-5 sm:pt-10 sm:px-10">
             
              <button
                onClick={onClose}
                className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              {/* 🔹 Scrollable Content */}
              <div
                data-lenis-prevent
                className="max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar"
              >
                {/* ✅ TOP SECTION */}
                <div className="px-0 data-lenis-prevent sm:px-6 relative lg:pe-10  lg:pl-20">
          {/* ✅ RIGHT SIDE - SWIPER */}
          <div className="relative w-full lg:w-[70%] lg:ml-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
            <div className="relative min-h-[260px] md:min-h-full">
              <Image src="/stockImages/HeroBannerImage1.png" alt="People working together" fill className="object-cover" priority />
            </div>

            {/* ✅ Custom Navigation Buttons + Dots */}
          </div>

          {/* ✅ LEFT SIDE - FORM SECTION */}
          <div className="hidden lg:block lg:absolute top-1/2 -translate-y-1/2 left-6 sm:left-10 lg:left-[5%] bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[44%]  p-6 sm:p-10 z-10">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-semibold text-primary leading-tight mb-4">
                Work. Collaborate.
              
                Grow in a space
                <br className="hidden sm:block" /> built for productivity.
              </h2>
              <p className="text-primary font-medium text-base sm:text-[24px] max-w-xl">
                Enjoy 24-hour access to your own dedicated workstation with all the amenities you need to focus on and thrive.
              </p>
            </div>
          </div>
        </div>

                {/* ✅ BOTTOM SECTION */}
                <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 mt-10 p-4 sm:p-6 sm:pb-12">
                  {/* 🔹 Monthly Pass Card */}
                  <div className="bg-[#0094E0] text-white p-6 sm:p-8 flex flex-col gap-6  shadow-md">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">
                        Monthly Pass
                      </h3>
                      <p className="text-sm sm:text-base opacity-90">
                        Starting From:
                        <br />
                        <span className="text-xl sm:text-2xl font-semibold">
                          ₹6,000 + GST / per month
                        </span>
                      </p>
                    </div>
                    <div>
                    <button className="bg-white text-[#0097DC] font-semibold px-6 py-2  hover:bg-blue-50 transition">
                      Book Now
                    </button>
                    </div>
                  </div>

                  {/* 🔹 Features */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      Workspaces Designed <br className="hidden sm:block" />{" "}
                      Around You
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700 text-sm sm:text-base">
                      <div className="flex items-start gap-3">
                        <MonitorCheck className="w-5 h-5 text-[#0094E0] mt-0.5" />
                        <span>
                          Secure, fully furnished desks in a premium workspace
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Printer className="w-5 h-5 text-[#0094E0] mt-0.5" />
                        <span>
                          High-speed Wi-Fi, printing, and pantry facilities
                          included
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Wifi className="w-5 h-5 text-[#0094E0] mt-0.5" />
                        <span>
                          Equipped with essential facilities to support your
                          daily workflow
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#0094E0] mt-0.5" />
                        <span>
                          Ideal for professionals and small teams seeking
                          consistency
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
