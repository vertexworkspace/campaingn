"use client";
import { Button } from "@/components/ui/Button";
import {
  Flat,
  FlatWhite,
  HandShakeWhite,
  Like,
  LikeWhite,
  Mail,
  MailWhite,
  Meeting,
  MeetingWhite,
  Pc,
  PcWhite,
  Router,
  RouterWhite,
  ShakeHand,
  WomenPc,
  WomenWhite,
} from "@/components/lib/icons/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { ContactForm } from "@/components/shared/ContactForm";

// 🔹 Define plan types
interface CoworkingPlan {
  name: string;
  access: string;
  type: string;
  suited: string;
  validity: string;
  price: string;
  duration: string;
  modalHeading: string;
  modalDescription: string;
}

interface VirtualPlan {
  name: string;
  duration: string;
  payment: string;
  purpose: string;
  suited: string;
  inclusive: string;
  price: string;
  gst: string;
  modalHeading: string;
  modalDescription: string;
}

const renderIcon = (icon: React.ReactNode | React.ComponentType<{ className?: string }>) => {
  if (React.isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === "function") {
    const C = icon as React.ComponentType<{ className?: string }>;
    return <C className="text-[#0094E0] mt-0.5" />;
  }
  return null;
};

// 🔹 Component Props
interface WorkspacePlansProps {
  type?: "coworking spaces" | "virtual offices";
}

const WorkspacePlans: React.FC<WorkspacePlansProps> = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  // 🔹 Coworking Spaces Data
  const coworkingFeatures = [
    {
      icon: PcWhite,
      title: "Secure, fully furnished desks in a premium workspace",
    },
    {
      icon: MeetingWhite,
      title: "Equipped with essential facilities to support your daily workflow",
    },
    {
      icon: RouterWhite,
      title: "High-speed Wi-Fi, printing, and pantry facilities included",
    },
    {
      icon: HandShakeWhite,
      title: "Ideal for professionals and small teams seeking consistency",
    },
  ];

  const coworkingPlans: CoworkingPlan[] = [
    {
      name: "Fixed Desk Access",
      access: "24-hour Setup",
      type: "Dedicated workstation with storage",
      suited: "Individuals who need a permanent workspace with dedicated storage",
      validity: "Based on duration paid for",
      price: "₹500",
      duration: "+ GST per day",
      modalHeading: "Permanent Desk Solution",
      modalDescription: "Reliable workspace designed for uninterrupted productivity.",
    },
    {
      name: "Monthly Pass",
      access: "24-hour Setup",
      type: "Dedicated workstation",
      suited: "Professionals seeking consistency and routine",
      validity: "30 days",
      price: "₹6,000",
      duration: "+ GST per month",
      modalHeading: "Monthly Access Plan",
      modalDescription: "A stable and convenient option for regular work routines.",
    },
    {
      name: "Quarter Flex Pass",
      access: "24-hour Setup",
      type: "Flexi desk (no fixed seat)",
      suited: "Part-time professionals or freelancers needing flexibility",
      validity: "3 months with 30 days of usage within the period",
      price: "₹9,000",
      duration: "+ GST for 3 months",
      modalHeading: "Flexible Quarterly Plan",
      modalDescription: "Ideal for professionals seeking adaptable work arrangements.",
    },
    {
      name: "Cabin Space Setup",
      access: "-",
      type: "-",
      suited: "Teams or individuals looking for privacy and a premium workspace experience",
      validity: "Based on duration paid for",
      price: "₹6,500",
      duration: "+ GST per desk per month",
      modalHeading: "Private Cabin Workspace",
      modalDescription: "A premium environment crafted for focused and secure work.",
    },
  ];

  // 🔹 Virtual Offices Data (Updated)
  const virtualFeatures = [
    {
      icon: FlatWhite,
      title: "Choose between a mailing-only or dedicated door number address",
    },
    {
      icon: WomenWhite,
      title: "Ideal for startups, professionals, and businesses",
    },
    {
      icon: MailWhite,
      title: "Use your address for business registration and mail handling",
    },
    {
      icon: LikeWhite,
      title: "Hassle-free setup with official documentation support",
    },
  ];

  const virtualPlans: VirtualPlan[] = [
    {
      name: "Virtual Address (Mailing Purpose Only)",
      duration: "1 month",
      payment: "Advance payment for the selected duration",
      purpose: "Mailing and communication purposes",
      suited: "Ideal for startups and professionals who need an official mailing address without a physical office setup",
      inclusive: "Mailing Address",
      price: "₹1,000 (Exc GST)",
      gst: "+ GST per day",
      modalHeading: "Professional Virtual Address",
      modalDescription: "Establish a credible business presence effortlessly.",
    },
    {
      name: "Dedicated Door Number",
      duration: "1 month",
      payment: "Advance payment for the selected duration",
      purpose: "Legal Address",
      suited: "Perfect for businesses requiring a legitimate, registered address under a recognized commercial property",
      inclusive: "Dedicated door number for Company Registration, GST Registration, and Trade License",
      price: "₹5,000 (Exc GST)",
      gst: "+ GST per month",
      modalHeading: "Registered Business Address",
      modalDescription: "A formal address solution for official documentation.",
    },
  ];

  // 🔹 Determine active dataset
  const features = type === "virtual offices" ? virtualFeatures : coworkingFeatures;
  const plans = type === "virtual offices" ? virtualPlans : coworkingPlans;

  // 🔹 Table Headings
  const tableHeadings =
    type === "virtual offices"
      ? ["Agreement Duration", "Nature of Payment", "Can be used for", "Suited For", "Inclusive of", "Prices starting From"]
      : ["Access", "Workstation Type", "Suited For", "Validity", "Prices starting from"];

  return (
    <section className="lg:pl-8 lg:pe-3 mt-6 lg:mt-20 pb-10 sm:pb-7 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center hidden lg:block mb-12 lg:mb-18">
        <h2 className="text-2xl md:text-[40px] text-primary font-semibold mb-8">Workspaces Designed Around You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="px-6 py-12 flex flex-col items-center text-center bg-[#0097DC]  transition">
              <div className="mb-4">{renderIcon(f.icon)}</div>
              <p className="text-lg text-white font-medium">{f.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center lg:hidden mb-12">
        <h2 className="text-2xl md:text-[40px] mt-10 lg:mt-0 text-primary font-semibold mb-8">Workspaces Designed Around You</h2>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          loop={true} // ✅ Enables looping
          autoplay={{
            delay: 2000, // ✅ 3 seconds per slide
            disableOnInteraction: false, // Keeps autoplay active after user swipes
          }}
          modules={[Autoplay]}
        >
          {features.map((f, i) => (
            <SwiperSlide key={i}>
              <div className="px-6 py-12 flex flex-col items-center text-center bg-[#0097DC] transition ">
                <div className="mb-4">{renderIcon(f.icon)}</div>
                <p className="text-lg text-white font-medium">{f.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Plans */}
      <div className="text-center">
        <h3 className="text-2xl md:text-[40px] font-semibold mb-5 lg:mb-10">Find the plan that works for you</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-[#0097DC] font-bold text-xl lg:text-[24px]">
                <th className={`p-20 ${type === "virtual offices" ? "lg:w-[25%]" : ""}`}></th>
                {plans.map((plan, index) => (
                  <th key={index} className={`${type === "virtual offices" ? "lg2:px-20" : "lg2:px-10"} px-10 py-5 lg:pb-10  text-center`}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-secondary text-sm lg:text-lg">
              {tableHeadings.map((heading, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    heading === "Prices starting From" || heading === "Prices starting from"
                      ? "border-2 text-[#0097DC] font-bold border-[#F8F8F8]"
                      : "font-semibold text-primary"
                  }
                >
                  <td className={heading === "Prices starting From" || heading === "Prices starting from" ? "px-4 py-7 lg:py-10" : "p-4"}>
                    {heading}
                  </td>

                  {/* Conditional rendering for both types */}
                  {(plans as any[]).map((plan, colIndex) => {
                    if (type === "virtual offices") {
                      const p = plan as VirtualPlan;
                      switch (heading) {
                        case "Agreement Duration":
                          return (
                            <td key={colIndex} className="px-4 py-4 lg2:px-16 text-secondary font-normal  text-center">
                              {p.duration}
                            </td>
                          );
                        case "Nature of Payment":
                          return (
                            <td key={colIndex} className="px-4 py-4 lg2:px-16 text-secondary font-normal  text-center">
                              {p.payment}
                            </td>
                          );
                        case "Can be used for":
                          return (
                            <td key={colIndex} className="px-4 py-4 lg2:px-16 text-secondary font-normal text-center">
                              {p.purpose}
                            </td>
                          );
                        case "Suited For":
                          return (
                            <td key={colIndex} className="px-4 py-4 lg2:px-16 text-secondary font-normal text-center">
                              {p.suited}
                            </td>
                          );
                        case "Inclusive of":
                          return (
                            <td key={colIndex} className="px-4 py-4 lg2:px-16 text-secondary font-normal text-center">
                              {p.inclusive}
                            </td>
                          );
                        case "Prices starting From":
                          return (
                            <td key={colIndex} className="px-4 py-4 lg2:px-16  text-center">
                              <div className="text-xl font-extrabold lg:text-[29px] text-[#0097DC]">{p.price}</div>
                              <div className="text-[#0097DC] font-extrabold text-sm lg:text-lg">{p.duration}</div>
                            </td>
                          );
                        default:
                          return (
                            <td key={colIndex} className="px-4 py-4 text-center">
                              -
                            </td>
                          );
                      }
                    }

                    const p = plan as CoworkingPlan;
                    switch (heading) {
                      case "Access":
                        return (
                          <td key={colIndex} className="p-4 text-secondary font-normal text-center">
                            {p.access}
                          </td>
                        );
                      case "Workstation Type":
                        return (
                          <td key={colIndex} className="p-4 text-secondary font-normal text-center">
                            {p.type}
                          </td>
                        );
                      case "Suited For":
                        return (
                          <td key={colIndex} className="p-4 text-secondary font-normal text-center">
                            {p.suited}
                          </td>
                        );
                      case "Validity":
                        return (
                          <td key={colIndex} className="p-4 text-secondary font-normal text-center">
                            {p.validity}
                          </td>
                        );
                      case "Prices starting from":
                        return (
                          <td key={colIndex} className="p-4 text-center">
                            <div className="text-xl font-extrabold lg:text-[29px] text-[#0097DC]">{p.price}</div>
                            <div className="text-[#0097DC] font-extrabold text-sm lg:text-lg">{p.duration}</div>
                          </td>
                        );
                      default:
                        return (
                          <td key={colIndex} className="p-4 text-center">
                            -
                          </td>
                        );
                    }
                  })}
                </tr>
              ))}

              {/* Book Now Buttons */}
              <tr>
                <td className="p-4 font-semibold"></td>
                {plans.map((item, index) => (
                  <td key={index} className="pt-8 lg:p-8 text-center">
                    <Button
                      onClick={() => {
                        setOpen(true), setModalHeading(item.modalHeading), setModalDescription(item.modalDescription);
                      }}
                      aria-label="Book Now"
                      className="bg-[#0097DC] hover:bg-[#0097DC]/80 text-white font-semibold px-6 py-2"
                    >
                      Book Now
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {open && (
        <ContactForm
          modalHeading={modalHeading}
          modalDescription={modalDescription}
          defaulltSolution={type === "virtual offices" ? "Virtual Offices" : "Coworking Spaces"}
          showModal
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default WorkspacePlans;
