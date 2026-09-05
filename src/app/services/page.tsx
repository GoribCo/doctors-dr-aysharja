import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Services',
  description: `Orthopedic care with ${doctorName}, including fractures, joint pain, arthritis, sports injuries, spine care, and rehabilitation.`,
  }
}

export default function ServicesPage() {
  return <ServicesClient />
}
