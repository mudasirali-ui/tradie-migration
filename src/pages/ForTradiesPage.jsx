import { Link } from 'react-router-dom'
import TradieImg from '../assets/tradie_desi_electrician_1772401279374.png'

export function ForTradiesPage() {
  return (
    <div className="tc-page">
      <section className="tc-section">
        <div
          className="tc-section-header"
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
        >
          <p className="tc-eyebrow">For Overseas Electricians & Tradies</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Turn your trade skills into an Australian career.</h1>
          <p style={{ fontSize: '1.15rem' }}>
            Tradie Migration helps you understand the full journey from skills
            assessment and OTSR through to licensing, training and employment
            with Australian businesses.
          </p>
        </div>

        <div className="tc-grid-2 tc-gap-large" style={{ alignItems: 'flex-start' }}>
          {/* Left Column - Image */}
          <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', alignSelf: 'stretch', display: 'flex' }}>
            <img
              src={TradieImg}
              alt="Professional Indian Electrician looking at blueprints"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px' }}
            />
          </div>

          {/* Right Column - Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="tc-card" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
              <h2>We help tailor your visa and employment pathway.</h2>
              <ol className="tc-steps" style={{ marginTop: '1.5rem' }}>
                <li>Confirm your eligibility and trade background.</li>
                <li>Complete an OTSR assessment through an approved body.</li>
                <li>Apply for a provisional licence where you intend to work.</li>
                <li>Undertake gap training with an Australian RTO.</li>
                <li>Move into full licensing and long-term roles.</li>
              </ol>
            </div>
            <div className="tc-card tc-card-ghost" style={{ border: '1px solid rgba(148, 163, 184, 0.2)' }}>
              <h2>Why use us</h2>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Clarity on requirements before you relocate.</li>
                <li>Introductions to employers aligned with your trade.</li>
                <li>Support understanding timelines, costs and next steps.</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/contact?type=tradie"
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


