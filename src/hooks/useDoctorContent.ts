import { useEffect, useState } from 'react'
import type { ContentLanguage } from '@/lib/doctorContent'
import config from '@/config'
export function useDoctorContent(lang: ContentLanguage) {
  const [content, setContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    fetch(`${config.url.basePath}/api/doctor-content/${lang}`)
      .then(res => res.json())
      .then(data => {
        setContent(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.error('Failed to load doctor content:', err)
        setError(err instanceof Error ? err.message : 'Failed to load content')
        setIsLoading(false)
      })
  }, [lang])

  return { content, isLoading, error }
}
