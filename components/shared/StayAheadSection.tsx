"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FileText, Calendar, Video, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface ContentCard {
  category: string;
  categoryIcon: React.ElementType;
  backgroundIcon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const contentCards: ContentCard[] = [
  {
    category: "Updates",
    categoryIcon: FileText,
    backgroundIcon: FileText,
    title: "Elm Partners with Triviora to build a Graduate Readiness Program",
    description: "Elm is recognised for fostering a creative work environment that encourages",
    color: "#E53935",
    bgColor: "bg-[#E53935]",
  },
  {
    category: "Event",
    categoryIcon: Calendar,
    backgroundIcon: Video,
    title: "How Agentic AI really works: Model context protocol explained",
    description: "Ever been curious of Agentic AI, surely not as much as our resource person...",
    color: "#4CAF50",
    bgColor: "bg-[#4CAF50]",
  },
  {
    category: "Webinars",
    categoryIcon: Video,
    backgroundIcon: Video,
    title: "What product leaders are getting wrong about the use of Generative AI",
    description: "Generative AI is reshaping industries at an unprecedented pace, yet many.....",
    color: "#FFB300",
    bgColor: "bg-[#FFB300]",
  },
  {
    category: "Event",
    categoryIcon: Calendar,
    backgroundIcon: Video,
    title: "What AI Agents can and can not do",
    description: "Whether you're a developer, product manager, or just curious about the future..",
    color: "#00BCD4",
    bgColor: "bg-[#00BCD4]",
  },
];

export default function StayAheadSection() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Stay Ahead of what's next
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
              News and insights from our work in skilling, talent, and global readiness.
            </p>
          </div>
          <div className="sm:pb-2">
            <Link
              href="#updates"
              className="inline-flex items-center gap-2 text-[#DC143C] font-semibold text-lg hover:underline"
            >
              Read more <span className="text-xl">&gt;</span>
            </Link>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="pb-12"
          >
            {contentCards.map((card, index) => {
              const CategoryIcon = card.categoryIcon;
              const BackgroundIcon = card.backgroundIcon;
              
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`${card.bgColor} rounded-lg p-6 lg:p-8 h-full min-h-[320px] flex flex-col relative overflow-hidden`}
                  >
                    {/* Background Icon */}
                    <div className="absolute top-0 right-0 opacity-10">
                      <BackgroundIcon className="w-32 h-32 lg:w-40 lg:h-40" style={{ color: "white" }} />
                    </div>

                    {/* Category Label */}
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                      <CategoryIcon className="w-5 h-5" style={{ color: "white" }} />
                      <span className="text-white text-sm font-medium">{card.category}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between relative z-10">
                      <div className="space-y-3">
                        <h3 className="text-white font-bold text-lg lg:text-xl leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-white/90 text-sm lg:text-base line-clamp-3">
                          {card.description}
                        </p>
                      </div>

                      {/* Plus Button */}
                      <div className="mt-6 flex justify-end">
                        <button
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                          aria-label="Read more"
                        >
                          <Plus className="w-6 h-6" style={{ color: card.color }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

