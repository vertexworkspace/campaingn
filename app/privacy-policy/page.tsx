import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vertex Workspace Mangalore",
  description:
    "Read Vertex Workspace's Privacy Policy to understand how we collect, use, and protect your personal information in compliance with India's Digital Personal Data Protection (DPDP) Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a2a2a] mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: June 17, 2025 &nbsp;|&nbsp; Last Updated: June 17,
          2025
        </p>

        {/* DPDP Act Notice */}
        <div className="bg-[#e8f6fd] border-l-4 border-[#0097DC] rounded-md px-6 py-4 mb-10">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            This Privacy Policy is issued in accordance with the{" "}
            <strong>
              Digital Personal Data Protection (DPDP) Act, 2023
            </strong>{" "}
            and the <strong>DPDP Rules, 2025</strong> of India. As a Data
            Fiduciary, Vertex Workspace is committed to processing your personal
            data lawfully, transparently, and securely.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Vertex Workspace, we prioritise your privacy and are dedicated to
            safeguarding your personal data. This Privacy Policy outlines how we
            gather, utilise, store, and secure the information you provide when
            you access our website, fill out forms, or engage with our services.
            By using our website or submitting any form, you acknowledge that
            you have read and understood this policy.
          </p>
        </div>

        {/* 1. Data Fiduciary Identity */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            1. Identity of the Data Fiduciary
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-base md:text-lg text-gray-700 space-y-1">
            <p>
              <strong>Data Fiduciary:</strong> Vertex Workspace
            </p>
            <p>
              <strong>Location:</strong> Mangalore, Karnataka, India
            </p>
            <p>
              <strong>Grievance Contact:</strong>{" "}
              <a
                href="mailto:jeevan@mukundmgmrealty.com"
                className="text-[#0097DC] underline"
              >
                jeevan@mukundmgmrealty.com
              </a>{" "}(Legal Consultant)
            </p>
          </div>
        </section>

        {/* 2. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            2. Personal Data We Collect
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            We may gather personal data that you willingly share with us, which
            can include, but is not limited to:
          </p>
          <ul className="list-none space-y-3 text-base md:text-lg text-gray-700 mb-4">
            {[
              "Full name",
              "Email address",
              "Phone number / WhatsApp number",
              "Company or organisation name",
              "City / Location",
              "Nature of workspace requirement",
              "Any other information provided through website forms or advertisements",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#0097DC] mr-3 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We may also automatically collect non-personal / technical data,
            such as your IP address, browser type, device information, pages
            viewed, and the duration of your visit to our website.
          </p>
        </section>

        {/* 3. Purpose of Processing */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            3. Purpose of Processing Personal Data
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Under the DPDP Act, 2023, we are required to specify the purpose
            for which your personal data is processed. Your data is used
            strictly for the following purposes:
          </p>
          <ul className="list-none space-y-3 text-base md:text-lg text-gray-700">
            {[
              "To respond to your enquiries and service requests",
              "To provide information regarding our coworking spaces, private offices, meeting rooms, virtual offices, and associated services",
              "To reach out to you via phone, email, or WhatsApp about availability, promotions, or updates",
              "To enhance our website, services, and overall customer experience",
              "To execute marketing, advertising, and remarketing campaigns across platforms like Google, Meta, and LinkedIn",
              "To fulfil any contractual or legal obligations arising from your engagement with us",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#0097DC] mr-3 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Consent */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            4. Consent
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            In accordance with the DPDP Act, 2023, we process your personal
            data only upon obtaining your{" "}
            <strong>
              free, specific, informed, unconditional, and unambiguous consent
            </strong>
            . Consent must be given through a clear affirmative action (e.g.,
            ticking a checkbox or submitting a form). When you submit a form on
            our website or interact with our advertisements, you provide consent
            for us to process your data for the purposes stated above.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Notice Before Consent (Section 5, DPDP Act):</strong> Before
            or at the time of collecting your personal data, we will provide you
            with a clear notice specifying what data is being collected, the
            purpose of processing, how to exercise your rights, and how to file
            a complaint with the Data Protection Board of India. This notice will
            be available in English.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            <strong>Withdrawal of Consent:</strong> You may withdraw your
            consent at any time. Withdrawing consent must be as easy as giving
            it. To withdraw, contact us at{" "}
            <a
              href="mailto:jeevan@mukundmgmrealty.com"
              className="text-[#0097DC] underline"
            >
              jeevan@mukundmgmrealty.com
            </a>
            . Withdrawal of consent will not affect the lawfulness of processing
            carried out prior to such withdrawal. Upon withdrawal, we will cease
            to process your data for the stated purposes within a reasonable
            time, except where required by law.
          </p>
        </section>

        {/* 4A. Legitimate Uses Without Consent — Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            4A. Legitimate Uses of Personal Data (Section 7, DPDP Act)
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Under Section 7 of the DPDP Act, 2023, certain processing of
            personal data is permitted without explicit consent in the following
            legitimate circumstances:
          </p>
          <ul className="list-none space-y-3 text-base md:text-lg text-gray-700">
            {[
              "Where you have voluntarily provided your personal data for a specified purpose and have not indicated that you do not consent to its use",
              "Where processing is necessary to fulfil a legal obligation or comply with a court order or law",
              "Where processing is required to respond to a medical emergency or for providing health services",
              "Where processing is necessary to perform any function of the State",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#0097DC] mr-3 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Sharing of Information */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            5. Sharing of Information
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Vertex Workspace does not sell, rent, or exchange your personal
            data. Your information may be disclosed only to:
          </p>
          <ul className="list-none space-y-3 text-base md:text-lg text-gray-700 mb-4">
            {[
              "Authorised internal teams responsible for sales and customer support",
              "Reliable third-party service providers (Data Processors), including CRM tools, analytics platforms, and advertising partners — strictly for business purposes and bound by confidentiality obligations",
              "Legal or regulatory entities as mandated by applicable law or court order",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-[#0097DC] mr-3 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            All third-party Data Processors are contractually obligated to
            maintain the security and confidentiality of your information and
            are not permitted to use it for any purpose beyond what is specified
            by us.
          </p>
        </section>

        {/* 6. Cross-Border Transfer of Data — NEW */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            6. Cross-Border Transfer of Personal Data
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            In the course of providing our services, your personal data may be
            transferred to, stored, or processed in countries outside India,
            particularly in connection with third-party platforms such as Google,
            Meta, or LinkedIn that we use for advertising and analytics
            purposes. Such transfers are carried out in accordance with the
            DPDP Act, 2023, and only to countries or territories not restricted
            by the Central Government of India. We ensure that adequate
            safeguards are in place to protect your personal data during such
            transfers.
          </p>
        </section>

        {/* 7. Cookies and Tracking Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our website employs cookies and similar tracking technologies to
            improve user experience, analyse website traffic, and provide
            targeted advertisements. You have the option to disable cookies
            through your browser settings; however, certain features of the
            website may not operate correctly. Continued use of our website
            implies your acceptance of our use of cookies.
          </p>
        </section>

        {/* 8. Data Accuracy, Retention & Erasure — Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            8. Data Accuracy, Retention &amp; Erasure
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Accuracy (Section 8, DPDP Act):</strong> We are obligated
            to ensure that the personal data we process is accurate, complete,
            and consistent. If you become aware of any inaccuracies in the
            personal data we hold about you, please notify us immediately so we
            can correct it.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            <strong>Retention &amp; Erasure:</strong> We retain your personal
            data only for as long as is necessary to fulfil the purposes for
            which it was collected, or as required by applicable law. Once the
            purpose is fulfilled and the data is no longer required, we will
            erase or anonymise your personal data in a secure manner. If you
            withdraw consent or if the purpose ceases to exist, we will erase
            your data promptly unless retention is mandated by law.
          </p>
        </section>

        {/* 9. Data Security & Breach Notification */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            9. Data Security & Breach Notification
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Protecting your data is vital to us. We implement industry-standard
            encryption and security protocols (such as SSL/TLS) and reasonable
            security safeguards as required under the DPDP Act, 2023, to
            prevent unauthorised access, disclosure, alteration, or destruction
            of your personal data. Nonetheless, no method of transmission over
            the Internet is entirely secure.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            <strong>Breach Notification:</strong> In the event of a personal
            data breach, we will notify the affected Data Principals and the{" "}
            <strong>Data Protection Board of India</strong> within{" "}
            <strong>72 hours</strong> of becoming aware of the breach, as
            mandated under the Act. The notification will include the nature and
            extent of the breach, potential consequences for affected
            individuals, and the mitigation measures being undertaken.
          </p>
        </section>

        {/* 10. Children's Data — NEW */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            10. Processing of Children's Personal Data
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Our services and website are not directed at children (individuals
            below the age of 18 years). We do not knowingly collect personal
            data from any person under the age of 18.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            In accordance with the DPDP Act, 2023, if we become aware that
            personal data of a child has been collected without verifiable
            parental or guardian consent, we will promptly delete such data. We
            strictly prohibit the tracking or behavioural monitoring of children
            and will not direct targeted advertising at any person under 18
            years of age.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            If you believe that we have inadvertently collected personal data of
            a child, please contact us immediately at{" "}
            <a
              href="mailto:jeevan@mukundmgmrealty.com"
              className="text-[#0097DC] underline"
            >
              jeevan@mukundmgmrealty.com
            </a>
            .
          </p>
        </section>

        {/* 11. Rights of Data Principals */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            11. Your Rights as a Data Principal (DPDP Act, 2023)
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Under the Digital Personal Data Protection Act, 2023, you have the
            following rights as a Data Principal:
          </p>
          <ul className="list-none space-y-4 text-base md:text-lg text-gray-700">
            {[
              {
                title: "Right to Access Information (Section 11)",
                desc: "You have the right to obtain: (a) a summary of your personal data being processed by us; (b) the purposes for which it is processed; and (c) the identities of all other Data Fiduciaries and Data Processors with whom your personal data has been shared.",
              },
              {
                title: "Right to Correction, Completion & Erasure (Section 12)",
                desc: "You have the right to correct inaccurate or misleading personal data, request completion of incomplete data, and request erasure of personal data that is no longer necessary for the purpose for which it was collected.",
              },
              {
                title: "Right to Grievance Redressal (Section 13)",
                desc: "You have the right to have your grievances addressed by us in a timely manner. If unsatisfied, you may approach the Data Protection Board of India.",
              },
              {
                title: "Right to Nominate (Section 14)",
                desc: "You have the right to nominate another individual who shall exercise your rights in the event of your death or incapacity.",
              },
              {
                title: "Right to Withdraw Consent (Section 6)",
                desc: "You may withdraw your consent for processing your personal data at any time, without affecting the lawfulness of processing based on consent before its withdrawal.",
              },
            ].map(({ title, desc }) => (
              <li key={title} className="flex items-start">
                <span className="text-[#0097DC] mr-3 mt-1">●</span>
                <span>
                  <strong>{title}:</strong> {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
            To exercise any of the above rights, please contact our Grievance
            Officer at{" "}
            <a
              href="mailto:jeevan@mukundmgmrealty.com"
              className="text-[#0097DC] underline"
            >
              jeevan@mukundmgmrealty.com
            </a>
            .
          </p>
        </section>

        {/* 12. Grievance Redressal */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            12. Grievance Redressal
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            If you have any complaints or concerns regarding the processing of
            your personal data, you may contact our designated Grievance
            Officer:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-base md:text-lg text-gray-700 space-y-1 mb-4">
            <p>
              <strong>Grievance Officer:</strong> Legal Consultant
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jeevan@mukundmgmrealty.com"
                className="text-[#0097DC] underline"
              >
                jeevan@mukundmgmrealty.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> Vertex Workspace, Mangalore, Karnataka,
              India
            </p>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We will acknowledge and address your grievance within a reasonable
            timeframe. If you are dissatisfied with our resolution, you may
            approach the{" "}
            <strong>Data Protection Board of India</strong> for further
            redressal. Decisions of the Board may be appealed before the{" "}
            <strong>
              Telecom Disputes Settlement and Appellate Tribunal (TDSAT)
            </strong>
            .
          </p>
        </section>

        {/* 13. Changes to This Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a] mb-4">
            13. Changes to This Privacy Policy
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Vertex Workspace retains the right to revise or alter this Privacy
            Policy at any time to reflect changes in our practices or applicable
            law, including the DPDP Act and its Rules. Any amendments will take
            effect immediately upon being posted on this page. We encourage you
            to review this page periodically. Continued use of our services
            after any changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* Footer Note */}
        <div className="border-t border-gray-200 pt-6 mt-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            This Privacy Policy has been prepared in compliance with the{" "}
            <strong>
              Digital Personal Data Protection (DPDP) Act, 2023
            </strong>{" "}
            and the <strong>DPDP Rules, 2025</strong> of India. For any
            queries, please write to us at{" "}
            <a
              href="mailto:jeevan@mukundmgmrealty.com"
              className="text-[#0097DC] underline"
            >
              jeevan@mukundmgmrealty.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
