import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Services',
  description: 'Medical services and specialised care offered.',
  }
}

export default function ServicesPage() {
  return <ServicesClient />
}
