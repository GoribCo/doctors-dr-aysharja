// Central developer configuration.
// Content lives in /content/*.md files.

const config = {
  // Deployment settings only. Doctor data belongs in content/site.md and content/{language}/.
  app: {
    version: '0.1.0',
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

} as const

export default config
