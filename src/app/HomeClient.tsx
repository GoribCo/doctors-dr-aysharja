'use client'

import React, { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import ReactMarkdown from 'react-markdown'
import type { DoctorSection, DoctorService } from '@/lib/doctorContent'
import { useUiLang } from '@/components/UiLanguageProvider'
import { useContentLanguage } from '@/components/ContentLanguageProvider'
import { useSpeciality } from '@/components/SpecialityProvider'
import { useDoctorContent } from '@/hooks/useDoctorContent'
import { getAppointmentAction } from '@/lib/appointment'

interface Props {
  doctorContent: any
  config: any
}

function MarkdownSection({ section }: { section: DoctorSection | null }) {
  if (!section || !section.isVisible) return null
  
  return (
    <section className="mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
        {section.title}
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{section.content}</ReactMarkdown>
      </div>
    </section>
  )
}

export default function HomeClient({ doctorContent: initialContent, config }: Props) {
  const { doctor } = config
  const { t } = useUiLang()
  const { lang: contentLang } = useContentLanguage()
  const { speciality, theme } = useSpeciality()
  const { content: fetchedContent, isLoading, error } = useDoctorContent(contentLang)
  const [doctorContent, setDoctorContent] = useState(initialContent)
  const [activeProfileIndex, setActiveProfileIndex] = useState(0)
  const appointmentAction = getAppointmentAction(doctor.appointment)
  const mobileStickyAction = appointmentAction.primaryHref || appointmentAction.secondaryHref

  const profileImages = [
    '/profile-images/image1.jpg',
    '/profile-images/image2.jpg',
  ].filter(Boolean)

  useEffect(() => {
    if (profileImages.length < 2) return

    const timer = setInterval(() => {
      setActiveProfileIndex(prev => (prev + 1) % profileImages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [profileImages.length])

  useEffect(() => {
    if (contentLang === 'bn') {
      setDoctorContent(initialContent)
    } else if (fetchedContent && !isLoading) {
      setDoctorContent(fetchedContent)
    }
  }, [contentLang, fetchedContent, isLoading, initialContent])

  return (
    <div className="px-6 pb-28 lg:pb-12 pt-6 max-w-5xl mx-auto lg:mx-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 lg:mb-10">
        <div className="flex items-center gap-2 lg:hidden">
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">RxProfile</span>
        </div>
        <h1 className="hidden lg:block text-2xl font-bold text-gray-900 dark:text-white">
          {doctor.name}
        </h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 lg:hidden"
            aria-label="Call doctor"
            onClick={() => appointmentAction.secondaryHref && (window.location.href = appointmentAction.secondaryHref)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="mb-12 relative overflow-hidden rounded-[2.5rem] p-8 lg:p-10 xl:p-12 border shadow-sm lg:shadow-md"
        style={{
          background: speciality 
            ? `linear-gradient(to bottom right, ${theme.secondary} 0%, rgba(255,255,255,0.3) 100%)`
            : 'linear-gradient(to bottom right, rgb(240, 249, 255) 0%, rgba(226, 232, 240, 0.3) 100%)',
          borderColor: speciality ? `${theme.secondary}99` : 'rgb(203, 213, 225)',
        }}
      >
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full blur-3xl"
          style={{
            backgroundColor: speciality ? `${theme.primary}08` : 'rgb(59, 130, 246, 0.05)',
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full blur-3xl"
          style={{
            backgroundColor: speciality ? `${theme.primary}08` : 'rgb(20, 184, 166, 0.05)',
          }}
        ></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12">
          {/* Image */}
          <div 
            className="w-44 h-[18rem] lg:w-60 lg:h-[27rem] rounded-[1.75rem] bg-white dark:bg-slate-800 overflow-hidden shrink-0 border-4 shadow-xl relative group lg:shadow-2xl"
            style={{
              borderColor: speciality ? theme.primary : 'white',
            }}
          >
            {profileImages.length > 0 ? (
              <div className="relative h-full w-full">
                {profileImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${doctor.name} profile ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${index === activeProfileIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
            )}
            <div className="absolute inset-0 rounded-[1.75rem] shadow-inner pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center lg:max-w-2xl">
            <div className="mb-3 inline-flex items-center self-start rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
              Trusted medical care
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
              {doctor.name}
            </h2>
            
            <div className="flex flex-col gap-1 mb-6">
              {doctor.professionalTitle && doctor.professionalTitle !== 'TODO' && (
                <p 
                  className="text-lg lg:text-xl font-semibold"
                  style={{ color: speciality ? theme.primary : '#2563eb' }}
                >
                  {doctor.professionalTitle}
                </p>
              )}
              {doctor.speciality && doctor.speciality !== 'TODO' && (
                <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">
                  {doctor.speciality}
                </p>
              )}
              {/* @ts-ignore: Qualification might be added to the config later */}
              {doctor.qualification && doctor.qualification !== 'TODO' && (
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  {/* @ts-ignore */}
                  {doctor.qualification}
                </p>
              )}
            </div>

            {/* Short Introduction (if available in config) */}
            {/* @ts-ignore: shortIntroduction might be added to the config later */}
            {doctor.shortIntroduction && doctor.shortIntroduction !== 'TODO' && (
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl leading-relaxed text-lg">
                {/* @ts-ignore */}
                {doctor.shortIntroduction}
              </p>
            )}

            {/* CTAs */}
            {appointmentAction.type !== 'none' && (
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-1">
                {appointmentAction.primaryHref && (
                  <a
                    href={appointmentAction.primaryHref}
                    target={appointmentAction.type === 'external' ? '_blank' : undefined}
                    rel={appointmentAction.type === 'external' ? 'noopener noreferrer' : undefined}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900"
                    style={{
                      backgroundColor: speciality ? theme.primary : '#2563eb',
                      borderColor: speciality ? theme.primary : '#2563eb',
                    }}
                  >
                    {appointmentAction.primaryLabel}
                  </a>
                )}
                {appointmentAction.secondaryHref && (
                  <a
                    href={appointmentAction.secondaryHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl transition-all shadow-sm hover:shadow focus:outline-none focus:ring-4 focus:ring-slate-100 dark:focus:ring-slate-800 gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    {appointmentAction.secondaryLabel}
                    {appointmentAction.phone ? ` ${appointmentAction.phone}` : ''}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {mobileStickyAction && (
        <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 px-4 pb-2">
          <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
            {appointmentAction.primaryHref && (
              <a
                href={appointmentAction.primaryHref}
                target={appointmentAction.type === 'external' ? '_blank' : undefined}
                rel={appointmentAction.type === 'external' ? 'noopener noreferrer' : undefined}
                className="flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: speciality ? theme.primary : '#2563eb' }}
              >
                {appointmentAction.primaryLabel}
              </a>
            )}
            {appointmentAction.secondaryHref && (
              <a
                href={appointmentAction.secondaryHref}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {appointmentAction.secondaryLabel}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Profile & About Sections (Grid Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8">
        <div className="md:col-span-2">
          <MarkdownSection section={doctorContent.about} />
          <MarkdownSection section={doctorContent.profile} />
        </div>
        <div className="flex flex-col">
          <MarkdownSection section={doctorContent.speciality} />
          <MarkdownSection section={doctorContent.subSpeciality} />
          <MarkdownSection section={doctorContent.languages} />
        </div>
      </div>

      {/* More Information Links */}
      <section className="mb-12 lg:mb-14">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
          More Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {doctorContent.qualifications?.isVisible && (
            <a
              href="/qualifications"
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">📜 Qualifications</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Professional qualifications and credentials</p>
            </a>
          )}
          {doctorContent.experience?.isVisible && (
            <a
              href="/experience"
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">💼 Experience</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Professional experience and career history</p>
            </a>
          )}
          {doctorContent.memberships?.isVisible && (
            <a
              href="/memberships"
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">🤝 Memberships</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Professional associations and memberships</p>
            </a>
          )}
          {doctorContent.awards?.isVisible && (
            <a
              href="/awards"
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">🏆 Awards</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Awards and recognition received</p>
            </a>
          )}
          {doctorContent.publications?.isVisible && (
            <a
              href="/publications"
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">📚 Publications</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Published research and articles</p>
            </a>
          )}
        </div>
      </section>

      {/* Services / Expertise */}
      {doctorContent.servicesList && doctorContent.servicesList.length > 0 && (
        <div className="mb-12 lg:mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
            Services & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {doctorContent.servicesList.map((service: DoctorService) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-3">
                  {service.image ? (
                     <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-700 shadow-sm">
                       <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                     </div>
                  ) : service.icon ? (
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      {/* Using a generic star/plus icon if no specific image is provided, can be replaced with a dynamic icon library later */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                  ) : null}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{service.title}</h3>
                    {service.shortDescription && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5">{service.shortDescription}</p>
                    )}
                  </div>
                </div>
                {service.content && service.content.trim() !== '' && (
                  <div className="prose dark:prose-invert max-w-none prose-sm mt-3 border-t border-slate-100 dark:border-slate-700/50 pt-4 text-slate-600 dark:text-slate-300">
                    <ReactMarkdown>{service.content}</ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chambers / Clinic */}
      {doctorContent?.chamber?.chambers && doctorContent.chamber.chambers.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
            Chamber / Clinic
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {doctorContent.chamber.chambers.map((chamber: any, index: number) => (
              <div key={`${chamber.name}-${index}`} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{chamber.name}</h3>
                    {chamber.address && (
                      <p className="text-slate-600 dark:text-slate-300">{chamber.address}</p>
                    )}
                  </div>
                  {chamber.googleMapsUrl && (
                    <a
                      href={chamber.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300"
                    >
                      Open in Maps
                    </a>
                  )}
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {chamber.visitingDays && (
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-3">
                      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Visiting Days</div>
                      <div className="text-slate-700 dark:text-slate-200 font-medium">{chamber.visitingDays}</div>
                    </div>
                  )}
                  {chamber.visitingHours && (
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-3">
                      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Visiting Hours</div>
                      <div className="text-slate-700 dark:text-slate-200 font-medium">{chamber.visitingHours}</div>
                    </div>
                  )}
                  {chamber.phone && (
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-3">
                      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">Phone</div>
                      <a href={`tel:${chamber.phone}`} className="text-slate-700 dark:text-slate-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400">
                        {chamber.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <MarkdownSection section={doctorContent.articles} />
      <MarkdownSection section={doctorContent.faq} />
      <MarkdownSection section={doctorContent.contact} />

    </div>
  )
}
