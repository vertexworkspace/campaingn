"use client"; // For the mobile menu toggle state

import React, { useState } from "react";
// import Link from 'next/link'; // Changed for compatibility
import Logo from "../ui/Logo"; // Changed path for compatibility
import { Button } from "../ui/Button"; // Changed path for compatibility
import { Menu, X } from "lucide-react"; // For mobile menu icons
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

// You'll need to install lucide-react: npm install lucide-react

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#amenities", label: "Amenities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#location", label: "Location" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className=" top-0 z-50 w-full bg-transparent backdrop-blur-sm">
        {/* Container for padding and max-width */}
        <div className=" px-4 sm:px-6 lg:px-20 py-3 mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src="/icons/vertexlogo.svg" alt="Vertex Logo" width={150} height={32} priority />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex text-lg  md:items-center md:space-x-8">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="font-medium text-[#000000] text-lg  transition-colors">
                  {item.label}
                </Link>
              ))}
              <Button onClick={() => setOpen(true)} variant="primary" size="default">
                Get a Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-2 px-4 py-4">
              {navLinks.map((item) => (
                <Link // Changed from <Link> for compatibility
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {item.label}
                </Link>
              ))}
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
