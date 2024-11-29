'use client'

import { cn } from '@/lib/utils'

export type TimeSlot = {
  time: string
  period: 'Morning' | 'Afternoon' | 'Evening'
}

interface TimeSlotsProps {
  timeSlots: TimeSlot[]
  selectedSlots: string[]
  onSlotSelect: (time: string) => void
}

export function TimeSlots({ timeSlots, selectedSlots, onSlotSelect }: TimeSlotsProps) {
  return (
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
                  onClick={() => onSlotSelect(time)}
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
  )
}
