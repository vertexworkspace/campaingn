"use client";

import * as React from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Select } from "./ui/Select";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Utility for conditional class joining
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// ✅ Layout wrapper for consistent spacing
const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">{children}</div>
);

// ✅ Generic FormField wrapper
const FormField: React.FC<{
  id: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, label, className, children }) => (
  <div className={cn("space-y-2", className)}>
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-[#848484]">
        {label}
      </label>
    )}
    {children}
  </div>
);

interface ContactFormProps {
  className?: string;
  showModal?: boolean;
  onClose?: () => void;
  variant?: "primary" | "secondary";
  dorpdownText?: string;
}

const locations = ["Bangalore", "Chennai", "Hyderabad"];
const solution = ["Coworking Spaces", "Flexi Desks", "Virtual Offices", "Event Spaces", "Meeting Rooms"];

export const ContactForm: React.FC<ContactFormProps> = ({
  className,
  showModal = false,
  onClose,
  variant = "primary",
  dorpdownText = "Location",
}) => {
  const [phone, setPhone] = React.useState<string | undefined>(undefined);
  const [description, setDescription] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // 🎨 Variant-based style setup
  const borderColor = variant === "secondary" ? "border-white" : "border-[#E2E2E2]";
  const placeholderColor = variant === "secondary" ? "placeholder-white text-white" : "placeholder-[#848484] text-[#848484]";
  const inputBg = "bg-transparent";
  const placeholderSize = "text-sm";

  const dropdown = dorpdownText === "Location" ? locations : solution;

  const button =
    variant === "secondary" ? (
      <Button type="submit" className="bg-white text-[#0097DC] font-semibold text-sm sm:text-base px-5 py-3  shadow-sm hover:bg-blue-50 transition">
      {dorpdownText === "Location"?"Get a Quote":"Book Now"}  
      </Button>
    ) : (
      <Button type="submit" className="w-full md:w-auto font-semibold ">
   {dorpdownText === "Location"?"Get a Quote":"Book Now"}  
      </Button>
    );

  const formContent = (
    <form onSubmit={handleSubmit} className={cn("space-y-5 rounded-lg", className)}>
      {/* Row 1 */}
      <FormRow>
        <FormField id="name">
          <Input id="name" type="text" placeholder="Name" required className={cn(borderColor, inputBg, placeholderColor, placeholderSize)} />
        </FormField>

        <FormField id="location">
          <Select id="location" variant={variant} defaultValue="" required className={cn(borderColor, inputBg, placeholderColor, placeholderSize)}>
            <option value="" disabled>
              {dorpdownText}
            </option>

            {dropdown.map((item, index) => {
              return (
                <option key={index} value={item} className={variant === "secondary" ? "text-[#848484] bg-white" : "text-[#848484]"}>
                  {item}
                </option>
              );
            })}
          </Select>
        </FormField>
      </FormRow>

      {/* Row 2 */}
      <FormRow>
        <FormField id="phone">
          <PhoneInput
            international
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
            placeholder="Phone"
            className={cn("flex w-full border px-3 py-2 text-sm  outline-none", borderColor, inputBg, placeholderColor)}
          />
        </FormField>

        <FormField id="email">
          <Input id="email" type="email" placeholder="Email" required className={cn(borderColor, inputBg, placeholderColor, placeholderSize)} />
        </FormField>
      </FormRow>

      {/* Row 3 */}
      <FormRow>
        <FormField id="company">
          <Input id="company" type="text" placeholder="Company Name" className={cn(borderColor, inputBg, placeholderColor, placeholderSize)} />
        </FormField>
        <FormField id="team-size">
          <Input id="team-size" type="number" placeholder="Team Size" className={cn(borderColor, inputBg, placeholderColor, placeholderSize)} />
        </FormField>
      </FormRow>

      {/* Description */}
      <FormField id="description" className="relative">
        <textarea
          id="description"
          rows={4}
          maxLength={125}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (Optional)"
          className={cn(
            "flex w-full placeholder:text-sm border px-3 py-2 text-sm outline-none resize-none",
            borderColor,
            inputBg,
            placeholderColor,
            placeholderSize
          )}
        />
        <p
          className={cn(
            "text-xs absolute bottom-2 right-3 text-right transition-colors duration-200",
            variant === "secondary"
              ? description.length >= 120
                ? "text-red-300"
                : "text-white/70"
              : description.length >= 120
              ? "text-red-500"
              : "text-gray-400"
          )}
        >
          {description.length}/125
        </p>
      </FormField>

      {/* Consent + Button */}
      <div className="space-y-4 pt-2">
        <div className="flex w-full justify-between flex-wrap items-center flex-col md:flex-row gap-3">
          <div className="flex items-center">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              defaultChecked
              className={cn(
                // Base styles
                "lg:h-4 lg:w-4 h-5 w-6 cursor-pointer appearance-none border align-middle",
                "transition-all duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0",
                // Checked state styles
                "checked:bg-[#0097DC] checked:bg-no-repeat checked:bg-center checked:bg-[length:12px_12px]",
                // ✅ White tick as Base64-encoded SVG (centered, visible)
                "checked:bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiIvPjwvc3ZnPg==')]",
                // Variant handling
                variant === "secondary" ? "border-white" : "border-[#E2E2E2]"
              )}
            />

            <label htmlFor="consent" className={cn("ml-3 block text-sm select-none", variant === "secondary" ? "text-white" : "text-gray-700")}>
              Consent to contact me via Call, SMS, Email, or WhatsApp
            </label>
          </div>

          {button}
        </div>
      </div>
    </form>
  );

  // 🧊 Modal Wrapper
  if (!showModal) return formContent;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          key="contact-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto px-4 py-10 sm:px-6 sm:py-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl mx-auto"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute cursor-pointer top-8 right-8 text-xl" aria-label="Close form">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.876 1L1 14.8781M14.876 14.8781L1 1" stroke="#848484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="bg-white p-7 lg:p-12 ">
              <div>
                <h1 className="text-3xl lg:text-[36px] font-semibold leading-tight text-primary">
                  Private Offices <br />
                  That Mean Business
                </h1>
                <p className="my-2 mb-4 text-base sm:text-lg lg:text-[20px] text-primary">
                  Vertex Private Offices give you privacy, productivity, and prestige all under one roof.
                </p>
              </div>

              {formContent}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
