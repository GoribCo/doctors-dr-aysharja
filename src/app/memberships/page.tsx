import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Memberships',
  description: 'Professional memberships and associations',
  }
}

export default function MembershipsPage() {
  return <ContentPage 
    sectionKey="memberships"
    title="Memberships"
  />
}
