import { useState } from 'react'
import ContactImg from '../assets/contact_new_professionals_1772400332350.png'
import { submitContact } from '../api'

export function ContactPage() {
  const [resumeFile, setResumeFile] = useState(null)
  const [resumeError, setResumeError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      setResumeFile(null)
      setResumeError('')
      return
    }

    const maxSizeBytes = 5 * 1024 * 1024 // 5MB

    if (file.size > maxSizeBytes) {
      setResumeFile(null)
      setResumeError('File is too large. Please upload a file under 5MB.')
      return
    }

    setResumeFile(file)
    setResumeError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSubmitSuccess('')
    setSubmitError('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      firstName: formData.get('firstName')?.toString().trim() || '',
      lastName: formData.get('lastName')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      iAm: formData.get('iAm')?.toString() || '',
      currentCountry: formData.get('currentCountry')?.toString().trim() || '',
      subject: formData.get('subject')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
      resume: resumeFile,
    }

    try {
      setIsSubmitting(true)
      await submitContact(payload)
      setSubmitSuccess('Thank you! Your enquiry has been submitted successfully.')
      setResumeFile(null)
      setResumeError('')
      form.reset()
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong while submitting your enquiry.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="tc-page">
      <section className="tc-section">
        <div className="tc-section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <p className="tc-eyebrow">Contact</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Start a conversation with Tradie Migration</h1>
          <p style={{ fontSize: '1.15rem' }}>
            Share a few details about your situation and we&apos;ll outline the
            next steps in your pathway – whether you&apos;re an overseas tradie
            or an Australian employer.
          </p>
        </div>
        <div className="tc-grid-2 tc-gap-large" style={{ alignItems: 'flex-start' }}>
          <div className="tc-card" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
            <h2>Enquiry details</h2>
            <form className="tc-form" onSubmit={handleSubmit}>
              <div className="tc-form-row tc-form-row-inline">
                <label>
                  First name
                  <input type="text" name="firstName" placeholder="Jane" required />
                </label>
                <label>
                  Last name
                  <input type="text" name="lastName" placeholder="Smith" required />
                </label>
              </div>
              <div className="tc-form-row tc-form-row-inline">
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Phone (incl. country code)
                  <input type="tel" name="phone" placeholder="+61 4XX XXX XXX" />
                </label>
              </div>
              <div className="tc-form-row tc-form-row-inline">
                <label>
                  I am
                  <select name="iAm" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option value="tradie">An overseas electrician / tradie</option>
                    <option value="employer">An Australian employer</option>
                    <option value="provider">A training provider</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label>
                  Current country
                  <input type="text" name="currentCountry" placeholder="e.g. United Kingdom" />
                </label>
              </div>
              <div className="tc-form-row">
                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="OTSR, licensing pathway or employer enquiry"
                  />
                </label>
              </div>
              <div className="tc-form-row">
                <label style={{ display: 'block', width: '100%' }}>
                  <span style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Upload resume / CV
                  </span>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      padding: '1rem 1.25rem',
                      borderRadius: '0.9rem',
                      border: '1px dashed rgba(148, 163, 184, 0.7)',
                      background:
                        'radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 55%), rgba(15,23,42,0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.95rem', color: '#e5e7eb', fontWeight: 500 }}>
                        {resumeFile && !resumeError
                          ? resumeFile.name
                          : 'Click to browse and attach your resume'}
                      </span>
                      <span style={{ fontSize: '0.8rem' }} className="tc-muted">
                        PDF, DOC or DOCX. Max 5MB.
                      </span>
                    </div>
                    <span
                      style={{
                        padding: '0.55rem 1.1rem',
                        borderRadius: '999px',
                        background: 'linear-gradient(90deg, #facc15, #f97316)',
                        color: '#111827',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Choose file
                    </span>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0,
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                </label>
                {resumeError && (
                  <p className="tc-error" style={{ color: '#f87171', marginTop: '0.5rem' }}>
                    {resumeError}
                  </p>
                )}
              </div>
              <div className="tc-form-row">
                <label>
                  Message
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us briefly about your experience, timeframe and what you would like help with."
                  />
                </label>
              </div>
              {submitSuccess && (
                <p style={{ color: '#4ade80', marginTop: '0.5rem' }}>
                  {submitSuccess}
                </p>
              )}
              {submitError && (
                <p className="tc-error" style={{ color: '#f87171', marginTop: '0.5rem' }}>
                  {submitError}
                </p>
              )}
              <button
                type="submit"
                className="tc-btn tc-btn-primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  padding: '0.9rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
              </button>
            </form>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="tc-card tc-card-ghost" style={{ padding: '2.5rem', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
              <h2>How we respond</h2>
              <ul style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>High-level pathway overview for your situation.</li>
                <li>Indicative timelines and likely next steps.</li>
                <li>Options for employer or training introductions.</li>
              </ul>
            </div>

            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', alignSelf: 'center', width: '100%' }}>
              <img
                src={ContactImg}
                alt="Professional immigration consultants in office"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: '350px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


