"use client";

import Image from "next/image";
import { X, Wifi, Users, MonitorCheck, Printer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { ContactForm } from "../ContactForm";
import { getLenis } from "@/components/SmoothScroll";

interface SolutionSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: {
    title?: string;
    titleText?: string;
    image?: string;
    subtitle?: string;
    priceLabel?: string;
    peiceTitle?: string;
    ctaLabel?: string;
    modalImage?: string;
    priceSubTitle?: string;
    features?: Array<{
      icon: React.ReactNode | React.ComponentType<{ className?: string }> | "monitor" | "printer" | "wifi" | "users";
      text: string;
    }>;
  };
}

export default function SolutionSectionModal({ isOpen, onClose, data }: SolutionSectionModalProps) {
  const iconMap: Record<"monitor" | "printer" | "wifi" | "users", React.ComponentType<{ className?: string }>> = {
    monitor: MonitorCheck,
    printer: Printer,
    wifi: Wifi,
    users: Users,
  };

  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const lenis = getLenis();

    if (isOpen) {
      // 🔹 Stop Lenis scrolling instead of body overflow
      lenis?.stop();
      document.documentElement.setAttribute("data-lenis-prevent", "true");
    } else {
      // 🔹 Resume smooth scrolling
      lenis?.start();
      document.documentElement.removeAttribute("data-lenis-prevent");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      document.documentElement.removeAttribute("data-lenis-prevent");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const title = data?.title ?? "Work. Collaborate.";
  const titleText = data?.titleText;
  const peiceTitle = data?.peiceTitle;
  const modalImage = data?.modalImage ?? "/stockImages/HeroBannerImage1.png";
  const priceSubTitle = data?.priceSubTitle;
  const image = data?.image ?? "/stockImages/HeroBannerImage1.png";
  const subtitle = data?.subtitle ?? "Enjoy 24-hour access to your own dedicated workstation with all the amenities you need to focus on and thrive.";
  const priceLabel = data?.priceLabel ?? "₹6,000 + GST / per month";
  const ctaLabel = data?.ctaLabel ?? "Book Now";
  const features = data?.features ?? [
    { icon: "monitor", text: "Secure, fully furnished desks in a premium workspace" },
    { icon: "printer", text: "High-speed Wi-Fi, printing, and pantry facilities included" },
    { icon: "wifi", text: "Equipped with essential facilities to support your daily workflow" },
    { icon: "users", text: "Ideal for professionals and small teams seeking consistency" },
  ];

  type IconKey = "monitor" | "printer" | "wifi" | "users";

  const renderIcon = (icon: React.ReactNode | React.ComponentType<{ className?: string }> | IconKey) => {
    if (typeof icon === "string") {
      const Icon = iconMap[icon as IconKey];
      return <Icon className=" text-[#0094E0] mt-0.5" />;
    }
    if (React.isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === "function") {
      const C = icon as React.ComponentType<{ className?: string }>;
      return <C className=" text-[#0094E0] mt-0.5" />;
    }
    return null;
  };

  const featuress = [
    {
      text: "Modern, well-furnished conference & meeting rooms (4-seater & 10-seater options)",
    },
    {
      text: "High-speed Wi-Fi with power backup to ensure uninterrupted sessions",
    },
    {
      text: "Access to common areas and call pods for private conversations",
    },
    {
      text: "Access to common areas and call pods for private conversations",
    },
  ];

  const isMeetingRoom = (data?.title ?? "").toLowerCase() === "meeting rooms";

  type Pricing = { time: string; price: string; note?: string };
  type Room = { title: string; seats: string; pricing: Pricing[] };

  const rooms: Room[] = [
    {
      title: "Conference Room",
      seats: "(10-Seater)",
      pricing: [
        {
          time: "4-hour usage",
          price: "₹2,500 + GST",
          note: "Additional seats: ₹250 + GST per seat",
        },
        {
          time: "8-hour usage",
          price: "₹5,000 + GST",
          note: "Additional seats: ₹500 + GST per seat",
        },
      ],
    },
    {
      title: "Meeting Room",
      seats: "(4-Seater)",
      pricing: [
        {
          time: "4-hour usage",
          price: "₹1,000 + GST",
        },
        {
          time: "8-hour usage",
          price: "₹2,000 + GST",
        },
      ],
    },
  ];

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
            className="fixed inset-0 z-50 flex justify-center items-stretch sm:items-center p-0 sm:p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-white w-full h-full sm:w-[90%] sm:h-auto sm:mt-12 lg:mt-28  sm:max-w-7xl relative sm:rounded-none overflow-hidden p-0 sm:pt-14 sm:px-10">
              <button
                aria-label="Close modal"
                onClick={onClose}
                className="absolute z-50 top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              {/* 🔹 Scrollable Content */}
              <div data-lenis-prevent className="h-full sm:max-h-[90vh] overflow-y-auto  overflow-x-hidden custom-scrollbar">
                {/* ✅ TOP SECTION */}
                <div className="px-4 data-lenis-prevent sm:px-6 relative lg:pe-5 lg:pl-20">
                   <div className="mb-4 mt-8 lg:hidden sm:mt-6 px-2 sm:px-0">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-primary leading-snug mb-2">{titleText}</h2>
                      <p className="text-primary/90 text-sm sm:text-base">{subtitle}</p>
                    </div>
                  {/* ✅ Desktop Image & Overlay */}
                  <div className="hidden lg:block relative w-full px-0 sm:px-5 lg:w-[70%] lg:ml-auto h-[550px] xl:h-[600px]">
                    <div className="relative min-h-full">
                      <Image src={modalImage} alt="People working together" fill className="object-cover" priority />
                    </div>
                  </div>

                  {/* ✅ Mobile: Stack image + text */}
                  <div className="lg:hidden flex flex-col gap-4">
                    <div className="relative w-full h-[250px] sm:h-[350px]">
                      <Image src={modalImage} alt="People working together" fill className="object-cover " priority />
                    </div>
                    <div className="mt-4 hidden lg:block sm:mt-6 px-2 sm:px-0">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-primary leading-snug mb-2">{titleText}</h2>
                      <p className="text-primary/90 text-sm sm:text-base">{subtitle}</p>
                    </div>
                  </div>

                  {/* ✅ Desktop Text Overlay */}
                  <div className="hidden lg:block lg:absolute top-1/2 -translate-y-1/2 left-6 sm:left-10 lg:left-[5%] bg-white w-[44%] h-[450px] p-10 z-10 ">
                    <div className="max-w-xl flex flex-col justify-center h-full">
                      <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-semibold text-primary leading-tight mb-4">{titleText}</h2>
                      <p className="text-primary font-medium text-base sm:text-[24px] max-w-xl">{subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* ✅ BOTTOM SECTION */}
                {!isMeetingRoom && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mt-6 sm:mt-10 p-4 sm:p-6 pb-8 sm:pb-16">
                    {/* 🔹 Monthly Pass Card */}
                    <div className="bg-[#0097DC] col-span-5 text-white p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 ">
                      <div>
                        <h3 className="text-2xl sm:text-[40px] font-semibold">{peiceTitle}</h3>
                        {<p className="text-sm mt-1">{priceSubTitle}</p>}
                        <p className="text-sm sm:text-[29px]  mt-3">
                          Starting From:
                          <br />
                          <span className="text-lg sm:text-2xl opacity-100 font-semibold">{priceLabel}</span>
                        </p>
                      </div>
                      <div>
                        <Button
                          aria-label={ctaLabel}
                          onClick={() => setOpen(true)}
                          className="w-full sm:w-auto bg-white text-[#0097DC] font-semibold px-6 py-2 hover:bg-blue-50 transition"
                        >
                          {ctaLabel}
                        </Button>
                      </div>
                    </div>

                    {/* 🔹 Features */}
                    <div className="flex flex-col col-span-7 justify-center px-1 sm:px-0">
                      <h3 className="text-2xl sm:text-[40px] font-semibold text-primary mb-4 sm:mb-6">
                        Workspaces Designed <br className="hidden sm:block" /> Around You
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-gray-700 text-sm sm:text-base">
                        {features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1">{renderIcon(feature.icon)}</div>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* meeting room render section */}
                {isMeetingRoom && (
                  <>
                    <div className="text-center mt-10 sm:mt-16 mb-8 sm:mb-10 px-4 sm:px-0">
                      <h2 className="text-2xl sm:text-[40px] font-semibold text-primary">
                        Workspaces Designed <br className="hidden sm:block" /> Around You
                      </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-12 px-4 sm:px-0">
                      {featuress.map((feature, idx) => (
                        <div key={idx} className="border border-[#0097DC] text-center py-5 sm:py-6 px-3 sm:px-4 text-gray-800 transition">
                          <p className="text-sm sm:text-lg text-secondary leading-relaxed">{feature.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Rooms Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto pb-12 sm:pb-16 px-4 sm:px-0">
                      {rooms.map((room, idx) => (
                        <div key={idx} className="bg-[#0094E0] text-white p-6 sm:p-10 flex flex-col justify-between ">
                          <div>
                            <h3 className="text-2xl sm:text-[40px] font-semibold mb-1 sm:mb-2">{room.title}</h3>
                            <p className="text-lg sm:text-[29px] mb-4 sm:mb-6 opacity-90">{room.seats}</p>

                            <p className="font-medium text-base sm:text-[24px] mb-2 sm:mb-4">Starting From:</p>
                            {room.pricing.map((plan, i) => (
                              <div key={i} className="mb-4">
                                <p className="text-sm sm:text-[24px]">
                                  {plan.time}: <span className="font-semibold">{plan.price}</span>
                                </p>
                                {plan.note && <p className="text-sm sm:text-lg opacity-80 mt-1">{plan.note}</p>}
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-end">
                            <Button
                              aria-label="Book Now"
                              onClick={() => setOpen(true)}
                              className="self-stretch sm:self-start w-full sm:w-auto bg-white text-[#0094E0] font-semibold mt-4 px-6 py-2 hover:bg-blue-50 transition"
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
          {open && <ContactForm showModal onClose={() => setOpen(false)} />}
        </>
      )}
    </AnimatePresence>
  );
}
