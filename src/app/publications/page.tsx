import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Publications',
  description: 'Published research and articles',
  }
}

export default function PublicationsPage() {
  return <ContentPage 
    sectionKey="publications"
    title="Publications"
    description="Published research and articles"
  />
}
