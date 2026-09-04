import type { Metadata } from 'next'
import AppointmentClient from './AppointmentClient'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Appointment',
  description: 'Book an appointment by phone or contact the clinic directly.',
  }
}

export default function AppointmentPage() {
  return <AppointmentClient />
}
