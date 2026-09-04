import type { Metadata } from 'next'
import {getSectionContent} from '@/lib/doctorContent'
import ProfileClient from './ProfileClient'
import { getDoctorName } from '@/lib/doctorContent'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Professional Profile',
  description: `Meet ${doctorName} and learn about her approach to patient care.`,
  }
}

export default function ProfilePage() {
  return <ProfileClient initialProfile={getSectionContent('profile.md', 'bn')} />
}
