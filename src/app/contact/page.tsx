import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact details and clinic information.',
}

export default function ContactPage() {
  return <ContactClient />
}
