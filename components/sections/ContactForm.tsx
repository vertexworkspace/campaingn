"use client";

import * as React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">{children}</div>
);

const FormField: React.FC<{
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, label, className, children }) => (
  <div className={cn("space-y-2", className)}>
    <label htmlFor={id} className="text-sm font-medium bg-none text-[#848484]">
      {label}
    </label>
    {children}
  </div>
);

interface ContactFormProps {
  className?: string;
  showModal?: boolean; // 👈 new prop
  onClose?: () => void; // 👈 new prop
  buttonClassName?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className, showModal = false, onClose,buttonClassName="bg-[#0097DC] hover:bg-[#007bb5] text-white" }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const formContent = (
    <form className={cn("space-y-5 bg-transparent p-6 rounded-lg", className)} onSubmit={handleSubmit}>
      {/* Row 1 */}
      <FormRow>
        <FormField id="name" label="">
          <Input id="name" type="text" placeholder="Name" required />
        </FormField>
        <FormField id="location" label="">
          <Select className="bg-none" id="location" defaultValue="" required>
            <option value="" disabled>
              Location
            </option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
          </Select>
        </FormField>
      </FormRow>

      {/* Row 2 */}
      <FormRow>
        <FormField id="phone" label="">
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-[#848484]">
              +91
            </span>
            <Input id="phone" type="tel" placeholder="Phone" className="rounded-l-none" required />
          </div>
        </FormField>
        <FormField id="email" label="">
          <Input id="email" type="email" placeholder="Email" required />
        </FormField>
      </FormRow>

      {/* Row 3 */}
      <FormRow>
        <FormField id="company" label="">
          <Input id="company" type="text" placeholder="Company Name" />
        </FormField>
        <FormField id="team-size" label="">
          <Input id="team-size" type="number" placeholder="Team Size" />
        </FormField>
      </FormRow>

      {/* Description */}
      <FormField id="description" label="">
        <textarea
          id="description"
          rows={3}
          placeholder="Description (Optional)"
          className={cn(
            "flex w-full rounded-md border border-gray-300 bg-none px-3 py-2 text-sm",
            "placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2"
          )}
        />
        <p className="text-xs text-right text-gray-400">0/125</p>
      </FormField>

      {/* Consent + Button */}
      <div className="space-y-4 pt-2">
        <div className="flex w-full justify-between items-center flex-col md:flex-row gap-3">
          <div className="flex items-center">
            <input id="consent" name="consent" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" defaultChecked />
            <label htmlFor="consent" className="ml-3 block text-sm text-gray-700">
              Consent to contact me via Call, SMS, Email, or WhatsApp
            </label>
          </div>
          <Button type="submit" className={`w-full md:w-auto ${buttonClassName} font-semibold rounded-md`}>
            Get a Quote
          </Button>
        </div>
      </div>
    </form>
  );

  if (!showModal) return formContent;

  // 🧊 Modal wrapper
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        <button onClick={onClose} className="absolute cursor-pointer top-4 right-4  text-xl">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.876 1L1 14.8781M14.876 14.8781L1 1"
              stroke="#848484"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="bg-white p-6 rounded-lg">{formContent}</div>
      </div>
    </div>
  );
};
