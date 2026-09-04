import type { Metadata } from 'next'
import {getSectionContent} from '@/lib/doctorContent'
import ProfileClient from './ProfileClient'

export const metadata: Metadata = {
  title: 'Professional Profile',
  description: 'Meet Dr. Aysharja Laxmi Podder and learn about her approach to patient care.',
}

export default function ProfilePage() {
  return <ProfileClient initialProfile={getSectionContent('profile.md', 'bn')} />
}
