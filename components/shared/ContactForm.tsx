"use client";

import * as React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Select } from "../ui/Select";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Added useSearchParams
import { disableLenis, enableLenis } from "@/components/SmoothScroll";

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">{children}</div>
);

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
  defaulltSolution?: string;
  modalHeading?: string;
  modalDescription?: string;
}

const locations = ["Mangaluru"];
const solution = ["Coworking Spaces", "Flexi Desks", "Virtual Offices", "Event Spaces", "Meeting Rooms"];

const ContactFormContent: React.FC<ContactFormProps> = ({
  className,
  showModal = false,
  onClose,
  variant = "primary",
  defaulltSolution,
  modalHeading,
  modalDescription,
}) => {
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});
  const [phone, setPhone] = React.useState<string | undefined>(undefined);
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams(); // Hook to get URL parameters

  const googleScriptUrl =
    pathname === "/private-offices"
      ? process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL_WORK_SPACE
      : process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL_COWORKING_SPACE;

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};

    if (!formData.get("name")) errors.name = "Please enter your name";
    if (!formData.get("email")) errors.email = "Please enter your email";
    if (!formData.get("location")) errors.location = "Please select a location";
    if (!phone) errors.phone = "Please enter your phone number";
    if (!formData.get("company")) errors.company = "Please enter your company name";
    if (!formData.get("team-size")) errors["team-size"] = "Please enter your team size";

    return errors;
  };

  const source = pathname.includes("/vertex-solutions")
    ? "Vertex Solution Form"
    : pathname.includes("/private-offices")
      ? "Private Office Form"
      : "Website Form";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setLoading(true);
    onClose?.();

    // Redirect to thank you page
    if (pathname === "/private-offices") {
      router.push("/private-offices/thank-you");
    } else {
      router.push("/vertex-solutions/thank-you");
    }

    const consentChecked = formData.get("consent") === "on";

    // FINAL FORM BODY (send to your API)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: phone || "",
      location: formData.get("location") as string,
      company: formData.get("company") as string,
      teamSize: formData.get("team-size") as string,
      description: description || "",
      consent: consentChecked ? "Yes" : "No",
      formType: pathname.includes("private-offices") ? "Private Office" : "Solution",
      bookingLink: window.location.href,
      pathname: pathname,
    };

    let project_type = "";
    let finalLocation = "";

    if (pathname.includes("/vertex-solutions")) {
      project_type = data.location;
      finalLocation = "";
    } else if (pathname.includes("/private-offices")) {
      finalLocation = data.location;
      project_type = "";
    } else {
      project_type = "";
      finalLocation = "";
    }

    try {
      // 🟦 SEND TO GOOGLE SCRIPT (your existing)
      await fetch(googleScriptUrl!, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any),
      });

      // 🟧 SEND TO DATABASE API + WEBHOOK
      // Capture query params for webhook
      const paramsObj: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        paramsObj[key] = value;
      });

      const response = await fetch("/api/send-db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "lead",
          project_enquired: "Vertex",
          fname: data.name,
          mname: "",
          lname: "",
          gender: "",
          residing: "",
          email: data.email,
          phone: data.phone,
          city: "",
          state: "",
          street: "",
          zipcode: "",
          country: "",
          source: source,
          solution: project_type,
          company_name: data.company,
          team_size: data.teamSize,
          description: data.description,
          enquiry_for: "commercial",
          location: finalLocation,
          // New fields for Webhook:
          page_url: window.location.href,
          queryParams: paramsObj,
        }),
      });

      const result = await response.json();

      // 🟩 SEND EMAIL (new)
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("❌ Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const borderColor = variant === "secondary" ? "border-white" : "border-[#E2E2E2]";
  const placeholderColor = variant === "secondary" ? "placeholder-white text-white" : "placeholder-[#848484] text-[#848484]";
  const inputBg = "bg-transparent";
  const placeholderSize = "text-sm";

  const dropdown = pathname === "/private-offices" ? locations : solution;
  const buttontext = pathname === "/private-offices" ? "Get a Quote" : "Book Now";
  const dropwontext = pathname === "/private-offices" ? "Location" : "Solution";

  const button =
    variant === "secondary" ? (
      <Button
        aria-label={buttontext || "Submit form"}
        type="submit"
        disabled={loading}
        className="bg-white text-[#0097DC] font-semibold text-lg hover:bg-blue-50 transition"
      >
        {buttontext}
      </Button>
    ) : (
      <Button aria-label={buttontext || "Submit form"} type="submit" disabled={loading} className="w-full text-lg md:w-auto font-semibold">
        {buttontext}
      </Button>
    );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const isLargeScreen = window.innerWidth >= 1024;

    if (isLargeScreen) {
      if (showModal) disableLenis();
      else enableLenis();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && showModal) onClose?.();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        enableLenis();
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [showModal, onClose]);

  const formContent = (
    <form onSubmit={handleSubmit} className={cn("space-y-5 rounded-lg", className)}>
      {/* Row 1 */}
      <FormRow>
        <FormField id="name">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className={cn("border", formErrors.name ? "border-red-500" : borderColor, inputBg, placeholderColor, placeholderSize)}
          />
          {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
        </FormField>

        <FormField id="location">
          {pathname === "/private-offices" ? (
            <Input
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              className={cn("border", formErrors.location ? "border-red-500" : borderColor, inputBg, placeholderColor, placeholderSize)}
            />
          ) : (
            <Select
              id="location"
              name="location"
              variant={variant}
              defaultValue={defaulltSolution || ""}
              className={cn("border", formErrors.location ? "border-red-500" : borderColor, inputBg, placeholderColor, placeholderSize)}
            >
              <option value="" disabled>
                {dropwontext}
              </option>
              {dropdown.map((item, index) => (
                <option key={index} value={item} className="text-[#848484]">
                  {item}
                </option>
              ))}
            </Select>
          )}
          {formErrors.location && <p className="text-red-500 text-xs mt-1">{formErrors.location}</p>}
        </FormField>
      </FormRow>

      {/* Row 2 */}
      <FormRow>
        <FormField id="phone">
          <PhoneInput
            international
            defaultCountry="IN"
            value={phone}
            onChange={(value) => {
              setPhone(value);
              setFormErrors((prev) => ({ ...prev, phone: "" }));
            }}
            placeholder="Phone"
            className={cn(
              "flex w-full border px-3 py-2 text-sm outline-none",
              formErrors.phone ? "border-red-500" : borderColor,
              inputBg,
              placeholderColor
            )}
          />
          {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
        </FormField>

        <FormField id="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={cn("border", formErrors.email ? "border-red-500" : borderColor, inputBg, placeholderColor, placeholderSize)}
          />
          {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
        </FormField>
      </FormRow>

      {/* Row 3 */}
      <FormRow>
        <FormField id="company">
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Company Name"
            className={cn("border", formErrors.company ? "border-red-500" : borderColor, inputBg, placeholderColor, placeholderSize)}
          />
          {formErrors.company && <p className="text-red-500 text-xs mt-1">{formErrors.company}</p>}
        </FormField>

        <FormField id="team-size">
          <Input
            id="team-size"
            name="team-size"
            type="number"
            placeholder="Team Size"
            className={cn("border", formErrors["team-size"] ? "border-red-500" : borderColor, inputBg, placeholderColor, placeholderSize)}
          />
          {formErrors["team-size"] && <p className="text-red-500 text-xs mt-1">{formErrors["team-size"]}</p>}
        </FormField>
      </FormRow>

      {/* Description (optional) */}
      <FormField id="description" className="relative">
        <div className="relative">
          <textarea
            id="description"
            name="description"
            rows={4}
            maxLength={125}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className={cn("flex w-full border px-3 py-2 text-sm outline-none resize-none", borderColor, inputBg, placeholderColor, placeholderSize)}
          />
          {!description && (
            <span className={cn("absolute left-[91px] top-3.5 text-[10px]", variant === "secondary" ? "text-white/90" : "text-[#848484]/70")}>
              (Optional)
            </span>
          )}
        </div>

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
        <div
          className={`flex w-full justify-between flex-wrap items-center flex-col md:flex-row ${variant === "secondary" ? "gap-12" : "gap-4"
            } md:gap-4 lg:gap-3`}
        >
          <div className="flex items-center">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              defaultChecked
              className={cn(
                "lg:h-4 lg:w-4 h-5 w-6 cursor-pointer appearance-none border align-middle",
                "transition-all duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0",
                "checked:bg-[#0097DC] checked:bg-no-repeat checked:bg-center checked:bg-[length:12px_12px]",
                "checked:bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiIvPjwvc3ZnPg==')]",
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
            <button onClick={onClose} className="absolute cursor-pointer top-8 right-8 text-xl" aria-label="Close form">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.876 1L1 14.8781M14.876 14.8781L1 1" stroke="#848484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="bg-white p-7 lg:p-12 ">
              {pathname.includes("/private-offices") && (
                <div>
                  <h1 className="text-3xl lg:text-[36px] font-semibold leading-tight text-primary">
                    Private Offices <br />
                    That Mean Business
                  </h1>
                  <p className="my-2 mb-4 text-base sm:text-lg lg:text-[20px] text-primary">
                    Vertex Private Offices give you privacy, productivity, and prestige all under one roof.
                  </p>
                </div>
              )}
              {pathname.includes("/vertex-solutions") && (
                <div>
                  <h1 className="text-3xl lg:text-[36px] font-semibold leading-tight text-primary">
                    {modalHeading ? (
                      modalHeading
                    ) : (
                      <>
                        Where Work <br />
                        Meets Community
                      </>
                    )}
                  </h1>

                  <p className="my-2 mb-4 text-base sm:text-lg lg:text-[20px] text-primary">
                    {modalDescription ? modalDescription : "Vertex offers flexible, inspiring work environments that fuel collaboration and growth."}
                  </p>
                </div>
              )}
              {formContent}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  return (
    <React.Suspense fallback={null}>
      <ContactFormContent {...props} />
    </React.Suspense>
  );
};

const formatHeading = (text: string) => {
  const words = text.split(" ");
  if (words.length <= 2) return text; // not enough words to split
  return (
    <>
      {words.slice(0, 2).join(" ")} <br />
      {words.slice(2).join(" ")}
    </>
  );
};