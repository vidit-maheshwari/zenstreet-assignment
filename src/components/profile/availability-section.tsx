'use client'

import { Phone, Video } from 'lucide-react'
import Link from 'next/link'

export default function AvailabilitySection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold">Available on</h2>
      <div className="flex gap-4">
        <Link href="/pricing">
          <div className="flex flex-col items-center rounded-lg bg-blue-50 p-4 cursor-pointer hover:bg-blue-100 transition-colors">
            <Video className="mb-2 h-6 w-6 text-blue-500" />
            <span className="text-sm">Video call</span>
          </div>
        </Link>
        <Link href="/pricing">
          <div className="flex flex-col items-center rounded-lg bg-blue-50 p-4 cursor-pointer hover:bg-blue-100 transition-colors">
            <Phone className="mb-2 h-6 w-6 text-blue-500" />
            <span className="text-sm">Voice call</span>
          </div>
        </Link>
      </div>
    </section>
  )
}
