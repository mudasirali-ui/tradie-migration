const BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID || ''

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
