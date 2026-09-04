import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Chamber } from './chamber'
import { parseChambers } from './chamber'

export type ContentLanguage = 'bn' | 'hi' | 'en'

export interface DoctorSection {
  title: string;
  description: string;
  content: string;
  isVisible: boolean;
  chambers?: Chamber[];
}

export interface DoctorService {
  id: string;
  title: string;
  shortDescription: string;
  icon?: string;
  image?: string;
  content: string;
  isVisible: boolean;
}

// Default language for content
const DEFAULT_CONTENT_LANG: ContentLanguage = 'bn'

// Cache for loaded content to avoid repeated disk reads
const contentCache = new Map<string, any>()

function getContentDir(lang: ContentLanguage = DEFAULT_CONTENT_LANG): string {
  return path.join(process.cwd(), 'content', lang)
}

export function getDoctorName(lang: ContentLanguage = DEFAULT_CONTENT_LANG): string {
  const cacheKey = `${lang}:doctor_name`
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)
  }

  const profilePath = path.join(getContentDir(lang), 'profile.md')
  let name = ''
  if (fs.existsSync(profilePath)) {
    const raw = fs.readFileSync(profilePath, 'utf-8')
    const { data } = matter(raw)
    if (data.doctorName) name = data.doctorName as string
  }
  
  if (!name && lang !== 'en') {
    name = getDoctorName('en')
  }
  if (!name) name = 'Doctor'
  
  contentCache.set(cacheKey, name)
  return name
}

function replaceTemplateVars(text: string, vars: Record<string, string>): string {
  if (!text || typeof text !== 'string') return text;
  let result = text;
  for (const [key, value] of Object.entries(vars)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  }
  return result;
}

export function getSectionContent(filename: string, lang: ContentLanguage = DEFAULT_CONTENT_LANG): DoctorSection | null {
  const contentDir = getContentDir(lang)
  const cacheKey = `${lang}:${filename}`

  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)
  }

  const filePath = path.join(contentDir, filename)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const parsedChambers = parseChambers(data.chambers ?? [])

  // If the content includes "TODO", we hide the section unless structured chamber data exists.
  const hasStructuredDetails = parsedChambers.length > 0
  const isVisible = !content.includes('TODO') || hasStructuredDetails

  const doctorName = getDoctorName(lang)
  const templateVars = { doctorName }
  
  const finalContent = filename === 'profile.md' ? content : replaceTemplateVars(content, templateVars)
  const finalData = { ...data }
  
  if (filename !== 'profile.md') {
    for (const key in finalData) {
      if (typeof finalData[key] === 'string') {
        finalData[key] = replaceTemplateVars(finalData[key] as string, templateVars)
      }
    }
  }

  const result = {
    ...finalData,
    title: (finalData.title as string) || '',
    description: (finalData.description as string) || '',
    content: finalContent,
    isVisible,
    chambers: parsedChambers.length > 0 ? parsedChambers : undefined,
  }

  contentCache.set(cacheKey, result)
  return result
}

export function getServicesList(lang: ContentLanguage = DEFAULT_CONTENT_LANG): DoctorService[] {
  const contentDir = getContentDir(lang)
  const cacheKey = `${lang}:services_list`

  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)
  }

  const servicesDir = path.join(contentDir, 'services')
  if (!fs.existsSync(servicesDir)) return []

  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'))
  const services = files.map(filename => {
    const filePath = path.join(servicesDir, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    
    // If the content includes "TODO", we hide the service.
    const isVisible = !content.includes('TODO');

    const doctorName = getDoctorName(lang)
    const templateVars = { doctorName }
    const finalContent = replaceTemplateVars(content, templateVars)
    
    return {
      id: filename.replace('.md', ''),
      title: replaceTemplateVars((data.title as string) || '', templateVars),
      shortDescription: replaceTemplateVars((data.shortDescription as string) || '', templateVars),
      icon: (data.icon as string) || undefined,
      image: (data.image as string) || undefined,
      content: finalContent,
      isVisible
    }
  })

  const result = services.filter(s => s.isVisible)
  contentCache.set(cacheKey, result)
  return result
}

export function getAllDoctorContent(lang: ContentLanguage = DEFAULT_CONTENT_LANG) {
  return {
    profile: getSectionContent('profile.md', lang),
    about: getSectionContent('about.md', lang),
    speciality: getSectionContent('speciality.md', lang),
    subSpeciality: getSectionContent('sub-speciality.md', lang),
    qualifications: getSectionContent('qualifications.md', lang),
    experience: getSectionContent('experience.md', lang),
    languages: getSectionContent('languages.md', lang),
    memberships: getSectionContent('memberships.md', lang),
    awards: getSectionContent('awards.md', lang),
    publications: getSectionContent('publications.md', lang),
    services: getSectionContent('services.md', lang), // Kept for backwards compatibility if needed, but not used in UI anymore
    servicesList: getServicesList(lang),
    chamber: getSectionContent('chamber.md', lang),
    appointment: getSectionContent('appointment.md', lang),
    review: getSectionContent('review.md', lang),
    home: getSectionContent('home.md', lang),
    articles: getSectionContent('articles.md', lang),
    faq: getSectionContent('faq.md', lang),
    contact: getSectionContent('contact.md', lang),
  }
}

// Helper to check if a language's content directory exists
export function contentLanguageExists(lang: ContentLanguage): boolean {
  return fs.existsSync(getContentDir(lang))
}

// Get available content languages
export function getAvailableContentLanguages(): ContentLanguage[] {
  const contentRoot = path.join(process.cwd(), 'content')
  if (!fs.existsSync(contentRoot)) return [DEFAULT_CONTENT_LANG]
  
  const dirs = fs.readdirSync(contentRoot)
    .filter(dir => {
      const fullPath = path.join(contentRoot, dir)
      return fs.statSync(fullPath).isDirectory() && ['bn', 'hi', 'en'].includes(dir)
    }) as ContentLanguage[]

  const available = ['bn', 'en', 'hi'].filter(lang => dirs.includes(lang as ContentLanguage)) as ContentLanguage[]
  return available.length > 0 ? available : [DEFAULT_CONTENT_LANG]
}
