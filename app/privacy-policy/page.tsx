import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vertex Workspace Mangalore",
  description:
    "Read Vertex Workspace's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a2a2a] mb-6">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Vertex, we prioritise your privacy and are dedicated to safeguarding your
            personal data. This Privacy Policy outlines how we gather, utilise, store, and
            secure the information you provide when you access our website, fill out forms,
            or engage with our services.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            Information We Collect
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            We may gather personal data that you willingly share with us, which can include,
            but is not limited to, your name, email address, phone number, company name,
            location, and any other information provided through forms on our website or
            advertisements.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We may also automatically collect non-personal data, such as your IP address,
            browser type, device information, pages viewed, and the duration of your visit to
            our website.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            How We Use Your Information
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            The information we collect is utilized to:
          </p>
          <ul className="list-none space-y-3 text-base md:text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>Address your queries and requests</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>
                Provide details regarding our coworking spaces, private offices, meeting
                rooms, virtual offices, and associated services
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>
                Reach out to you via phone, email, or WhatsApp about availability,
                promotions, or updates
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>Enhance our website, services, and customer experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>
                Execute marketing, advertising, and remarketing campaigns across
                platforms like Google, Meta, and LinkedIn
              </span>
            </li>
          </ul>
        </section>

        {/* Sharing of Information */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            Sharing of Information
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Vertex does not sell, rent, or exchange your personal data.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Your information may be disclosed only to:
          </p>
          <ul className="list-none space-y-3 text-base md:text-lg text-gray-700 mb-4">
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>Authorised internal teams responsible for sales and customer support</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>
                Reliable third-party service providers, including CRM tools, analytics
                platforms, and advertising partners, are strictly for business purposes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0097DC] mr-3 mt-1">●</span>
              <span>Legal or regulatory entities as mandated by law</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            All these parties are obligated to maintain the security and confidentiality of
            your information.
          </p>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our website employs cookies and similar tracking technologies to improve user
            experience, analyse website traffic, and provide targeted advertisements. You
            have the option to disable cookies through your browser settings; however,
            certain features of the website may not operate correctly.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            Data Security
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Protecting your data is vital to us. We implement industry-standard encryption
            and security protocols (like SSL/TLS) to safeguard your information.
            Nonetheless, please keep in mind that no method of transmission over the
            Internet is entirely secure.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            Your Rights
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            You have the entitlement to request access to, amend, or remove your personal
            data. Additionally, you may opt out of receiving marketing communications from
            us at any point by contacting us directly.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Vertex retains the right to revise or alter this Privacy Policy at any time. Any
            amendments will take effect immediately upon being posted on this page.
          </p>
        </section>
      </div>
    </main>
  );
}

