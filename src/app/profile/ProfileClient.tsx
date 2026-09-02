'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import ThemeToggle from '@/components/ThemeToggle'
import { useDoctorContent } from '@/hooks/useDoctorContent'
import { useContentLanguage } from '@/components/ContentLanguageProvider'
import type { DoctorSection } from '@/lib/doctorContent'

const detailSections = [
  ['about', 'About'],
  ['profile', 'Profile'],
  ['speciality', 'Speciality'],
  ['subSpeciality', 'Sub-speciality'],
  ['qualifications', 'Qualifications'],
  ['experience', 'Experience'],
  ['languages', 'Languages'],
  ['memberships', 'Memberships'],
  ['awards', 'Awards'],
  ['publications', 'Publications'],
] as const

function MarkdownSection({ section }: { section: DoctorSection | null }) {
  if (!section || !section.isVisible) return null

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-gray-800">
      <h2 className="mb-4 border-b border-slate-100 pb-3 text-xl font-bold text-slate-900 dark:border-slate-700 dark:text-white">
        {section.title}
      </h2>
      <div className="prose max-w-none dark:prose-invert">
        <ReactMarkdown>{section.content}</ReactMarkdown>
      </div>
    </section>
  )
}

export default function ProfileClient() {
  const { lang } = useContentLanguage()
  const { content, isLoading, error } = useDoctorContent(lang)

  return (
    <div className="px-6 pb-28 pt-6 lg:pb-10">
      {isLoading && <p className="text-slate-600 dark:text-slate-300">Loading profile...</p>}
      {error && <p className="text-slate-600 dark:text-slate-300">This profile could not be loaded.</p>}
      {content && !isLoading && !error && (
        <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {detailSections.map(([key]) => (
            <MarkdownSection key={key} section={content[key]} />
          ))}
        </div>
      )}
    </div>
  )
}
