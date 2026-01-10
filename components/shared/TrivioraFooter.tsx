"use client";

import React from "react";
import Link from "next/link";
import { Home, Mail, Phone, Youtube, Linkedin, Twitter } from "lucide-react";

const companyLinks = [
  { href: "#about", label: "About Triviora" },
  { href: "#advisory", label: "Advisory" },
  { href: "#placement", label: "Placement" },
  { href: "#tie-ups", label: "Tie-Ups" },
  { href: "#updates", label: "Updates" },
  { href: "#contact", label: "Contact Us" },
];

const programLinks = [
  { href: "#us-readiness", label: "US Readiness Program" },
  { href: "#overview", label: "Program Overview" },
  { href: "#outcomes", label: "Learning Outcomes" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#placement-support", label: "Placement Support" },
];

const socialLinks = [
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "Linkedin" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function TrivioraFooter() {
  return (
    <footer className="relative w-full bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Logo Area - Left */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#DC143C] flex items-center justify-center rounded">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-black font-semibold text-lg leading-tight">Triviora</span>
                <span className="text-black font-semibold text-lg leading-tight">Global</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Three Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Column */}
            <div>
              <h3 className="text-black font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#DC143C] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Column */}
            <div>
              <h3 className="text-black font-semibold text-lg mb-4">Program</h3>
              <ul className="space-y-2">
                {programLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#DC143C] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="text-black font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@trivioraglobal.com"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#DC143C] transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    info@trivioraglobal.com
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-gray-700 text-sm">
                    <Phone className="w-4 h-4" />
                    Available on request
                  </span>
                </li>
                <li className="flex items-center gap-4 pt-2">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="text-gray-700 hover:text-[#DC143C] transition-colors"
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>

          {/* Hashtag - Right */}
          <div className="lg:col-span-3 flex items-center justify-end">
            <div className="text-right">
              <p className="text-4xl lg:text-5xl font-bold text-gray-400 leading-tight">
                #BUILD
              </p>
              <p className="text-4xl lg:text-5xl font-bold text-gray-400 leading-tight">
                OPPORTUNITY
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left - Homepage Link */}
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-[#DC143C] transition-colors text-sm"
              >
                <Home className="w-4 h-4" />
                Homepage
              </Link>
            </div>

            {/* Center - Copyright and Terms */}
            <div className="text-center space-y-1">
              <p className="text-gray-500 text-xs sm:text-sm">
                Copyright 2026 Triviora Global LLP. All rights reserved.
              </p>
              <Link
                href="#terms"
                className="text-gray-500 hover:text-[#DC143C] transition-colors text-xs sm:text-sm"
              >
                Terms of Service
              </Link>
            </div>

            {/* Right - Location */}
            <div>
              <p className="text-gray-500 text-xs sm:text-sm">Moratu, India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

