import ThemeToggle from '@/components/ThemeToggle'
import SettingsClient from './SettingsClient'
import type { Metadata } from 'next'
import { getDoctorName } from '@/lib/doctorContent'

export const dynamic = 'force-static'

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  return {
  title: 'Settings',
  description: `Customize your ${doctorName} profile experience.`,
  }
}

export default function SettingsPage() {
  return (
    <div className="px-6 pb-28 lg:pb-10 pt-6 max-w-3xl mx-auto lg:mx-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <ThemeToggle />
      </div>

      <SettingsClient />

      {/* Website inquiry */}
      <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/30">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Want a website like this?
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Get in touch to create a polished website for your practice or business.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:sdiptapaik@gmail.com?subject=Website%20Development%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20create%20a%20website%20like%20this.%20Please%20share%20more%20details.%0A%0AThank%20you."
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Email sdiptapaik@gmail.com
          </a>
          <a
            href="tel:+8801719100070"
            className="rounded-xl border border-indigo-200 px-4 py-2.5 text-center text-sm font-medium text-indigo-700 transition-colors hover:bg-white dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-gray-800"
          >
            Call +880 1719 100070
          </a>
        </div>
      </section>

      {/* Built with */}
      <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
        Built with Next.js 15 · Tailwind CSS v4
        <br />
        Content served from Markdown · No database
      </div>
    </div>
  )
}
