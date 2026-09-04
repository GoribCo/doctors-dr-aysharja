import type { NextConfig } from 'next'
import fs from 'fs'
import path from 'path'

let doctorName = 'Doctor'
try {
  const profilePath = path.join(process.cwd(), 'content', 'en', 'profile.md')
  if (fs.existsSync(profilePath)) {
    const content = fs.readFileSync(profilePath, 'utf8')
    const match = content.match(/doctorName:\s*["']([^"']+)["']/)
    if (match && match[1]) {
      doctorName = match[1]
    }
  }
} catch (e) {
  // Ignore
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_DOCTOR_NAME: doctorName,
  },
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  allowedDevOrigins: ['192.168.0.232','192.168.0.231', 'localhost'],
}

export default nextConfig
