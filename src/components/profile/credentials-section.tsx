import { BadgeCheck, Building2, GraduationCap } from 'lucide-react'

export default function CredentialsSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold">Credentials</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <GraduationCap className="h-5 w-5 text-blue-500" />
          <div>
            <p className="font-medium">Ph.D. in Clinical Psychology</p>
            <p className="text-gray-600">Harvard University</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <GraduationCap className="h-5 w-5 text-blue-500" />
          <div>
            <p className="font-medium">M.A. in Counseling</p>
            <p className="text-gray-600">University of California, Berkeley</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <BadgeCheck className="h-5 w-5 text-blue-500" />
          <div>
            <p className="font-medium">Licensed Professional Counselor (LPC)</p>
            <p className="text-gray-600">State of DEF</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <BadgeCheck className="h-5 w-5 text-blue-500" />
          <div>
            <p className="font-medium">Certified Cognitive Behavioral Therapist (CBT)</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Building2 className="h-5 w-5 text-blue-500" />
          <div>
            <p className="font-medium">Member, American Psychological Association (APA)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
