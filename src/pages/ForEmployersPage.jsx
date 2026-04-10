import { Link } from 'react-router-dom'
import EmployerImg from '../assets/employer_desi_meeting_1772401729534.png'

export function ForEmployersPage() {
  return (
    <div className="tc-page">
      <section className="tc-section">
        <div
          className="tc-section-header"
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
        >
          <p className="tc-eyebrow">For Australian Employers</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Access skilled overseas electricians with clear pathways</h1>
          <p style={{ fontSize: '1.15rem' }}>
            Fill your critical skills gap by connecting with overseas qualified electricians and other trades people who understand the migration process and are progressing towards Australian licensing.
          </p>
        </div>

        <div className="tc-grid-2 tc-gap-large" style={{ alignItems: 'flex-start' }}>
          {/* Left Column - Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="tc-card" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
              <h2>Why register with Tradie Migration?</h2>
              <ul style={{ marginTop: '1.5rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Top candidate credentials, licensing and migration status. Support aligning your roles with training needs.</li>
                <li>Support aligning roles with training and supervision needs.</li>
                <li>Access to motivated, hardworking pre-screened talent before candidates apply for Australian work.</li>
              </ul>
            </div>

            <div className="tc-card tc-card-ghost" style={{ border: '1px solid rgba(148, 163, 184, 0.2)' }}>
              <h2>Build sustainable teams</h2>
              <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                We focus on long term workforce planning: structured pathways for
                overseas electricians, clear expectations for employers and better
                outcomes for Australian customers.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', alignSelf: 'stretch', display: 'flex' }}>
            <img
              src={EmployerImg}
              alt="Professional Australian employers shaking hands with a successful South Asian tradesman"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px' }}
            />
          </div>
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/contact?type=employer"
            className="tc-btn tc-btn-primary"
            style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
          >
            Register your interest
          </Link>
        </div>
      </section>
    </div>
  )
}


