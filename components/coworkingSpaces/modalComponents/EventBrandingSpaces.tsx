"use client";
import Image from "next/image";
import { Coffe, CoffeeMaker } from "@/public/icons/icon";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/shared/ContactForm";
import { useState } from "react";

const EventBrandingSpaces = () => {
  const [open, setOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const eventDetails = [
    {
      icon: <Coffe />,
      text: "Food Charged separately as per requirement",
    },
    {
      icon: <Coffe />,
      text: "Parking available on a first-come, first-served basis*",
    },
    {
      icon: <CoffeeMaker />,
      text: "Setup Includes Chairs, tables, microphone, AC, and projector",
    },
    {
      icon: <CoffeeMaker />,
      text: "Ideal for corporate conferences, networking meetings, or private celebrations",
    },
  ];

  const eventPlans = [
    {
      name: "Vertex One Event Space",
      details: "(4 hours | Up to 30 pax)",
      price: "₹5,000",
      gst: "+ GST",
    },
    {
      name: "Vertex Treo Event Space",
      details: "(4 hours | Up to 30 pax)",
      price: "₹5,000",
      gst: "+ GST",
    },
    {
      name: "Ajanta Stepped Seating Space",
      details: "(Weekends only)",
      price: "₹2,500",
      gst: "+ GST",
    },
  ];

  const brandingPlans = [
    {
      name: "Lobby & Pylon Boards",
      details: "(Installation & printing extra)",
      price: "₹1,000",
      gst: "+ GST per month",
    },
    {
      name: "Backlit Boards",
      details: "",
      price: "₹2,500",
      gst: "+ GST per month",
    },
    {
      name: "Building Branding (Backlit)",
      details: "",
      price: "₹36,000",
      gst: "+ GST per year",
    },
  ];

  return (
    <section className="mt-6 sm:mt-14 pb- sm:pb-0 bg-white text-gray-800 space-y-10 lg:space-y-20 px-4 lg:px-0">
      {/* ----------- EVENT SPACES ----------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        {/* Left Content */}
        <div className="lg:col-span-7 lg:mt-5 ">
          <h3 className="text-2xl lg:text-[40px] text-primary font-semibold mb-8 lg:mb-6">Event Spaces</h3>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-4 mb-10 lg:mb-6">
            {eventDetails.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center lg:mt-2 w-8 h-8 sm:w-8 sm:h-8 flex-shrink-0">{item.icon}</div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-secondary">{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5 lg:hidden  mb-12  flex flex-col items-center sm:items-end gap-4">
            <Image src="/dummy/3.webp" alt="Event 1" width={400} height={300} className="object-cover w-full  h-[250px] sm:h-[500px]" />
            <Image src="/dummy/2.webp" alt="Event 2" width={400} height={300} className="object-cover me-auto w-[100%] h-full h-[180px] " />
          </div>

          {/* Pricing Boxes */}
          <div className="space-y-4 mb-6">
            {eventPlans.map((plan, i) => (
              <div
                key={i}
                className="border border-[#0097DC] py-4 px-5 sm:px-7 flex flex-row justify-between items-start sm:items-center gap-3 transition"
              >
                <div>
                  <p className="text-base sm:text-lg lg:text-[28px]">{plan.name}</p>
                  <p className="text-sm sm:text-lg text-secondary">{plan.details}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[22px] sm:text-[29px] font-extrabold text-[#0097DC]">{plan.price}</p>
                  <p className="text-[#0097DC] text-sm sm:text-lg font-extrabold">{plan.gst}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base lg:leading-[2] md:text-lg text-primary mt-2 sm:mt-4 mb-8 lg:mb-5">
            * Custom setups such as round tables, décor, etc. charged extra
            <br />
            ** Valet Parking available at additional cost
          </p>
          <div className="flex justify-center lg:block">
            <Button
              onClick={() => {setOpen(true),setModalHeading("Multi-Purpose Event Rooms"),setModalDescription("Suitable for meetings, workshops, and focused gatherings.")}}
              aria-label="Book Now"
              className="bg-[#0097DC] hover:bg-[#0097DC]/80 text-white font-semibold px-6 py-2"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:col-span-5 hidden lg:flex flex-col items-center sm:items-end gap-4 lg:gap-10">
          <Image
            src="/images/solution-section/modalImages/listen.webp"
            alt="Event 1"
            width={400}
            height={300}
            className="object-cover w-full sm:w-[90%] h-[250px] lg:h-[500px]"
          />
          <Image
            src="/images/solution-section/modalImages/presntation.webp"
            alt="Event 2"
            width={400}
            height={300}
            className="object-cover me-auto w-[70%] sm:w-[50%] h-[180px] lg:h-[250px] xl:h-[300px]"
          />
        </div>
      </div>

      {/* ----------- BRANDING SPACES ----------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10">
        {/* Left Image */}
        <div className="col-span-5 hidden lg:block">
          <Image
            src="/images/solution-section/modalImages/delimo.webp"
            alt="Branding Space"
            width={500}
            height={400}
            className="w-full object-cover h-[300px] sm:h-[500px] md:h-[700px]"
          />
        </div>

        {/* Right Content */}
        <div className="col-span-7">
          <h3 className="text-2xl lg:text-[40px] text-primary font-semibold mb-5 lg:mb-4">Branding Spaces</h3>
          <p className="text-sm sm:text-base md:text-lg text-secondary mb-8 lg:mb-6">
            Ideal for businesses looking to increase brand visibility within the workspace premises
          </p>
          <div className=" mb-10 lg:hidden">
            <Image
              src="/dummy/4.webp"
              alt="Branding Space"
              width={500}
              height={400}
              className="w-full object-cover h-[300px] sm:h-[500px] md:h-[700px]"
            />
          </div>
          {/* Pricing Boxes */}
          <div className="space-y-4 mb-6">
            {brandingPlans.map((plan, i) => (
              <div
                key={i}
                className="border border-[#0097DC] py-4 px-5 sm:px-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition"
              >
                <div>
                  <p className="text-base sm:text-lg lg:text-[28px]">{plan.name}</p>
                  <p className="text-sm sm:text-lg text-secondary">{plan.details}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[22px] sm:text-[29px] font-extrabold text-[#0097DC]">{plan.price}</p>
                  <p className="text-[#0097DC] text-sm sm:text-lg font-extrabold">{plan.gst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:block">
            <Button
              onClick={() => {setOpen(true),setModalHeading("Business Branding Opportunities"),setModalDescription("Strategic placements designed to elevate brand visibility.")}}
              aria-label="Book Now"
              className="bg-[#0097DC] hover:bg-[#0097DC]/80 text-white font-semibold px-6 py-2"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      {open && <ContactForm modalHeading={modalHeading} modalDescription={modalDescription} defaulltSolution="Event Spaces" showModal onClose={() => setOpen(false)} />}
    </section>
  );
};

export default EventBrandingSpaces;
