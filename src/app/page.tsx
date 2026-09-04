import { getAllDoctorContent } from '@/lib/doctorContent'
import HomeClient from './HomeClient'
import type { Metadata } from 'next'
import config from '@/config'
import { getDoctorName, getSiteSettings } from '@/lib/doctorContent'

export const dynamic = 'force-static'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  const site = getSiteSettings()
  return {
  title: `${doctorName} - Professional Profile`,
  description: site.seo?.defaultDescription,
  }
}

export default function HomePage() {
  // Load content in default language (bn) - will be dynamically loaded on client
  const doctorContent = getAllDoctorContent('bn')

  return <HomeClient doctorContent={doctorContent} config={config} />
}
