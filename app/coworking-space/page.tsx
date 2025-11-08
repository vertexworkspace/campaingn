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
      <section id="overviewsco">
        <HeroSection title='Where Work' title2='Meets Community' description='Vertex offers flexible, inspiring work environments that fuel collaboration and growth.' />
      </section>

      <section>
        <SolutionsSection />
      </section>

      <section id="amenitiesco">
        <WorkspacesSection />
      </section>

      <section>
        <TestimonialSection />
      </section>

      <section>
        <QuoteBanner type='secondary'/>
      </section>

      <section id="pricingsco">
        <PrivateOffices title='Our Vertex Workspaces' description='Empower your business with an office space in the most sought after locations across the city.'/>
      </section>

      <section id="locationsco">
        <GetAQuoteSection />
      </section>
      <Footer />
    </main>
  )
}

export default page