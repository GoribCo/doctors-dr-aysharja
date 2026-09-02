'use client'

import { useEffect } from 'react'
import config from '@/config'

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(`${config.url.basePath}/sw.js`, { scope: `${config.url.basePath || '/'}` })
        .catch(() => {
          // SW registration is best-effort — ignore errors in non-HTTPS contexts etc.
        })
    }
  }, [])

  return null
}
