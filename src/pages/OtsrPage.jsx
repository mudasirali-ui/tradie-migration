import OtsrImg from '../assets/otsr_assessment_meeting_1772402411712.png'

export function OtsrPage() {
  return (
    <div className="tc-page tc-otsr">
      <section className="tc-section">
        <div className="tc-section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <p className="tc-eyebrow">Offshore Technical Skills Record (OTSR)</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bridge your electrical trade gap to Australian standards
          </h1>
          <p style={{ fontSize: '1.15rem' }}>
          The Offshore Technical Skills Record (OTSR) is the formal skills assessment that recognises your existing trade experience and identifies training gaps you need to become a fully licensed electrician in Australia.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
          {/* Left Column - Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="tc-card" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
              <h2>What is an OTSR?</h2>
              <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              An OTSR is a detailed record of your technical skills, issued after an assessment of your overseas qualifications and work history. 
It compares your existing skills to the Australian standards and outlines additional units or competencies you must complete in Australia.


              </p>
              <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              It is not a licence, but it is the key document that allows you to move into provisional licensing and appropriate training.
              </p>
            </div>
            <div className="tc-card tc-card-ghost" style={{ border: '1px solid rgba(148, 163, 184, 0.2)' }}>
              <h2>Who needs an OTSR?</h2>
              <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              Any overseas qualified electrician who wants to use their trade  in Australia will generally require an OTSR.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Experienced electricians migrating to Australia
                </li>
                <li>Electricians seeking Australian qualifications recognition
                </li>
                <li>Electrician (Special Class) with specialist skills</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', alignSelf: 'stretch', display: 'flex' }}>
            <img
              src={OtsrImg}
              alt="South Asian electrician discussing official technical skills and records with an Australian assessor"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }}
            />
          </div>
        </div>

        <div className="tc-card tc-card-highlight">
          <h2>Access skilled overseas electricians and other trade workers.</h2>
          <p>
            OTSRs are issued on behalf of{' '}
            <a
              href="https://www.tradesrecognitionaustralia.gov.au/"
              target="_blank"
              rel="noreferrer"
            >
              Trades Recognition Australia (TRA)
            </a>
            , the Australian Government body responsible for assessing skills
            for migration and licensing pathways.
          </p>
          <ul>
            <li>Assessment aligned to Australian qualification standards</li>
            <li>Recognition of prior learning and overseas experience</li>
            <li>Clear mapping of any gap training required</li>
          </ul>

          <div className="tc-info-block">
            <h3>Typical timeline</h3>
            <p>
              Most OTSR assessments are completed in approximately{' '}
              <strong>8–12 weeks</strong>, weeks, depending on how quickly documents are supplied and verified.
            </p>
          </div>

          <div className="tc-info-block">
            <h3>Book an OTSR consultation</h3>
            <p>
              Schedule a time with Tradie Migration to discuss your OTSR pathway, documentation, and next steps.
            </p>
            <a
              href="https://your-booking-link.com"
              target="_blank"
              rel="noreferrer"
              className="tc-btn"
            >
              Make a booking
            </a>
          </div>
        </div>
      </section>

      <section className="tc-section tc-section-alt">
        <div className="tc-grid-2">
          <div className="tc-card tc-card-ghost">
            <h2>How the OTSR process works</h2>
            <ol className="tc-steps">
              <li>
                <strong>Document preparation</strong> – gather trade
                qualifications, transcripts, employment references and
                competencies.
              </li>
              <li>
                <strong>Application submission</strong> – lodge your application
                with the approved assessing body for your trade.
              </li>
              <li>
                <strong>Verification</strong> – your documents and work history
                are checked and validated.
              </li>
              <li>
                <strong>Technical assessment</strong> – your skills are
                benchmarked against Australian standards.
              </li>
              <li>
                <strong>Outcome & OTSR issued</strong> – you receive your OTSR
                outlining any gap training.
              </li>
            </ol>
          </div>

          <div className="tc-card">
            <h2>What an OTSR allows you to do</h2>
            <ul>
              <li>
                Apply for a <strong>provisional electrician licence</strong> in
                relevant Australian states and territories.
              </li>
              <li>
                Enrol in <strong>gap training</strong> with a Registered
                Training Organisation (RTO).
              </li>
              <li>
                Work under appropriate supervision while you complete remaining
                units.
              </li>
              <li>
                Progress towards <strong>full electrical licensing</strong> upon
                completion of training and local requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
