'use client'

import { BadgeCheck, Share2 } from 'lucide-react'
import Image from "next/image"
import ShareModal from "../share-modal"
import { useState } from "react"
import Link from "next/link"

export default function ProfileCard() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="card relative overflow-hidden md:sticky md:top-0 h-[60vh] w-full">
        <button 
          className="text-gray-600 hover:text-[#22BBFF] transition-colors flex absolute top-2 right-2"
          onClick={() => setIsShareModalOpen(true)}
        >
          <Share2 className="h-5 w-5" />
        </button>
        <div className="h-full overflow-y-auto pr-2 flex flex-col items-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/doc2.jpg"
              alt="Profile"
              width={220}
              height={220}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-4">
              <button 
                className="text-gray-600 hover:text-[#22BBFF] transition-colors"
                onClick={() => setIsShareModalOpen(true)}
              >
                <Share2 className="h-5 w-5" />
              </button>
              <h1 className="text-2xl font-bold">Swetha Varma</h1>
              <BadgeCheck className="h-5 w-5 text-[#22BBFF]" />
            </div>
            
            <p className="text-gray-600 mt-3">Consultant Clinical Psychologist</p>
            <p className="text-sm text-gray-600 mt-3 font-extrabold">10+ Years of experience</p>
          </div>
          <div className="mb-2 text-center">
            <span className="font-semibold">Starts at ₹1,200</span>{" "}
            <span className="text-gray-500">/Sessions</span>
          </div>
          <div>
            <p>
              <span className="font-semibold h-3 w-3 mx-2">
              🗺️
              </span>
                Block A2, Delhi</p>
          </div>
        </div>
      </div>
      <Link href="/pricing" className="w-full">
        <button className="w-full py-3 px-4 bg-white text-[#22BBFF] rounded-lg font-semibold border-2 border-[#22BBFF] hover:bg-[#22BBFF] hover:text-white transition-all duration-300">
          Book session
        </button>
      </Link>
      <ShareModal open={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </div>
  )
}
