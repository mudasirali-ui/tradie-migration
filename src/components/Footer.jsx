import TradieLogo from '../assets/tradie-logo.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="tc-footer">
      <div className="tc-footer-inner">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', maxWidth: '400px' }}>
          <div style={{ width: 70, height: 70, borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={TradieLogo} alt="Tradie Migration Logo" style={{ width: '250%', height: '250%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '4px' }}>
            <div className="tc-footer-brand" style={{ marginBottom: '0.4rem', lineHeight: 1.1 }}>Tradie Migration Australia</div>
            <p className="tc-footer-text" style={{ margin: 0, lineHeight: 1.5 }}>
              Connecting skilled overseas electricians with Australian employers,
              training providers and licensing pathways.
            </p>
          </div>
        </div>
        <div className="tc-footer-columns">
          <div>
            <div className="tc-footer-heading">Platform</div>
            <a href="/tradies">For Tradies</a>
            <a href="/employers">For Employers</a>
            <a href="/otsr">OTSR Pathway</a>
          </div>
          <div>
            <div className="tc-footer-heading">Company</div>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <div className="tc-footer-heading">Compliance</div>
            <a
              href="https://www.tradesrecognitionaustralia.gov.au/"
              target="_blank"
              rel="noreferrer"
            >
              Trades Recognition Australia
            </a>
          </div>
        </div>
      </div>
      <div className="tc-footer-bottom">
        <span>© {year} Tradie Migration Australia. All rights reserved.</span>
      </div>
    </footer>
  )
}
