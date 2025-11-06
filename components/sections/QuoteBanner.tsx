"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { ContactForm } from "./ContactForm";
import { useState } from "react";

export default function QuoteBanner() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-[#0096E6] text-white px-6 lg:px-12 py-20 sm:py-24 lg:py-10">
      {/* Optional Background Pattern (you can replace this image later) */}
      <div className="absolute inset-0 z-0 opacity-10">
  <Image
    src="/images/quote-banner/bg.png"
    alt=""
    width={1000}
    height={1000}
    className="object-cover absolute left-[70%] top-0 transform -translate-x-1/2 w-[1000px] h-full"
  />
</div>


      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mpx-4 sm:px-6 lg:px-20 mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* LEFT TEXT */}
        <div className="text-center sm:text-left max-w-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
            Find the space that <br className="hidden sm:block" />
            fits your vision.
          </h2>
        </div>

        {/* RIGHT BUTTON */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <Button onClick={() => setOpen(true)} className="bg-white text-[#0097DC] font-semibold text-sm sm:text-base px-5 py-3  hover:bg-blue-50 transition">
            Get a Quote
          </Button>
        </div>
      </div>
      {open && (
        <ContactForm
          showModal
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
