'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { useUiLang } from '@/components/UiLanguageProvider'
import { useContentLanguage } from '@/components/ContentLanguageProvider'
import { useSpeciality } from '@/components/SpecialityProvider'
import ThemeToggle from '@/components/ThemeToggle'
import { useDoctorContent } from '@/hooks/useDoctorContent'
import type { DoctorSection } from '@/lib/doctorContent'

interface ContentPageProps {
  sectionKey: string
  title: string
  description?: string
}

export default function ContentPage({ sectionKey, title, description }: ContentPageProps) {
  const { t } = useUiLang()
  const { lang: contentLang } = useContentLanguage()
  const { speciality, theme } = useSpeciality()
  const { content: data, isLoading, error } = useDoctorContent(contentLang)

  const section: DoctorSection | null = data?.[sectionKey] || null

  if (isLoading) {
    return (
      <div className="px-6 pb-28 lg:pb-10 pt-6 max-w-3xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !section || !section.isVisible) {
    return (
      <div className="px-6 pb-28 lg:pb-10 pt-6 max-w-3xl mx-auto">
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">This section is not yet available.</p>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 pb-28 lg:pb-10 pt-6 max-w-3xl mx-auto lg:mx-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 lg:mb-10">
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {title}
          </h1>
        </div>
        <ThemeToggle />
      </div>

      {/* Content */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 lg:p-10">
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 text-base lg:text-lg">
            {description}
          </p>
        )}
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{section.content}</ReactMarkdown>
        </div>
      </section>
    </div>
  )
}
