'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PaymentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+91',
    isEmployerReferred: false,
    companyName: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the payment processing
    router.push('/booking/confirmation')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[580px] mx-auto bg-white rounded-[32px] shadow-sm overflow-hidden">
        {/* Price Header */}
        <div className="bg-[#22BBFF] p-6 text-right">
          <span className="text-[32px] text-white font-medium">₹ 2,400/-</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#22BBFF]"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#22BBFF]"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#22BBFF]"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="space-y-1">
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#22BBFF]"
                required
              />
            </div>
            <p className="text-gray-500 text-sm italic">
              i. You will receive booking details on WhatsApp
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-medium">Have you been referred by your employer ?</p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({...formData, isEmployerReferred: !formData.isEmployerReferred})}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg transition-colors",
                  formData.isEmployerReferred 
                    ? "bg-[#22BBFF] text-white" 
                    : "bg-white border border-gray-300"
                )}
              >
                <Check className="w-5 h-5" />
                <span>Yes, I am employed under a partnering company</span>
              </button>
            </div>
            {formData.isEmployerReferred && (
              <input
                type="text"
                placeholder="Partnering Company Name or Company ID"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#22BBFF]"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#D9D9D9] text-white py-4 rounded-lg text-xl font-medium hover:bg-gray-400 transition-colors mt-8"
          >
            Book session
          </button>
        </form>
      </div>
    </div>
  )
}
