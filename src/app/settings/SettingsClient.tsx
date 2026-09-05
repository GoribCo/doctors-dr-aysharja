'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getStreak, getTotalCompletedStages, resetProgress } from '@/lib/progress'
import ThemeToggle from '@/components/ThemeToggle'
import { useUiLang } from '@/components/UiLanguageProvider'
import { useContentLanguage } from '@/components/ContentLanguageProvider'
import { useSpeciality } from '@/components/SpecialityProvider'
import { UI_LANGUAGES } from '@/lib/i18n'
import { SPECIALITY_THEMES, type Speciality } from '@/lib/specialities'

type FontSize = 'small' | 'medium' | 'large'
type ToastType = 'success' | 'error'

const fontSizeClasses: Record<FontSize, string> = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
}

export default function SettingsClient() {
  const { t, lang, setLang } = useUiLang()
  const { lang: contentLang, availableLangs, setLang: setContentLang } = useContentLanguage()
  const { speciality, setSpeciality } = useSpeciality()
  const [streak, setStreak] = useState(0)
  const [totalStages, setTotalStages] = useState(0)
  const [fontSize, setFontSize] = useState<FontSize>('medium')
  const [showBengali, setShowBengali] = useState(true)
  const [confirmReset, setConfirmReset] = useState(false)
  const [toast, setToast] = useState<{ msg: string; type: ToastType } | null>(null)

  useEffect(() => {
    const s = getStreak()
    setStreak(s.count)
    setTotalStages(getTotalCompletedStages())

    const stored = localStorage.getItem('rxprofile_font_size') as FontSize | null
    if (stored && stored in fontSizeClasses) setFontSize(stored)

    const bengali = localStorage.getItem('rxprofile_show_bengali')
    if (bengali !== null) setShowBengali(bengali !== 'false')
  }, [])

  function handleFontSize(size: FontSize) {
    setFontSize(size)
    localStorage.setItem('rxprofile_font_size', size)
    // Apply to html element
    const html = document.documentElement
    html.classList.remove('text-sm', 'text-base', 'text-lg')
    html.style.fontSize = size === 'small' ? '14px' : size === 'large' ? '18px' : '16px'
  }

  function handleBengaliToggle() {
    const next = !showBengali
    setShowBengali(next)
    localStorage.setItem('rxprofile_show_bengali', String(next))
  }

  function showToast(msg: string, type: ToastType) {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  function handleExport() {
    const today = new Date().toISOString().split('T')[0]
    const data = {
      exportedAt: new Date().toISOString(),
      version: '1',
      progress: (() => { try { return JSON.parse(localStorage.getItem('rxprofile_progress') || '{}') } catch { return {} } })(),
      srs: (() => { try { return JSON.parse(localStorage.getItem('rxprofile_srs') || '{}') } catch { return {} } })(),
      streak: (() => { try { return JSON.parse(localStorage.getItem('rxprofile_streak') || '{}') } catch { return {} } })(),
      ratings: (() => { try { return JSON.parse(localStorage.getItem('rxprofile_stage_ratings') || '{}') } catch { return {} } })(),
      notes: (() => { try { return JSON.parse(localStorage.getItem('rxprofile_stage_notes') || '{}') } catch { return {} } })(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rxprofile-backup-${today}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const raw = ev.target?.result as string
        const data = JSON.parse(raw)
        if (!data.version) throw new Error('Invalid backup: missing version')
        if (data.progress) localStorage.setItem('rxprofile_progress', JSON.stringify(data.progress))
        if (data.srs) localStorage.setItem('rxprofile_srs', JSON.stringify(data.srs))
        if (data.streak) localStorage.setItem('rxprofile_streak', JSON.stringify(data.streak))
        if (data.ratings) localStorage.setItem('rxprofile_stage_ratings', JSON.stringify(data.ratings))
        if (data.notes) localStorage.setItem('rxprofile_stage_notes', JSON.stringify(data.notes))
        // Refresh displayed stats
        const s = getStreak()
        setStreak(s.count)
        setTotalStages(getTotalCompletedStages())
        showToast('Backup imported successfully!', 'success')
      } catch (err) {
        showToast(`Import failed: ${err instanceof Error ? err.message : 'Invalid file'}`, 'error')
      }
    }
    reader.readAsText(file)
    // Reset input so same file can be re-imported
    e.target.value = ''
  }

  function handleReset() {
    if (!confirmReset) {
      setConfirmReset(true)
      setTimeout(() => setConfirmReset(false), 4000)
      return
    }
    resetProgress()
    setStreak(0)
    setTotalStages(0)
    setConfirmReset(false)
  }

  return (
    <>
      {/* Appearance */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 px-1">
          {t.settings.appearance}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">{t.settings.theme}</div>
            <ThemeToggle />
          </div>
          <div className="px-4 py-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">{t.settings.fontSize}</div>
            <div className="flex gap-2">
              {([['small', t.settings.fontSmall], ['medium', t.settings.fontMedium], ['large', t.settings.fontLarge]] as [FontSize, string][]).map(([size, label]) => (
                <button
                  key={size}
                  onClick={() => handleFontSize(size)}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
                    fontSize === size
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-indigo-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Site Language */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 px-1">
          {t.settings.language}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{t.settings.languageDesc}</p>
          <div className="flex flex-wrap gap-2">
            {UI_LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); if (availableLangs.includes(l.code as typeof contentLang)) setContentLang(l.code as typeof contentLang) }}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${
                  lang === l.code
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.nativeName}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Language */}
      {availableLangs.length > 1 && (
        <section className="mb-6">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 px-1">
            {t.settings.contentLanguage}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{t.settings.contentLanguageDesc}</p>
            <div className="flex flex-wrap gap-2">
              {availableLangs.map(langCode => {
                const langName = langCode === 'bn' ? 'বাংলা' : langCode === 'hi' ? 'हिन्दी' : 'English'
                const langFlag = langCode === 'bn' ? '🇧🇩' : langCode === 'hi' ? '🇮🇳' : '🇬🇧'
                return (
                  <button
                    key={langCode}
                    onClick={() => { setContentLang(langCode); setLang(langCode as typeof lang) }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${
                      contentLang === langCode
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                    }`}
                  >
                    <span>{langFlag}</span>
                    <span>{langName}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Medical Speciality */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 px-1">
          {t.settings.speciality}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{t.settings.specialityDesc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setSpeciality(null)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${
                speciality === null
                  ? 'bg-gray-900 dark:bg-gray-700 text-white border-gray-900 dark:border-gray-700'
                  : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-gray-300'
              }`}
            >
              <span>⚕️</span>
              <span>{t.settings.specialityNone}</span>
            </button>
            {Object.entries(SPECIALITY_THEMES).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => setSpeciality(key as Speciality)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${
                  speciality === key
                    ? 'text-white border-current'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-current'
                }`}
                style={{
                  backgroundColor: speciality === key ? theme.primary : 'transparent',
                  borderColor: speciality === key ? theme.primary : 'inherit',
                  color: speciality === key ? 'white' : 'inherit',
                }}
              >
                <span>{theme.icon}</span>
                <span>{theme.label}</span>
              </button>
            ))}
          </div>
          {speciality && SPECIALITY_THEMES[speciality] && (
            <div className="text-xs text-gray-500 dark:text-gray-400 p-3 rounded-lg" style={{ backgroundColor: SPECIALITY_THEMES[speciality].secondary }}>
              <p className="font-medium">{SPECIALITY_THEMES[speciality].description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-28 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl text-sm font-medium shadow-lg transition-all ${
            toast.type === 'success'
              ? 'bg-emerald-600 text-white'
              : 'bg-rose-600 text-white'
          }`}
        >
          {toast.msg}
        </div>
      )}
    </>
  )
}
