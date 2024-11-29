'use client'

import { ArrowLeft, Home, Phone, Video } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/booking/calendar'
import { useRouter } from 'next/navigation'

type TherapyMode = 'in-person' | 'video' | 'call'
type TimeSlot = {
  time: string
  period: 'Morning' | 'Afternoon' | 'Evening'
}

const timeSlots: TimeSlot[] = [
  { time: '8:00 - 8:45 AM', period: 'Morning' },
  { time: '9:00 - 9:45 AM', period: 'Morning' },
  { time: '11:00 - 11:45 AM', period: 'Morning' },
  { time: '11:00 - 11:45 AM', period: 'Morning' },
  { time: '12:00 - 12:45 PM', period: 'Afternoon' },
  { time: '2:00 - 2:45 PM', period: 'Afternoon' },
  { time: '3:00 - 3:45 PM', period: 'Afternoon' },
  { time: '4:00 - 4:45 PM', period: 'Afternoon' },
  { time: '5:00 - 5:45 PM', period: 'Evening' },
  { time: '6:00 - 6:45 PM', period: 'Evening' },
  { time: '7:00 - 7:45 PM', period: 'Evening' },
  { time: '8:00 - 8:45 PM', period: 'Evening' },
]

export default function BookingPage() {
  'use client'
  const router = useRouter()
  const [selectedMode, setSelectedMode] = useState<TherapyMode>('in-person')
  const [selectedSlots, setSelectedSlots] = useState<string[]>([])
  const [filterType, setFilterType] = useState<'slots' | 'date'>('slots')
  const [selectedDate, setSelectedDate] = useState<Date>()

  const therapyModes = [
    { id: 'in-person', icon: Home, label: 'In-person' },
    { id: 'video', icon: Video, label: 'Video' },
    { id: 'call', icon: Phone, label: 'Call' },
  ]

  const handleSlotSelect = (time: string) => {
    setSelectedSlots(prev => 
      prev.includes(time) 
        ? prev.filter(t => t !== time)
        : [...prev, time]
    )
  }

  const handleProceed = () => {
    router.push('/payment')
  }

  const canProceed = selectedMode && (
    (filterType === 'slots' && selectedSlots.length > 0) ||
    (filterType === 'date' && selectedDate)
  )

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="max-w-2xl mx-auto px-4">
          <Link
            href="/pricing"
            className="inline-flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
          <h1 className="text-center text-lg font-medium text-gray-900 -mt-6">
            Select therapy mode
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {/* Therapy Mode Selection */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {therapyModes.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setSelectedMode(id as TherapyMode)}
              className={cn(
                "flex flex-col items-center justify-center p-6 rounded-lg transition-colors",
                selectedMode === id 
                  ? "bg-[#22BBFF] text-white" 
                  : "bg-white text-gray-600 border border-gray-200"
              )}
            >
              <Icon className="h-6 w-6 mb-2" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>

        {/* Location */}
        {selectedMode === 'in-person' && (
          <div className="flex items-center justify-center gap-2 text-gray-600 mt-4">
            <Home className="h-4 w-4" />
            <span className="text-sm">3rd Floor, A2, 35, Block A2, Delhi</span>
          </div>
        )}

        {/* Filter Section */}
        <div className="mt-12">
          <h2 className="text-base font-medium mb-6 text-center">Filter by</h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilterType('slots')}
              className={cn(
                "px-8 py-2 rounded-full text-sm transition-colors",
                filterType === 'slots'
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600"
              )}
            >
              Slots
            </button>
            <button
              onClick={() => setFilterType('date')}
              className={cn(
                "px-8 py-2 rounded-full text-sm transition-colors",
                filterType === 'date'
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600"
              )}
            >
              Date
            </button>
          </div>
        </div>

        {filterType === 'slots' && (
          <div className="mt-6">
            <div className="space-y-12">

              
              {/* Time Slots */}
              <div className="space-y-8">
                <h2 className="text-xl font-medium">Select slots</h2>
                {['Morning', 'Afternoon', 'Evening'].map((period) => (
                  <div key={period} className="space-y-3">
                    <h3 className="text-gray-600 text-sm font-medium">{period}</h3>
                    <div className="flex flex-wrap gap-3">
                      {timeSlots
                        .filter(slot => slot.period === period)
                        .map(({ time }, index) => (
                          <button
                            key={`${time}-${index}`}
                            onClick={() => handleSlotSelect(time)}
                            className={cn(
                              "py-2 px-4 rounded-full text-sm border transition-colors whitespace-nowrap hover:bg-gray-50",
                              selectedSlots.includes(time)
                                ? "border-[#22BBFF] bg-[#22BBFF]/10 text-[#22BBFF]"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>


              {/* Calendar Section */}
              <div className="flex justify-center">
                <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium">Available date</span>
                    <span className="text-sm">2024 Aug</span>
                  </div>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {filterType === 'date' && (
          <div className="mt-6">
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium">Available date</span>
                <span className="text-sm">2024 Aug</span>
              </div>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/* Proceed Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleProceed}
            className={cn(
              "w-full py-4 rounded-lg text-white text-lg font-medium transition-colors",
              canProceed
                ? "bg-[#22BBFF] hover:bg-[#22BBFF]/90"
                : "bg-gray-300 cursor-not-allowed"
            )}
            disabled={!canProceed}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  )
}
