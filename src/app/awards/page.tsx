import type { Metadata } from 'next'
import ContentPage from '@/components/ContentPage'

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description: 'Awards, honors, and recognition received',
}

export default function AwardsPage() {
  return <ContentPage 
    sectionKey="awards"
    title="Awards & Recognition"
    description="Awards, honors, and recognition received"
  />
}
