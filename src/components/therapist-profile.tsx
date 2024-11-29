'use client'

import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import ProfileCard from './profile/profile-card'
import AboutSection from './profile/about-section'
import CredentialsSection from './profile/credentials-section'
import AvailabilitySection from './profile/availability-section'
import TestimonialsSection from './profile/testimonials-section'

export default function TherapistProfile() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#22BBFF] p-3">
        <Link
          href="#"
          className="inline-flex items-center text-white hover:text-white/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[400px,1fr] h-[calc(100vh-64px)]">
        <div className="bg-[#22BBFF] h-full">
          <div className='flex justify-center items-center'>
          <ProfileCard />
          </div>
        </div>

        <div className="bg-white p-8 space-y-8 overflow-y-auto">
          <AboutSection />
          <CredentialsSection />
          <AvailabilitySection />
          <TestimonialsSection />
        </div>
      </div>
    </div>
  )
}