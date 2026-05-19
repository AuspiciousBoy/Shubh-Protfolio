import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:tiwarishubhtiwari910@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`contact__inner ${isVisible ? 'reveal' : ''}`}>
        <div className="contact__header">
          <span className="section-number">05</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__heading">
              Let's Build<br />
              <span className="text-accent">Something Great</span><br />
              Together.
            </h3>
            <p className="contact__desc">
              Have an idea, a project, or just want to say hello?
              I'd love to hear from you.
            </p>
            <a href="mailto:tiwarishubhtiwari910@gmail.com" className="contact__email hoverable">
              tiwarishubhtiwari910@gmail.com
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className={`contact__field ${focused === 'name' || formData.name ? 'contact__field--active' : ''}`}>
              <label className="contact__label" htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact__input hoverable"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                required
              />
              <div className="contact__input-line"></div>
            </div>

            <div className={`contact__field ${focused === 'email' || formData.email ? 'contact__field--active' : ''}`}>
              <label className="contact__label" htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact__input hoverable"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                required
              />
              <div className="contact__input-line"></div>
            </div>

            <div className={`contact__field ${focused === 'message' || formData.message ? 'contact__field--active' : ''}`}>
              <label className="contact__label" htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                className="contact__input contact__textarea hoverable"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                required
              />
              <div className="contact__input-line"></div>
            </div>

            <button type="submit" className="contact__submit hoverable">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
