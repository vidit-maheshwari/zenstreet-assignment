'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

const fullDescription = `Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices. My approach combines cognitive behavioral therapy, mindfulness techniques, and solution-focused strategies to create a supportive environment where clients can explore their concerns and work towards meaningful change. I believe in creating a safe, non-judgmental space where you can feel comfortable sharing your thoughts and feelings.`

export default function AboutSection() {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold">About me</h2>
      <p className="text-gray-600">
        {showFullDescription ? fullDescription : `${fullDescription.slice(0, 200)}...`}
      </p>
      <Button 
        variant="link" 
        className="h-auto p-0 text-blue-500"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        {showFullDescription ? 'Read less' : 'Read more'}
      </Button>
    </section>
  )
}
