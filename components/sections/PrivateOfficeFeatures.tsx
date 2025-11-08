"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { Clock, TrendingUp, HeartHandshake } from "lucide-react";
import privetOffice from "../../public/images/privet-office.webp"; // replace with your actual image
import { ContactForm } from "../ContactForm";
import { useState } from "react";

export default function PrivateOfficeFeatures() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-white pb-11 lg:py-24 px-6 lg:px-12">
      <div className="px-4 sm:px-6 lg:px-20 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-3xl sm:text-[40px] font-semibold text-primary leading-snug">
              Designed for Growing Teams
              <br />
              That Thrive in Focus
            </h2>
            <p className="mt-4 text-primary font-semibold text-base sm:text-lg max-w-xl">
              Our private offices are built for professionals who want a fully furnished, lockable office with access to world-class amenities.
            </p>
          </div>

          <div className="relative  lg:hidden w-full h-[350px] sm:h-[450px] lg:h-[500px]  overflow-hidden shadow-x">
          <Image
            src={privetOffice}
            alt="Office workspace with team collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

          {/* Space Details */}
          <div className="mt-8">
            <h3 className="font-semibold text-secondary text-lg mb-4">Space Details:</h3>
            <ul className="space-y-4">
              <li className="flex  items-center gap-3">
                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.375 12.25L10 11.125V6.42087M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C13.3313 19 16.2398 17.1901 17.796 14.5M16.5311 9.01234L18.7811 11.2623L21.0311 9.01234"
                    stroke="#2A2A2A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-gray-700 text-base">24/7 Access, so work at your own pace</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 10.6L6.376 5.43077L10.984 9.86154L20.2 1M20.2 1H13.288M20.2 1V7.64615"
                    stroke="#2A2A2A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-gray-700 text-base">Scalable plans that grow with your business</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.6904 12.634L20.5925 9.88953C22.6302 7.85184 22.6302 4.54811 20.5925 2.51042C18.5548 0.472724 15.2511 0.472724 13.2134 2.51042L9.1035 6.50347C8.41164 7.17293 8.40255 8.27939 9.08332 8.96012V8.96016C9.75619 9.63304 10.8472 9.63304 11.5201 8.96016L12.2558 8.22443C12.5388 7.9414 12.9978 7.9414 13.2808 8.22443L17.8485 12.7921C18.4016 13.3452 18.4016 14.2419 17.8485 14.795C17.2954 15.3481 16.3987 15.3481 15.8456 14.795"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.3814 15.6321L13.621 16.8718C14.2149 17.4657 15.1778 17.4657 15.7717 16.8718C16.3656 16.278 16.3656 15.3151 15.7717 14.7211L14.5255 13.4749"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7115 3.94944L10.1196 2.35753C7.97618 0.214123 4.50101 0.214123 2.35756 2.35753C0.214148 4.50098 0.214148 7.97617 2.35756 10.1196L2.94281 10.7048"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.69907 17.9744L6.71873 17.994C7.32324 18.5985 8.3034 18.5985 8.90791 17.994L9.70003 17.2019C10.3046 16.5973 10.3046 15.6172 9.70003 15.0127L9.68042 14.9931C9.07587 14.3885 8.09575 14.3885 7.49119 14.9931L6.69907 15.7851C6.09456 16.3897 6.09456 17.3698 6.69907 17.9744Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.45636 15.7993L4.47597 15.8189C5.08052 16.4235 6.06064 16.4235 6.66516 15.8189L8.66248 13.8217C9.26699 13.2171 9.26699 12.237 8.66248 11.6324L8.64283 11.6128C8.03832 11.0083 7.05815 11.0083 6.45364 11.6128L4.45636 13.6101C3.85185 14.2146 3.85185 15.1948 4.45636 15.7993Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.24755 13.5903L2.26716 13.6099C2.87171 14.2145 3.85188 14.2145 4.45639 13.6099L5.67828 12.388C6.28284 11.7835 6.28284 10.8034 5.67828 10.1989L5.65867 10.1792C5.05411 9.57469 4.074 9.57469 3.46944 10.1792L2.24755 11.4011C1.64304 12.0057 1.64304 12.9858 2.24755 13.5903Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.67686 17.2295L11.47 19.0227C12.0639 19.6166 13.0268 19.6166 13.6207 19.0227C14.2146 18.4288 14.2146 17.4659 13.6207 16.872"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-gray-700 text-base">On-ground support and community events</span>
              </li>
            </ul>
          </div>

          {/* Button */}
          <div className="pt-4">
            <Button 
            aria-label="Get a Quote"
            
            onClick={() => setOpen(true)} className="bg-[#0097DC] hover:bg-[#007bb5] text-white font-semibold px-6 py-2 ">
              Get a Quote
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative hidden lg:block w-full h-[350px] sm:h-[450px] lg:h-[500px]  overflow-hidden shadow-x">
          <Image
            src={privetOffice}
            alt="Office workspace with team collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      {open && <ContactForm showModal onClose={() => setOpen(false)} />}
    </section>
  );
}
