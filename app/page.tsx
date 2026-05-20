import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/landing/hero-section'
import WhatIsAISection from '@/components/landing/what-is-ai-section'
import AuthorsSection from '@/components/landing/authors-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhatIsAISection />
        <AuthorsSection />
      </main>
      <Footer />
    </div>
  )
}
