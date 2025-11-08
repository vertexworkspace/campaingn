"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ThankYouPage() {
  return (
    <div className="relative   bg-white overflow-hidden">
      {/* Large faint "X" background */}
    
      <svg className="absolute hidden  lg:block -left-40 xl:-left-32 -top-48"  width="1101" height="1216" viewBox="0 0 1101 1216" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1100.05 0.5L579.564 763.137L579.38 763.407L579.555 763.685L862.795 1214.84H607.887L432.284 907.528L431.85 906.769L431.415 907.528L255.812 1214.84H0.90918L286.641 763.686L286.811 763.417L286.639 763.148L13.4492 337.113H269.573L435.137 623.082L435.54 623.778L435.985 623.108L850.209 0.5H1100.05Z" stroke="#0097DC"/>
</svg>

<div className="flex items-center h-[70vh] lg:h-[110vh] justify-end">
      {/* Main content */}
      <div className="relative z-10 max-3xl text-start md:text-left px-6">
        <h1 className="text-2xl md:text-[48px] xl:text-[56px] font-semibold text-primary leading-snug">
          Thank You for Choosing
          <br />
          Vertex Managed Workspaces
        </h1>

        <p className="mt-4 text-sm font-meduim lg:text-[24px] text-primary leading-relaxed">
          Our team will connect with you soon with more
          <br />
          details about our Private Office Solutions.
        </p>

          <Link href="/coworking-space"><div className="mt-5 inline-flex items-center gap-2 text-[#0097DC]  font-bold text-lg lg:text-[24px]  cursor-pointer">
        <ChevronLeft size={30} />
          Go Back
        </div></Link>
      </div>
      </div>
    </div>
  );
}
