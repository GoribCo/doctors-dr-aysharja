import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Medical services and specialised care offered.',
}

export default function ServicesPage() {
  return (
    <ContentPage
      sectionKey="services"
      title="Services"
      description="Medical services and specialised care offered."
    />
  )
}
