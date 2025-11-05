"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121B1F] text-gray-300 py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl xl:max-w-[85%] px-4 mx-auto sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-5">
        {/* ===== Logo ===== */}
        <div className="flex items-center justify-center">
          {/* Replace with your actual logo */}
          <Image
            src="/icons/vertex-white.svg" // 🔁 replace this path with your actual logo
            alt="Vertex Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* ===== Address ===== */}
        <p className="text-sm leading-relaxed max-w-xl text-white/60">
          Ground Floor, Door No 4-1-143 A1, Vertex Workspace, Gateway Building, MG Road, Ballalbagh, Mangaluru, Dakshina Kannada, Karnataka, 575003
        </p>

        {/* ===== Divider ===== */}
        <div className="w-full h-px bg-gray-700 mt-3" />

        {/* ===== Copyright ===== */}
        <p className="text-xs text-gray-500">© MGM Ventures {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
