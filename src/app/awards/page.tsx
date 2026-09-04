import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Awards & Recognition',
  description: 'Awards, honors, and recognition received',
  }
}

export default function AwardsPage() {
  return <ContentPage 
    sectionKey="awards"
    title="Awards & Recognition"
  />
}
