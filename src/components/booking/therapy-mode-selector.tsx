'use client'

import { Home, Phone, Video } from 'lucide-react'
import { cn } from '@/lib/utils'

export type TherapyMode = 'in-person' | 'video' | 'call'

interface TherapyModeSelectorProps {
  selectedMode: TherapyMode
  onModeSelect: (mode: TherapyMode) => void
}

const therapyModes = [
  { id: 'in-person', icon: Home, label: 'In-person' },
  { id: 'video', icon: Video, label: 'Video' },
  { id: 'call', icon: Phone, label: 'Call' },
]

export function TherapyModeSelector({ selectedMode, onModeSelect }: TherapyModeSelectorProps) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
      {therapyModes.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onModeSelect(id as TherapyMode)}
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
  )
}
