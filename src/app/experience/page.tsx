import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Experience',
  description: 'Professional experience and career history',
  }
}

export default function ExperiencePage() {
  return <ContentPage 
    sectionKey="experience"
    title="Experience"
  />
}
