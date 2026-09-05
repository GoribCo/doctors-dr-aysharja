'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import AppearanceSettings from '@/components/AppearanceSettings'
import { useUiLang } from '@/components/UiLanguageProvider'

export default function SettingsDrawer() {
  const { t } = useUiLang()
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [open])

  function close() { dialog.current?.close() }

  return <>
    <button ref={trigger} type="button" className="header-settings" aria-label={t.settings.panelTitle}
      title={t.settings.panelTitle} aria-haspopup="dialog" aria-expanded={open} aria-controls="display-settings"
      onClick={() => { dialog.current?.showModal(); setOpen(true) }}>
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 7h7m4 0h5M4 17h2m4 0h10" /><circle cx="13" cy="7" r="2" /><circle cx="8" cy="17" r="2" />
      </svg>
    </button>
    <dialog ref={dialog} id="display-settings" className="settings-drawer" aria-labelledby="display-settings-title"
      onClose={() => { setOpen(false); trigger.current?.focus() }}
      onClick={event => {
        if (event.target !== event.currentTarget) return
        const rect = event.currentTarget.getBoundingClientRect()
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close()
      }}>
      <div className="settings-drawer-heading">
        <div><h2 id="display-settings-title">{t.settings.panelTitle}</h2><p>{t.settings.panelDescription}</p></div>
        <button type="button" autoFocus className="header-settings" aria-label={t.settings.closePanel} onClick={close}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M6 18 18 6" /></svg>
        </button>
      </div>
      <div className="settings-drawer-content"><AppearanceSettings />
        <Link href="/settings/" onClick={close} className="settings-drawer-link">{t.settings.allSettings}<span aria-hidden="true"> →</span></Link>
      </div>
    </dialog>
  </>
}
