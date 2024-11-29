'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import PricingCard from '@/components/pricing/pricing-card'
import InfoBanner from '@/components/pricing/info-banner'
import { therapyOptions } from '@/data/therapy-options'

export default function PricingPage() {
  const [showInfo, setShowInfo] = useState(true)
  const [selectedDurations, setSelectedDurations] = useState<Record<string, number>>(
    Object.fromEntries(therapyOptions.map(option => [option.id, 60]))
  )

  const handleDurationSelect = (type: string, duration: number) => {
    setSelectedDurations(prev => ({
      ...prev,
      [type]: duration
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-500 p-4">
        <Link
          href="/"
          className="inline-flex items-center text-white hover:text-white/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
        <h1 className="text-center text-xl font-semibold text-white -mt-6">
          Available sessions
        </h1>
      </div>

      {/* Info Banner */}
      {showInfo && <InfoBanner onClose={() => setShowInfo(false)} />}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto mt-8">
        {therapyOptions.map(option => (
          <PricingCard
            key={option.id}
            title={option.title}
            price={option.price}
            selectedDuration={selectedDurations[option.id]}
            onDurationSelect={(duration) => handleDurationSelect(option.id, duration)}
            features={option.features}
          />
        ))}
      </div>
    </div>
  )
}
