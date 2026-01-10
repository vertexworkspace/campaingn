"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

const primaryNavLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#placements", label: "Placements" },
  { 
    href: "#more", 
    label: "More",
    hasDropdown: true 
  },
];

const secondaryNavLinks = [
  { href: "#about", label: "About" },
  { href: "#advisory-board", label: "Advisory Board" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#updates", label: "Updates" },
  { href: "#contact", label: "Contact Us" },
];

export default function TrivioraNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Primary Navigation */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#DC143C] flex items-center justify-center rounded">
                  <span className="text-white font-bold text-lg">TG</span>
                </div>
                <span className="text-black font-semibold text-xl">Triviora Global</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {primaryNavLinks.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center gap-1 text-black font-medium text-lg hover:text-[#DC143C] transition-colors"
                      onMouseEnter={() => setIsMoreDropdownOpen(true)}
                      onMouseLeave={() => setIsMoreDropdownOpen(false)}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-black font-medium text-lg hover:text-[#DC143C] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && isMoreDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsMoreDropdownOpen(true)}
                      onMouseLeave={() => setIsMoreDropdownOpen(false)}
                    >
                      {secondaryNavLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-4 py-2 text-black hover:bg-gray-50 hover:text-[#DC143C] transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button
                variant="primary"
                size="default"
                className="bg-[#DC143C] hover:bg-[#DC143C]/90 text-white font-semibold"
              >
                Join the Program
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Desktop Only */}
      <div className="hidden lg:block border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <nav className="flex items-center space-x-6 h-12">
            {secondaryNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 text-sm font-medium hover:text-[#DC143C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {primaryNavLinks.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                      className="w-full flex items-center justify-between text-left text-black font-medium py-2"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMoreDropdownOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {secondaryNavLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="block text-gray-600 py-2 hover:text-[#DC143C]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-black font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button
                variant="primary"
                size="default"
                className="w-full bg-[#DC143C] hover:bg-[#DC143C]/90 text-white font-semibold"
              >
                Join the Program
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

