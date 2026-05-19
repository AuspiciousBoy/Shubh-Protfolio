import { useEffect, useState } from 'react'

function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__bg-text" aria-hidden="true">ST</div>

      <div className={`hero__content ${loaded ? 'hero__content--loaded' : ''}`}>
        <div className="hero__label">
          <span className="hero__label-line"></span>
          <span className="hero__label-text">PORTFOLIO — 2025</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            {'SHUBH'.split('').map((char, i) => (
              <span key={i} className="hero__title-char" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                {char}
              </span>
            ))}
          </span>
          <span className="hero__title-line hero__title-line--last">
            {'TIWARI'.split('').map((char, i) => (
              <span key={i} className="hero__title-char" style={{ animationDelay: `${0.7 + i * 0.08}s` }}>
                {char}
              </span>
            ))}
          </span>
        </h1>

        <div className="hero__info">
          <p className="hero__subtitle">First Year IT Student</p>
          <p className="hero__tagline">
            Passionate about flipping the world<br />
            with ideas & innovation.
          </p>
        </div>

        <div className="hero__cta">
          <a href="#contact" className="hero__btn hoverable">
            <span>Get in Touch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a href="#about" className="hero__btn hero__btn--ghost hoverable">
            <span>Explore More</span>
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">SCROLL</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>

      <div className="hero__shapes" aria-hidden="true">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>
    </section>
  )
}
export default Hero
