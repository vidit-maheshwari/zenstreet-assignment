'use client'

import { X } from 'lucide-react'

interface InfoBannerProps {
  onClose: () => void
}

export default function InfoBanner({ onClose }: InfoBannerProps) {
  return (
    <div className="bg-blue-100 p-4 relative mx-4 mt-4 rounded-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0 text-blue-500 mt-1">
          {/* <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg> */}
        </div>
        <p className="ml-3 text-sm text-blue-700">
          Click on the duration to see the pricing details
        </p>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-blue-500 hover:text-blue-600"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
