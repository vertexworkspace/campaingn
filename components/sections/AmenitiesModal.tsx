"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const amenitiesLeft = [
  {
    title: "Internet Connectivity",
    description:
      "High-speed, reliable internet ensuring uninterrupted workflow and seamless digital collaboration.",
  },
  {
    title: "Meeting & Training Rooms",
    description:
      "Professional, well-equipped rooms designed for productive meetings, workshops, and training sessions.",
  },
  {
    title: "Cafeteria",
    description:
      "A vibrant space for meals, casual meetings, and mid-day breaks that recharge your energy.",
  },
  {
    title: "Breakout Area",
    description:
      "Dynamic open zones that encourage creativity, spontaneous chats, and team collaboration.",
  },
  {
    title: "Indoor Gaming Zone",
    description:
      "Recreational space with indoor games for relaxation and team bonding.",
  },
  {
    title: "CCTV Surveillance",
    description:
      "Comprehensive security with 24/7 CCTV coverage across all key zones.",
  },
];

const amenitiesRight = [
  {
    title: "Dedicated Phone Line",
    description:
      "Private phone lines for secure, direct communication with clients and teams.",
  },
  {
    title: "Pantry",
    description:
      "A convenient pantry stocked with essentials, offering quick access to refreshments and light bites.",
  },
  {
    title: "Lounge",
    description:
      "Relaxed seating areas to unwind, connect, or host informal discussions in comfort.",
  },
  {
    title: "Banquet Hall",
    description:
      "Spacious and elegant hall ideal for events, seminars, and corporate gatherings.",
  },
  {
    title: "Two Levels of Car Parking",
    description:
      "Ample, secure parking across two levels for both tenants and guests.",
  },
  {
    title: "Front-Desk Staff",
    description:
      "Professional reception team to manage guests, assist tenants, and ensure smooth operations.",
  },
];

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-white mt-20 rounded-xl shadow-lg w-full max-w-6xl  relative p-10 sm:p-12">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
<div className="max-h-[80vh] overflow-y-auto">
              {/* Main 3-column Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-12 gap-y-10">
                {/* Left Column (Heading) */}
                <div className="col-span-4">
                  <h2 className="text-2xl sm:text-[48px] font-semibold text-primary">
                    Amenities
                  </h2>
                </div>

                {/* Middle Column */}
                <div className="flex col-span-4 flex-col gap-6">
                  {amenitiesLeft.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-[24px] font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-secondary text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="flex col-span-4 flex-col gap-6">
                  {amenitiesRight.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-[24px] font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-secondary text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
