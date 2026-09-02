import { getAllDoctorContent } from '@/lib/doctorContent'

export const dynamic = 'force-static'

export async function GET() {
  try {
    const content = getAllDoctorContent('bn')
    return Response.json(content)
  } catch (error) {
    console.error('Error fetching doctor content:', error)
    return Response.json({ error: 'Failed to fetch content' }, { status: 500 })
  }
}
