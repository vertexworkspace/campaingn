"use client";

import * as React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";

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
}

export const ContactForm: React.FC<ContactFormProps> = ({ className, showModal = false, onClose, variant = "primary" }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // 🎨 Variant-based style setup
  const borderColor = variant === "secondary" ? "border-white" : "border-[#E2E2E2]";
  const placeholderColor = variant === "secondary" ? "placeholder-white text-white" : "placeholder-[#848484] text-[#848484]";
  const inputBg = "bg-transparent";
  const placeholderSize = "text-sm";

  const button =
    variant === "secondary" ? (
      <Button
        type="submit"
        className="bg-white text-[#0097DC] font-semibold text-sm sm:text-base px-5 py-3  shadow-sm hover:bg-blue-50 transition"
      >
        Get a Quote
      </Button>
    ) : (
      <Button type="submit" className="w-full md:w-auto font-semibold ">
        Get a Quote
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
          <Select id="location" defaultValue="" required className={cn(borderColor, inputBg, placeholderColor, placeholderSize)}>
            <option value="" disabled>
              Location
            </option>
            <option value="Bangalore" className={variant === "secondary" ? "text-[#848484] bg-white" : "text-[#848484]"}>
              Bangalore
            </option>
            <option value="Chennai" className={variant === "secondary" ? "text-[#848484] bg-white" : "text-[#848484]"}>
              Chennai
            </option>
            <option value="Hyderabad" className={variant === "secondary" ? "text-[#848484] bg-white" : "text-[#848484]"}>
              Hyderabad
            </option>
          </Select>
        </FormField>
      </FormRow>

      {/* Row 2 */}
      <FormRow>
        <FormField id="phone">
          <div className="flex">
            <span
              className={cn(
                "inline-flex items-center  border border-r-0 px-3 text-sm",
                variant === "secondary" ? "border-white text-white bg-transparent" : "border-[#E2E2E2] text-[#848484] white"
              )}
            >
              +91
            </span>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone"
              required
              className={cn("rounded-l-none", borderColor, inputBg, placeholderColor, placeholderSize)}
            />
          </div>
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
      <FormField id="description">
        <textarea
          id="description"
          rows={4}
          placeholder="Description (Optional)"
          className={cn(
            "flex w-full  placeholder:text-sm border px-3 py-2 text-sm outline-none",
            borderColor,
            inputBg,
            placeholderColor,
            placeholderSize
          )}
        />
        <p className={cn("text-xs text-right", variant === "secondary" ? "text-white/70" : "text-gray-400")}>0/125</p>
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
    "relative h-4 w-4 cursor-pointer rounded-sm border-2 transition-all duration-200",
    "focus:outline-none focus:ring-0 focus:ring-offset-0",
    variant === "secondary"
      ? // 🟢 Secondary version: white border, black tick, transparent bg
        "border-white checked:border-white checked:bg-transparent checked:[mask-image:url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27black%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27/%3E%3C/svg%3E')] checked:bg-no-repeat checked:bg-center"
      : // 🔵 Primary version: gray border, blue bg, white tick
        "border-[#E2E2E2] checked:border-[#0097DC] checked:bg-[#0097DC] checked:[mask-image:url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27/%3E%3C/svg%3E')] checked:bg-no-repeat checked:bg-center"
  )}
/>



      <label
        htmlFor="consent"
        className={cn(
          "ml-3 block text-sm",
          variant === "secondary" ? "text-white" : "text-gray-700"
        )}
      >
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Close Button */}
        <button onClick={onClose} className="absolute cursor-pointer top-8 right-8 text-xl" aria-label="Close form">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.876 1L1 14.8781M14.876 14.8781L1 1" stroke="#848484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="bg-white p-7 lg:p-12 rounded-lg">
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
      </div>
    </div>
  );
};
