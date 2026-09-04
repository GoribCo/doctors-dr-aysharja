import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'
import config from '@/config'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Qualifications',
  description: 'Professional qualifications and credentials',
  }
}

export default function QualificationsPage() {
  return <ContentPage 
    sectionKey="qualifications"
    title="Qualifications"
  />
}
