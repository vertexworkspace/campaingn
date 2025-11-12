"use client";

import React from "react";

interface SwiperDotsProps {
  total: number; // total slides
  current: number; // current active slide index
  onDotClick: (index: number) => void; // callback for clicking a dot
  className?: string; // optional extra styles
  activeColor?: string; // optional custom color for active dot
  inactiveColor?: string; // optional custom color for inactive dot
}

const SwiperDots: React.FC<SwiperDotsProps> = ({
  total,
  current,
  onDotClick,
  className = "",
  activeColor = "#0097DC",
  inactiveColor = "#E2E2E2",
}) => {
  return (
    <div className={`flex justify-center gap-3 mt-6 ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onDotClick(i)}
          className={`transition-all duration-300 cursor-pointer rounded-full`}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: i === current ? activeColor : inactiveColor,
            transform: i === current ? "scale(1.2)" : "scale(1)",
          }}
        />
      ))}
    </div>
  );
};

export default SwiperDots;
