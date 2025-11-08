"use client";
import Image from "next/image";
import { Building2, Users, Coffee, ShieldCheck } from "lucide-react";
import { Coffe, Developer, Hand, Syestem } from "@/public/icons/icon";

export default function WorkspacesSection() {
  return (
    <section className="bg-[#F8F8F8] py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto grid overflow-hidden grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* 🖼️ Left Image Collage */}
        <div className="relative hidden  bg-white col-span-12 lg:col-span-4 lg:flex justify-center items-center overflow-hidden min-h-[260px] sm:min-h-[420px] lg:min-h-[500px] xl:min-h-[600px]">
          {/* Top-left Image */}
          <div className="absolute top-2 sm:top-3 z-10 left-0 w-[68%] sm:w-[70%] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden ">
            <Image src="/stockImages/HeroBannerImage1.png" alt="Workspace main" width={600} height={400} className="object-cover w-full h-full" />
          </div>

          {/* Center Image (Perfectly Centered) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] sm:w-[65%] h-[140px] sm:h-[200px] md:h-[240px] lg:h-[260px] overflow-hidden ">
              <Image src="/stockImages/HeroBannerImage1.png" alt="Workspace cafe" width={300} height={300} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Bottom-right Image */}
          <div className="absolute bottom-2 sm:bottom-3 right-0 w-[56%] sm:w-[55%] z-10 h-[140px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[350px] overflow-hidden ">
            <Image src="/stockImages/HeroBannerImage1.png" alt="Workspace kitchen" width={300} height={300} className="object-cover w-full h-full" />
          </div>
        </div>

        {/* 🧠 Right Content */}
        <div className="col-span-12 lg:col-span-8 mt-0 lg:mt-0">
          <h2 className="text-3xl lg:text-[48px] font-semibold text-primary mb-4">Workspaces Designed Around You</h2>
          <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed">
            Experience a workspace that adapts to your pace and priorities. At Vertex Managed Workspaces, everything is built to help you focus on
            what matters: your work, your team, and your growth, while we take care of the rest. From flexible memberships to thoughtfully curated
            community spaces, every detail enhances how you work and connect.
          </p>
          <div className="relative lg:hidden mb-8   col-span-12 lg:col-span-4 flex justify-center items-center overflow-hidden min-h-[260px] sm:min-h-[420px] lg:min-h-[500px] xl:min-h-[600px]">
          {/* Top-left Image */}
          <div className="absolute top-2 sm:top-3 z-10 left-0 w-[68%] sm:w-[70%] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden ">
            <Image src="/stockImages/HeroBannerImage1.png" alt="Workspace main" width={600} height={400} className="object-cover w-full h-full" />
          </div>

          {/* Center Image (Perfectly Centered) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] sm:w-[65%] h-[140px] sm:h-[200px] md:h-[240px] lg:h-[260px] overflow-hidden ">
              <Image src="/stockImages/HeroBannerImage1.png" alt="Workspace cafe" width={300} height={300} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Bottom-right Image */}
          <div className="absolute bottom-2 sm:bottom-3 right-0 w-[56%] sm:w-[55%] z-10 h-[140px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[350px] overflow-hidden ">
            <Image src="/stockImages/HeroBannerImage1.png" alt="Workspace kitchen" width={300} height={300} className="object-cover w-full h-full" />
          </div>
        </div>
          {/* ✅ Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="flex items-start gap-3">
              <div className="mt-2">
                <Syestem />
              </div>
              <p className="text-base md:text-lg text-secondary">
                Choose from flexible memberships or day passes that fit your schedule and style of work.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2">
                <Hand />
              </div>
              <p className="text-base md:text-lg text-secondary">Be part of a thriving community that encourages collaboration and learning.</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2">
                {" "}
                <Coffe />
              </div>
              <p className="text-secondary text-base md:text-lg">Work, meet, or unwind in our fully serviced café & collaboration lounge.</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2">
                {" "}
                <Developer />
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Enjoy a comfortable, secure, & well-equipped environment designed for effortless productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
