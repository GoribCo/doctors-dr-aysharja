import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Published research and articles',
}

export default function PublicationsPage() {
  return <ContentPage 
    sectionKey="publications"
    title="Publications"
    description="Published research and articles"
  />
}
