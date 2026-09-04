import type { Metadata } from 'next'
import AppointmentClient from './AppointmentClient'

export const metadata: Metadata = {
  title: 'Appointment',
  description: 'Book an appointment by phone or contact the clinic directly.',
}

export default function AppointmentPage() {
  return <AppointmentClient />
}
