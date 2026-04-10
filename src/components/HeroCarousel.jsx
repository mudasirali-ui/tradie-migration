import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../assets/hero_migrant_tradie_1772394008320.png'
import HeroVideo from '../assets/video/Tradie Migration website video.mp4'

export function HeroCarousel() {
  // Open the video modal by default when website loads
  const [isVideoOpen, setIsVideoOpen] = useState(true)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVideoOpen])

  return (
    <>
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
            <div className="tc-hero-cta animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link to="/tradies" className="tc-btn tc-btn-primary lg">
                I&apos;m a Tradie
              </Link>
              <Link to="/employers" className="tc-btn tc-btn-secondary lg">
                I&apos;m an Employer
              </Link>
              <button 
                onClick={() => setIsVideoOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '0.85rem 1.8rem',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#fff',
                  color: 'var(--color-primary, #0B2545)',
                  borderRadius: '50%',
                  transform: 'translateX(-4px)'
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '2px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch a video
              </button>
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

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(10, 15, 25, 0.92)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            animation: 'modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            padding: '20px'
          }}
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '750px', /* Reduced size to make it more like a compact popup */
              aspectRatio: '16/9',
              backgroundColor: '#000',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.1)',
              animation: 'modalScaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              opacity: 0,
              transform: 'scale(0.95)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* The Cross Icon to close */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.2s',
                backdropFilter: 'blur(4px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.6)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <video
              src={HeroVideo}
              autoPlay
              muted
              controls
              style={{ width: '100%', height: '100%', display: 'block', outline: 'none', objectFit: 'cover' }}
            />
          </div>
          <style>{`
            @keyframes modalFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalScaleUp {
              from { transform: scale(0.95) translateY(20px); opacity: 0; }
              to { transform: scale(1) translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  )
}

