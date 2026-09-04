import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Medical services and specialised care offered.',
}

export default function ServicesPage() {
  return <ServicesClient />
}
