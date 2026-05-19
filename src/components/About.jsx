import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about__inner ${isVisible ? 'reveal' : ''}`}>
        <div className="about__header">
          <span className="section-number">02</span>
          <h2 className="section-title">About</h2>
          <div className="section-line"></div>
        </div>

        <div className="about__grid">
          <div className="about__vertical-text" aria-hidden="true">ABOUT ME</div>

          <div className="about__content">
            <p className="about__text about__text--large">
              I'm <span className="text-accent">Shubh Tiwari</span>, a first-year IT student
              based in Mumbai with a burning passion for technology and innovation.
            </p>
            <p className="about__text">
              Currently pursuing my B.Tech in Information Technology from Shree LR Tiwari
              College of Engineering under Mumbai University, I'm on a mission to transform
              ideas into impactful digital experiences.
            </p>
            <p className="about__text">
              I believe in the power of code to reshape industries and create solutions
              that matter. Every line of code I write is a step toward building something
              extraordinary.
            </p>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">1<sup>st</sup></span>
              <span className="about__stat-label">Year Student</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">8+</span>
              <span className="about__stat-label">Technologies</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">∞</span>
              <span className="about__stat-label">Passion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
