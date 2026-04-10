import { Link } from 'react-router-dom'
import HeroImg from '../assets/hero_migrant_tradie_1772394008320.png'

export function HeroCarousel() {
  return (
    <section className="tc-hero tc-hero-carousel">
      <div className="tc-hero-bg" />

      {/* Animated Airplane Transition */}
      <div className="tc-hero-plane">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(45deg)' }}>
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>

      <div className="tc-hero-inner">
        <div className="tc-hero-copy">
          <p className="tc-eyebrow animate-fade-up">Migration & Licensing Pathways</p>
          <h1 className="animate-fade-up delay-100">
            Turn your trade skills into Australian Residency.
          </h1>
          <p className="tc-hero-sub animate-fade-up delay-200">
            Tradie Migration helps electricians and tradespeople understand and apply for specific trade based work visas in Australia, plan skills gap training and help connect with employers who are ready to support your journey.
          </p>
          <div className="tc-hero-cta animate-fade-up delay-300">
            <Link to="/tradies" className="tc-btn tc-btn-primary lg">
              I&apos;m a Tradie
            </Link>
            <Link to="/employers" className="tc-btn tc-btn-secondary lg">
              I&apos;m an Employer
            </Link>
          </div>
          <div className="tc-hero-meta animate-fade-up delay-400">
            <span>OTSR guidance</span>
            <span>Licensing pathways</span>
            <span>Employer & training partners</span>
          </div>
        </div>

        <div className="tc-hero-carousel-visual animate-fade-up delay-500" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div style={{ borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.5)', width: '100%' }}>
            <img
              src={HeroImg}
              alt="Migrant tradesperson ready for work"
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

