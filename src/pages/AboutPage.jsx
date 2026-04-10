import AboutImg from '../assets/about_new_immigration_team_1772400965777.png'

export function AboutPage() {
  return (
    <div className="tc-page">
      <section className="tc-section tc-grid-2 tc-gap-large" style={{ alignItems: 'center' }}>
        <div className="tc-section-header" style={{ marginBottom: 0 }}>
          <p className="tc-eyebrow">About Tradie Migration</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
            A specialised bridge between offshore talent and Australia
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
            Tradie Migration exists to simplify complex migration and licensing
            pathways for trades. We focus on electricians and related trades
            where safety, compliance and quality are critical.
          </p>

          <div className="tc-card tc-card-ghost" style={{ marginTop: '2.5rem', border: '1px solid rgba(148, 163, 184, 0.2)', padding: '2rem' }}>
            <h2>Our focus</h2>
            <ul style={{ textAlign: 'left', paddingLeft: '1.2rem', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              <li>Clarity for overseas electricians.</li>
              <li>Confidence for Australian employers.</li>
              <li>Alignment with Australian regulatory bodies and standards.</li>
            </ul>
          </div>
        </div>

        <div style={{ borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', width: '100%' }}>
          <img
            src={AboutImg}
            alt="Immigration consultants meeting with tradespeople"
            style={{ width: '100%', height: '100%', minHeight: '300px', display: 'block', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>
    </div>
  )
}


