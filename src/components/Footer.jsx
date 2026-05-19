function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__logo">ST.</span>
          <span className="footer__tagline">Built with passion & code.</span>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <span className="footer__copy">&copy; {new Date().getFullYear()} Shubh Tiwari</span>
          <span className="footer__credit">Designed & Developed by Shubh</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer
