import SolutionsSection from '@/components/coworkingSpaces/SolutionsSection'
import WorkspacesSection from '@/components/coworkingSpaces/WorkspacesSection'
import Footer from '@/components/sections/Footer'
import GetAQuoteSection from '@/components/sections/GetAQuoteSection'
import HeroSection from '@/components/sections/HeroSection'
import PrivateOffices from '@/components/sections/PrivateOffices'
import QuoteBanner from '@/components/sections/QuoteBanner'
import TestimonialSection from '@/components/sections/TestimonialSection'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      {/* 👇 Each section has an ID that matches the "to" in Navbar navLinks */}
      <section id="overview">
        <HeroSection />
      </section>

      <section>
        <SolutionsSection />
      </section>

      <section id="amenities">
        <WorkspacesSection />
      </section>

      <section>
        <TestimonialSection />
      </section>

      <section>
        <QuoteBanner />
      </section>

      <section id="pricing">
        <PrivateOffices />
      </section>

      <section id="locations">
        <GetAQuoteSection />
      </section>
      <Footer />
    </main>
  )
}

export default page