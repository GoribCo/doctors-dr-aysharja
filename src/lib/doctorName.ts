export interface DoctorNameParts {
  salutation: string
  firstName: string
  middleName: string
  lastName: string
}

export function getSalutation(name: DoctorNameParts): string {
  return name.salutation.trim()
}

export function getFullName(name: DoctorNameParts, includeSalutation = true): string {
  return [includeSalutation ? getSalutation(name) : '', name.firstName, name.middleName, name.lastName]
    .map(part => part.trim()).filter(Boolean).join(' ')
}

export function getShortName(name: DoctorNameParts, includeSalutation = true): string {
  return [includeSalutation ? getSalutation(name) : '', name.firstName.trim() || name.lastName.trim() || name.middleName.trim()]
    .filter(Boolean).join(' ')
}

export function getNameTemplateVars(name: DoctorNameParts): Record<string, string> {
  return {
    ...name,
    doctorName: getFullName(name),
    doctorFullName: getFullName(name),
    doctorShortName: getShortName(name),
    doctorSalutation: getSalutation(name),
  }
}

/** Resolve strings at every depth, including lists and nested frontmatter. */
export function resolveContentTemplates<T>(value: T, vars: Record<string, string>): T {
  if (typeof value === 'string') {
    return value.replace(/{{\s*(\w+)\s*}}/g, (match, key: string) => vars[key] ?? match) as T
  }
  if (Array.isArray(value)) return value.map(item => resolveContentTemplates(item, vars)) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveContentTemplates(item, vars)])) as T
  }
  return value
}
