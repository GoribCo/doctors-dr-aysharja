import type { Metadata } from 'next'
import ReviewPageClient from './ReviewClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Patient Reviews',
  description: 'Patient feedback and reviews for Dr. Aysharja Laxmi Podder.',
}

export default function ReviewPage() {
  return <ReviewPageClient />
}
