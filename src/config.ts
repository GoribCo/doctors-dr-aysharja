// Central developer configuration.
// Content lives in /content/*.md files.

const config = {
  // ── Doctor Profile ────────────────────────────────────────────────────────
  doctor: {
    name: process.env.NEXT_PUBLIC_DOCTOR_NAME || 'Doctor',
    professionalTitle: `Dr. ${process.env.NEXT_PUBLIC_DOCTOR_NAME || 'Doctor'}`,
    speciality: 'Gynecologist & Obstetrician',
    qualification: 'TODO',
    profileImage: '/assets/images/profile-images/image2.jpg',
    contact: {
      phone: 'TODO',
      email: 'TODO',
      whatsapp: null as string | null,
      location: 'TODO',
      mapCoordinates: {
        latitude: null as number | null,
        longitude: null as number | null,
      },
    },
    socialLinks: {
      facebook: 'TODO',
      linkedin: 'TODO',
      twitter: 'TODO',
    },
    appointment: {
      url: 'TODO',
      phone: '+8801712345678',
      instructions: 'Call for appointment booking and consultation scheduling.',
    },
    chambers: [],
  },

  // ── Site identity ──────────────────────────────────────────────────────────
  app: {
    name: process.env.NEXT_PUBLIC_DOCTOR_NAME || 'Doctor Profile',
    version: '0.1.0',
    tagline: 'Professional Medical Profile',
    language: 'bn',
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  // Override with NEXT_PUBLIC_SITE_URL env var in production.
  // Override with NEXT_PUBLIC_BASE_PATH for GitHub Pages sub-directory deploys.
  url: {
    site: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goribco.github.io/dr-aysharja',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  },

  // ── Dev server ─────────────────────────────────────────────────────────────
  dev: {
    port: 3010,
  },

  // ── SEO defaults ──────────────────────────────────────────────────────────
  seo: {
    defaultTitle: `${process.env.NEXT_PUBLIC_DOCTOR_NAME || 'Doctor'} - Professional Profile`,
    titleTemplate: `%s | ${process.env.NEXT_PUBLIC_DOCTOR_NAME || 'Doctor'}`,
    defaultDescription:
      `Professional profile, medical services, and appointment booking for ${process.env.NEXT_PUBLIC_DOCTOR_NAME || 'the doctor'}.`,
    keywords: ['doctor', 'medical', process.env.NEXT_PUBLIC_DOCTOR_NAME || 'TODO'],
  },

  // ── Theme ──────────────────────────────────────────────────────────────────
  theme: {
    colorLight: '#f9fafb',
    colorDark: '#0f172a',
    primary: '#4f46e5',
  },
} as const

export default config
