import { PageHeroSection } from '@/components/sections/page-hero-section'
import React from 'react'

const page = () => {
  return (
    <main className="relative min-h-screen">
      <PageHeroSection
        eyebrow="CASE STUDIES"
        title="Our work speaks for itself."
        description="See how we've helped companies like FinFlow, OpsGrid, and MetricLane transform their operations with AI."
      />
    </main>
  )
}

export default page