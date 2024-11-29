'use client'

import { useRouter } from 'next/navigation'

export default function ConfirmationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-[580px] w-full space-y-6 text-center">
        <h1 className="text-[40px] font-semibold">
          Booking Confirmed!
        </h1>
        
        <p className="text-gray-600 text-lg">
          Congratulations! Your therapy session has been successfully scheduled. We're
          looking forward to helping you on your journey to better mental health.
        </p>

        <div className="mt-12 space-y-6">
          <div className="space-y-4">
            <ul className="space-y-4 text-left">
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  A confirmation email with all the session details has been sent to{' '}
                  <span className="text-[#22BBFF]">amal123@gmail.com</span>
                </span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  If this is your first session, consider jotting down any key points or questions
                  you want to discuss.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => router.push('/')}
          className="w-full bg-[#22BBFF] text-white py-4 rounded-lg text-lg font-medium hover:bg-[#1da7e8] transition-colors mt-12"
        >
          Back to home
        </button>
      </div>
    </div>
  )
}
