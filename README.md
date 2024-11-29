# ZenStreet - Therapist Booking Platform

A modern web application for booking therapy sessions, built with Next.js 13+ and Tailwind CSS.

## 🚀 Features

- Modern, responsive UI with beautiful animations
- Therapist profile viewing
- Session booking system
- Multiple therapy modes (In-person, Video, Call)
- Interactive calendar for slot selection
- Client testimonials
- Pricing plans
- Booking confirmation system

## 🛠️ Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** 
  - Shadcn/ui
  - Lucide React Icons
- **State Management:** React Hooks (useState)
- **Routing:** Next.js App Router
- **Type Checking:** TypeScript

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── booking/           # Booking flow pages
│   ├── payment/           # Payment pages
│   ├── pricing/           # Pricing pages
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── booking/          # Booking-related components
│   ├── profile/          # Profile-related components
│   ├── ui/               # UI components
│   └── share-modal.tsx   # Share functionality
└── lib/                  # Utility functions
```

## 🔗 Navigation Flow

1. Home Page (`/`)
   - View therapist profile
   - Access booking button

2. Pricing Page (`/pricing`)
   - View different pricing plans
   - Select plan duration
   - Proceed to booking

3. Booking Flow
   - Select therapy mode (`/booking`)
   - Choose date and time
   - Fill details
   - Payment (`/payment`)
   - Confirmation (`/booking/confirmation`)

## 🎨 Design System

- **Primary Color:** #22BBFF
- **Border Radius:** 32px (rounded-2xl)
- **Typography:** System fonts
- **Components:** Consistent padding and spacing
- **Animations:** Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3",
    "lucide-react": "latest",
    "@radix-ui/react-dialog": "latest",
    "class-variance-authority": "latest"
  }
}
```

## 🔧 Environment Setup

No environment variables are required to run this project locally.

## 🌟 Key Components

1. **TherapistProfile**
   - Main profile display
   - Professional information
   - Booking button

2. **BookingPage**
   - Therapy mode selection
   - Calendar integration
   - Time slot selection

3. **PricingCard**
   - Dynamic pricing display
   - Duration selection
   - Proceed to booking

4. **TestimonialsSection**
   - Client reviews
   - Rating display
   - Testimonial cards

## 🔒 Security Considerations

- Form validation implemented
- No sensitive data stored client-side
- Secure routing implementation

## 🎯 Future Improvements

- Backend integration
- Authentication system
- Payment gateway integration
- Real-time availability updates
- Session management
- Email notifications

## 📝 Notes

- This is a frontend-only implementation
- Uses static data for demonstration
- Optimized for modern browsers
