"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import vertexlogo from "../../public/icons/vertexlogo.svg";
import { ContactForm } from "../ContactForm";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#amenities", label: "Amenities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#locations", label: "Location" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="lg:absolute top-0 left-0 right-0 z-50 w-full">
        {/* Container */}
        <div className="px-4 sm:px-6 lg:px-20 py-4 lg:pt-7 mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src={vertexlogo} alt="Vertex Logo" width={150} height={32} priority />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex text-lg md:items-center md:space-x-8">
              {navLinks.map((item) =>
                pathname === "/" ? (
                  // ✅ Smooth scroll when on homepage
                  <ScrollLink
                    key={item.label}
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={700}
                   
                    spy={true}
                    className="font-medium cursor-pointer text-[#000000] text-lg transition-colors "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  // ✅ Navigate to homepage when on other pages (like Thank You)
                  <Link
                    key={item.label}
                    href={`/${item.href}`}
                    className="font-medium cursor-pointer text-[#000000] text-lg transition-colors "
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button onClick={() => setOpen(true)} variant="primary" size="default">
                Get a Quote
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
                pathname === "/" ? (
                  <ScrollLink
                    key={item.label}
                    to={item.href.replace("#", "")}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    spy={true}
                    className="rounded-md px-3 py-2 font-medium text-[#000000] cursor-pointer hover:bg-gray-100 "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    key={item.label}
                    href={`/${item.href}`}
                    className="rounded-md px-3 py-2 font-medium text-[#000000] cursor-pointer hover:bg-gray-100 "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              {/* Mobile "Get a Quote" Button */}
              <div className="pt-2">
                <Button onClick={() => setOpen(true)} variant="primary" className="w-full">
                  Get a Quote
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
