const DEFAULT_LOCAL_API = 'http://127.0.0.1:8000'
const DEFAULT_PROD_API = 'https://master-backend-production-0e27.up.railway.app'

const normalizeApiBase = (value) => {
  // Protect against misconfigured env values like "VITE_API_URL = https://..."
  const cleaned = (value || '')
    .trim()
    .replace(/^VITE_API_URL\s*=\s*/i, '')
    .replace(/^['"]|['"]$/g, '')
    .replace(/\/+$/, '')

  if (!cleaned || !/^https?:\/\//i.test(cleaned)) return ''

  try {
    const url = new URL(cleaned)
    return `${url.origin}${url.pathname}`.replace(/\/+$/, '')
  } catch {
    return ''
  }
}

const envBase = normalizeApiBase(import.meta.env.VITE_API_URL)
const BASE = envBase || (import.meta.env.PROD ? DEFAULT_PROD_API : DEFAULT_LOCAL_API)
const PROJECT_ID = (import.meta.env.VITE_PROJECT_ID || 'tradie migration').trim()

export const submitContact = async (formData) => {
  const data = new FormData()
  data.append('first_name', formData.firstName)
  data.append('last_name', formData.lastName)
  data.append('email', formData.email)
  data.append('phone', formData.phone || '')
  data.append('i_am', formData.iAm || '')
  data.append('current_country', formData.currentCountry || '')
  data.append('subject', formData.subject || '')
  data.append('message', formData.message || '')

  if (formData.resume) {
    data.append('resume', formData.resume)
  }

  const res = await fetch(`${BASE}/api/contact/submit`, {
    method: 'POST',
    headers: PROJECT_ID ? { 'x-project-id': PROJECT_ID } : undefined,
    body: data,
  })

  const payload = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(payload?.detail || payload?.message || 'Failed to submit contact form.')
  }

  return payload
}
