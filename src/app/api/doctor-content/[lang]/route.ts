import { getAllDoctorContent, getAvailableContentLanguages, type ContentLanguage } from '@/lib/doctorContent'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAvailableContentLanguages().map(lang => ({ lang }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  try {
    const { lang: requestedLang } = await params
    const lang = getAvailableContentLanguages().includes(requestedLang as ContentLanguage)
      ? requestedLang as ContentLanguage
      : 'bn'
    return Response.json(getAllDoctorContent(lang))
  } catch (error) {
    console.error('Error fetching doctor content:', error)
    return Response.json({ error: 'Failed to fetch content' }, { status: 500 })
  }
}
