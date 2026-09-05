import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import FontSizeProvider from '@/components/FontSizeProvider'
import UiLanguageProvider from '@/components/UiLanguageProvider'
import SpecialityProvider from '@/components/SpecialityProvider'
import ContentLanguageProvider from '@/components/ContentLanguageProvider'
import BottomNav from '@/components/navs/BottomNav'
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar'
import StickyAppointmentCTA from '@/components/StickyAppointmentCTA'
import SiteHeader from '@/components/layouts/SiteHeader'
import { getAllDoctorContent, getDoctorContentByLanguage, getSiteSettings } from '@/lib/doctorContent'
import config from '@/config'
import { getDoctorName } from '@/lib/doctorContent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const doctorName = getDoctorName('en');
  const site = getSiteSettings()
  return {
    metadataBase: new URL(config.url.site),
    applicationName: doctorName,
    icons: {
      icon: [
        { url: `${config.url.basePath}/icon-192.png`, sizes: '192x192', type: 'image/png' },
        { url: `${config.url.basePath}/icon-512.png`, sizes: '512x512', type: 'image/png' },
      ],
      apple: `${config.url.basePath}/icon-192.png`,
    },
    title: {
      default: `${doctorName} - Professional Profile`,
      template: `%s | ${doctorName}`,
    },
    description: site.seo?.defaultDescription,
    keywords: ['doctor', 'medical', doctorName],
    authors: [{ name: doctorName }],
    creator: doctorName,
    openGraph: {
      title: `${doctorName} - Professional Profile`,
      description: site.seo?.defaultDescription,
      url: config.url.site,
      siteName: doctorName,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${doctorName} - Professional Profile`,
      description: site.seo?.defaultDescription,
    },
    alternates: {
      canonical: config.url.site,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  }
}

export function generateViewport(): Viewport {
  const theme = getSiteSettings().theme
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: theme?.colorLight ?? '#f9fafb' },
      { media: '(prefers-color-scheme: dark)', color: theme?.colorDark ?? '#0f172a' },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contentByLanguage = getDoctorContentByLanguage()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href={`${config.url.basePath}/manifest.json`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-dvh`}>
        <ThemeProvider>
          <FontSizeProvider>
          <ContentLanguageProvider contentByLanguage={contentByLanguage}>
            <SpecialityProvider>
              <UiLanguageProvider>
                <ServiceWorkerRegistrar />
                {/*
                  max-w-6xl caps the whole layout (sidebar + content) at 1152px.
                  On desktop: flex row — sticky sidebar on the left, content fills the rest.
                  On mobile: sidebar is hidden, bottom nav is fixed.
                */}
                <div className="max-w-6xl mx-auto min-h-dvh lg:flex lg:items-start">
                  <BottomNav />
                  <main className="flex-1 min-w-0 min-h-dvh pb-24 lg:pb-0">
                    <SiteHeader
                        initialHome={getAllDoctorContent('bn').home as Record<string, unknown> | null}
                        doctorName={getDoctorName('bn')}
                    />
                    {children}
                  </main>
                  <StickyAppointmentCTA />
                </div>
              </UiLanguageProvider>
            </SpecialityProvider>
          </ContentLanguageProvider>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
