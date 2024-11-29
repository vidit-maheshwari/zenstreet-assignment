'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "The guidance I received helped me manage my stress and live a more balanced life.",
    author: "Anonymous"
  },
  {
    quote: "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous"
  },
  {
    quote: "I learned valuable coping mechanisms that have transformed my daily life.",
    author: "Anonymous"
  },
  {
    quote: "The personalized approach helped me overcome challenges I've struggled with for years.",
    author: "Anonymous"
  }
]

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg">
      <div className="absolute -top-2 left-4 text-8xl leading-none text-[#22BBFF]/10 font-serif select-none z-0"><span className="text-[#22BBFF]">“</span></div>
      <div className="relative z-10 pl-4 pt-4">
        <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
          {quote}
        </blockquote>
        <footer className="text-gray-500">{author}</footer>
      </div>
    </div>
  )
}

function TestimonialSkeleton() {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="pt-4">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedTestimonials, setLoadedTestimonials] = useState<typeof testimonials>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedTestimonials(testimonials)
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const visibleTestimonials = showAllTestimonials ? loadedTestimonials : loadedTestimonials.slice(0, 2)

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading
          ? Array(2).fill(0).map((_, i) => <TestimonialSkeleton key={i} />)
          : visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
      </div>
      {loadedTestimonials.length > 2 && (
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAllTestimonials(!showAllTestimonials)}
          >
            {showAllTestimonials ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </section>
  )
}
