import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'

export const metadata: Metadata = {
  title: 'Appointment',
  description: 'Book an appointment by phone or contact the clinic directly.',
}

export default function AppointmentPage() {
  return (
    <ContentPage
      sectionKey="appointment"
      title="Appointment"
      description="Book an appointment by phone or contact the clinic directly."
    />
  )
}
