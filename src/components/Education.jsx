import { useScrollReveal } from '../hooks/useScrollReveal'

function Education() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="education" className="education" ref={ref}>
      <div className={`education__inner ${isVisible ? 'reveal' : ''}`}>
        <div className="education__header">
          <span className="section-number">04</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>

        <div className="education__card">
          <div className="education__card-glow" aria-hidden="true" />

          <div className="education__year-block">
            <span className="education__year">2025</span>
            <span className="education__year-separator">—</span>
            <span className="education__year">2029</span>
          </div>

          <div className="education__details">
            <div className="education__badge">
              <span className="education__badge-dot" />
              Currently Pursuing
            </div>
            <h3 className="education__degree">
              B.Tech in <span className="text-accent">Information Technology</span>
            </h3>
            <p className="education__institution">
              Shree LR Tiwari College of Engineering
            </p>
            <p className="education__university">Mumbai University</p>

            <div className="education__progress">
              <div className="education__progress-header">
                <span>Degree Progress</span>
                <span className="text-accent">Year 1 of 4</span>
              </div>
              <div className="education__progress-bar">
                <div className="education__progress-fill" />
              </div>
            </div>

            <div className="education__meta">
              <span className="education__meta-item">
                <span className="education__meta-icon">◈</span>
                First Year
              </span>
              <span className="education__meta-item">
                <span className="education__meta-icon">◈</span>
                Mumbai, India
              </span>
            </div>
          </div>

          <div className="education__deco" aria-hidden="true">
            <div className="education__deco-line"></div>
            <div className="education__deco-dot"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Education
