import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact details and clinic information.',
}

export default function ContactPage() {
  return (
    <ContentPage
      sectionKey="contact"
      title="Contact"
      description="Contact details and clinic information."
    />
  )
}
