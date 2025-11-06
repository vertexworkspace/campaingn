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
            className="fixed inset-0  bg-black/50 backdrop-blur-sm z-40"
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
            <div className="bg-white mt-20 rounded-xl shadow-lg w-full max-w-6xl relative p-5 sm:p-12">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Scrollable Content */}
              <div className="max-h-[80vh] overflow-x-hidden overflow-y-auto pr-4 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
                  {/* Sticky Left Column */}
                  <div className="col-span-4 lg:sticky top-0 self-start">
                    <h2 className="text-2xl sm:text-[48px] font-semibold text-primary">
                      Amenities
                    </h2>
                  </div>

                  {/* Middle and Right Columns */}
                  <div className="col-span-8 grid lg:grid-cols-2 gap-x-10">
                    {amenitiesLeft.map((item, index) => (
                      <React.Fragment key={index}>
                        {/* Middle Item */}
                        <div className="flex flex-col justify-start gap-2  pb-4 lg:pb-16">
                          <h3 className="text-[20px] sm:text-[24px] font-semibold text-primary">
                            {item.title}
                          </h3>
                          <p className="text-secondary text-base sm:text-lg leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Right Item */}
                        <div className="flex flex-col justify-start gap-2  pb-4">
                          <h3 className="text-[20px] sm:text-[24px] font-semibold text-primary">
                            {amenitiesRight[index]?.title}
                          </h3>
                          <p className="text-secondary text-base sm:text-lg leading-relaxed">
                            {amenitiesRight[index]?.description}
                          </p>
                        </div>
                      </React.Fragment>
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
