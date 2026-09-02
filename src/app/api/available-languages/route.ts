import { getAvailableContentLanguages } from '@/lib/doctorContent'

export const dynamic = 'force-static'

export async function GET() {
  try {
    const languages = getAvailableContentLanguages()
    return Response.json({ languages })
  } catch (error) {
    console.error('Error fetching available languages:', error)
    return Response.json({ languages: ['bn'] }, { status: 500 })
  }
}
