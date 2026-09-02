import type { Metadata } from 'next'
import ProfileClient from './ProfileClient'

export const metadata: Metadata = {
  title: 'Professional Profile',
  description: 'Qualifications, experience, services, and clinic information for Dr. Aysharja Laxmi Podder.',
}

export default function ProfilePage() {
  return <ProfileClient />
}
