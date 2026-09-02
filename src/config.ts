// Central developer configuration.
// Content lives in /content/*.md files.

const config = {
  // ── Doctor Profile ────────────────────────────────────────────────────────
  doctor: {
    name: 'Aysharja Laxmi Podder',
    professionalTitle: 'TODO',
    speciality: 'TODO',
    qualification: 'TODO',
    profileImage: 'TODO', // Path to public folder image, e.g., '/images/profile.jpg'
    contact: {
      phone: 'TODO',
      email: 'TODO',
      location: 'TODO',
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
    name: 'Dr. Aysharja Laxmi Podder',
    version: '0.1.0',
    tagline: 'Professional Medical Profile',
    language: 'bn',
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  // Override with NEXT_PUBLIC_SITE_URL env var in production.
  // Override with NEXT_PUBLIC_BASE_PATH for GitHub Pages sub-directory deploys.
  url: {
    site: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rxprofile.app',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  },

  // ── Dev server ─────────────────────────────────────────────────────────────
  dev: {
    port: 3010,
  },

  // ── SEO defaults ──────────────────────────────────────────────────────────
  seo: {
    defaultTitle: 'Dr. Aysharja Laxmi Podder - Professional Profile',
    titleTemplate: '%s | Dr. Aysharja Laxmi Podder',
    defaultDescription:
      'Professional profile, medical services, and appointment booking for Dr. Aysharja Laxmi Podder.',
    keywords: ['doctor', 'medical', 'Aysharja Laxmi Podder', 'TODO'],
  },

  // ── Theme ──────────────────────────────────────────────────────────────────
  theme: {
    colorLight: '#f9fafb',
    colorDark: '#0f172a',
    primary: '#4f46e5',
  },
} as const

export default config
