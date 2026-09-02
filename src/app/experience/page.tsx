import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience and career history',
}

export default function ExperiencePage() {
  return <ContentPage 
    sectionKey="experience"
    title="Experience"
    description="Professional experience and career history"
  />
}
