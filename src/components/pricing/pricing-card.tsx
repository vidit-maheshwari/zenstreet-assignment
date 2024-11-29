'use client'

import Link from "next/link"

interface PricingCardProps {
  title: string
  price: number
  selectedDuration: number
  onDurationSelect: (duration: number) => void
  features: string[]
}

export default function PricingCard({
  title,
  price,
  selectedDuration,
  onDurationSelect,
  features
}: PricingCardProps) {
  const durations = [45, 60, 90]

  return (
    <div className="bg-[#22BBFF] rounded-2xl p-6 text-white">
      <div className="mb-6">
        <div className="text-3xl font-bold flex items-center">
          ₹{price.toLocaleString()}
          <span className="text-sm ml-1 font-normal">/ session</span>
        </div>
        <div className="flex gap-2 mt-4">
          {durations.map((duration) => (
            <button
              key={duration}
              onClick={() => onDurationSelect(duration)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedDuration === duration
                  ? 'bg-white text-[#22BBFF]'
                  : 'bg-[#22BBFF]'
              }`}
            >
              {duration} min
            </button>
          ))}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-white text-[#22BBFF] rounded-full py-2 font-semibold hover:bg-blue-50 transition-colors">
        <Link href="/booking">Proceed</Link>
      </button>
    </div>
  )
}
