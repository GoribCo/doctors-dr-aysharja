import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'
import config from '@/config'

export const metadata: Metadata = {
  title: 'Qualifications',
  description: 'Professional qualifications and credentials',
}

export default function QualificationsPage() {
  return <ContentPage 
    sectionKey="qualifications"
    title="Qualifications"
    description="Professional qualifications and credentials"
  />
}
