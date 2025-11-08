"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import vertexlogo from "../../public/vertexlogo.svg";
import { ContactForm } from "../ContactForm";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinksCoworking = [
  { href: "#overviewco", label: "Overview" },
  { href: "#amenitieco", label: "Amenities" },
  { href: "#pricingco", label: "Pricing" },
  { href: "#locationco", label: "Location" },
];

const navLinksWorkSpace = [
  { href: "#overview", label: "Overview" },
  { href: "#amenities", label: "Amenities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#locations", label: "Location" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Determine which page and navLinks to use
  const isCoworking = pathname.startsWith("/coworking-space");
  const isWorkspace = pathname.startsWith("/work-space");

  const navLinks = isCoworking ? navLinksCoworking : navLinksWorkSpace;
  const basePath = isCoworking ? "/coworking-space" : "/work-space";
  const isThankYouPage = pathname.includes("/thank-you");

  // ✅ Smooth scroll handler (replaces react-scroll)
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="lg:absolute top-0 left-0 right-0 z-50 w-full">
        <div className="px-4 sm:px-6 lg:px-20 py-4 lg:pt-7 mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer">
              <Image src={vertexlogo} alt="Vertex Logo" width={150} height={32} priority />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex text-lg md:items-center md:space-x-8">
              {navLinks.map((item) =>
                !isThankYouPage ? (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(item.href)}
                    className="font-medium cursor-pointer text-[#000000] text-lg transition-colors bg-transparent border-none"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={`${basePath}/${item.href}`}
                    className="font-medium cursor-pointer text-[#000000] text-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}

              <Button
                aria-label={isCoworking ? "Book Now" : "Get a Quote"}
                onClick={() => setOpen(true)}
                variant="primary"
                size="default"
              >
                {isCoworking ? "Book Now" : "Get a Quote"}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden text-black">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-2 px-4 py-4">
              {navLinks.map((item) =>
                !isThankYouPage ? (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(item.href)}
                    className="rounded-md px-3 py-2 font-medium text-[#000000] cursor-pointer hover:bg-gray-100 text-left bg-transparent border-none"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={`${basePath}/${item.href}`}
                    className="rounded-md px-3 py-2 font-medium text-[#000000] cursor-pointer hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="pt-2">
                <Button
                  aria-label={isCoworking ? "Book Now" : "Get a Quote"}
                  onClick={() => setOpen(true)}
                  variant="primary"
                  className="w-full"
                >
                  {isCoworking ? "Book Now" : "Get a Quote"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {open && <ContactForm showModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
