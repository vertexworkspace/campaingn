"use client";

import React from "react";
import { ContactForm } from "../ContactForm"; // adjust import path as needed

export default function GetAQuoteSection() {
  return (
    <section className="relative bg-[#0097dc] text-white py-16 px-6 lg:px-12  overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Your next office awaits <br /> at Vertex Managed Workspaces
          </h2>
          <p className="text-white/90 text-base max-w-md">Schedule a walkthrough today and discover how work feels when everything just fits.</p>

          {/* Decorative background shape */}
          <div className="hidden md:block absolute bottom-0 left-0 opacity-30">
            <svg width="651" height="338" viewBox="0 0 651 338" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M647.214 2L341.277 450.268L340.539 451.349L341.235 452.458L507.072 716.609H360.42L257.081 535.758L255.345 532.719L253.607 535.758L150.269 716.609H3.63379L170.925 452.465L171.606 451.388L170.919 450.315L11.0703 201.033H158.411L255.812 369.271L257.426 372.057L259.209 369.376L503.625 2H647.214Z"
                stroke="#26428B"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#0097DC] text-black">
          <div className="bg-[#0097DC] text-black p-0">
            <ContactForm variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
