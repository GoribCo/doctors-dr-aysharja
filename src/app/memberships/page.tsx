import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'

export const metadata: Metadata = {
  title: 'Memberships',
  description: 'Professional memberships and associations',
}

export default function MembershipsPage() {
  return <ContentPage 
    sectionKey="memberships"
    title="Memberships"
  />
}
