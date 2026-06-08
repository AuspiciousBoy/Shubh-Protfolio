function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__cta">
        <p className="footer__cta-text">Ready to create something amazing?</p>
        <a href="#contact" className="footer__cta-btn hoverable">Let's Talk</a>
      </div>

      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__logo">ST.</span>
          <span className="footer__tagline">Built with passion & code.</span>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <span className="footer__copy">&copy; {new Date().getFullYear()} Shubh Tiwari</span>
          <button type="button" className="footer__top-btn hoverable" onClick={scrollTop}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
export default Footer
