import { useState } from 'react'
import ContactImg from '../assets/contact_new_professionals_1772400332350.png'

export function ContactPage() {
  const [resumeFile, setResumeFile] = useState(null)
  const [resumeError, setResumeError] = useState('')

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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!resumeFile) {
      alert('Please upload your resume/CV before submitting.')
      return
    }

    const formData = new FormData(event.target)
    formData.append('resume', resumeFile)

    // This is where you would send formData to your backend/API.
    // For now, we simply show a confirmation and log the data.
    // eslint-disable-next-line no-console
    console.log('Contact enquiry submitted with resume:', {
      fields: Object.fromEntries(formData.entries()),
      resumeName: resumeFile.name,
    })

    alert('Thank you. Your enquiry and resume have been captured on this form.')
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
        <div className="tc-grid-2" style={{ alignItems: 'flex-start' }}>
          <div className="tc-card" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
            <h2>Enquiry details</h2>
            <form className="tc-form" onSubmit={handleSubmit}>
              <div className="tc-form-row tc-form-row-inline">
                <label>
                  First name
                  <input type="text" placeholder="Jane" />
                </label>
                <label>
                  Last name
                  <input type="text" placeholder="Smith" />
                </label>
              </div>
              <div className="tc-form-row tc-form-row-inline">
                <label>
                  Email
                  <input type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Phone (incl. country code)
                  <input type="tel" placeholder="+61 4XX XXX XXX" />
                </label>
              </div>
              <div className="tc-form-row tc-form-row-inline">
                <label>
                  I am
                  <select>
                    <option value="tradie">An overseas electrician / tradie</option>
                    <option value="employer">An Australian employer</option>
                    <option value="provider">A training provider</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label>
                  Current country
                  <input type="text" placeholder="e.g. United Kingdom" />
                </label>
              </div>
              <div className="tc-form-row">
                <label>
                  Subject
                  <input
                    type="text"
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
                    rows="5"
                    placeholder="Tell us briefly about your experience, timeframe and what you would like help with."
                  />
                </label>
              </div>
              <button type="submit" className="tc-btn tc-btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.9rem' }}>
                Submit enquiry
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
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: '450px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


