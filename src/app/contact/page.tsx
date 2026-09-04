import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Contact',
  description: 'Contact details and clinic information.',
  }
}

export default function ContactPage() {
  return <ContactClient />
}
