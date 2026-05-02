export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot">
          <div className="foot-logo">The Artist Platform</div>
          <div className="foot-links">
            <span className="foot-connect-label">Connect with us</span>
            <a href="mailto:support@theartistplatform.com.au" className="foot-email">support@theartistplatform.com.au</a>
          </div>
        </div>
        <div className="foot-meta">
          <span>© 2026 The Artist Platform · Sydney, Australia</span>
          <span>Designed &amp; Developed By <a href="https://kainovation.com" target="_blank" rel="noopener noreferrer" style={{color: '#fff', fontWeight: 700}}>Kainovation Ltd.</a></span>
        </div>
      </div>
    </footer>
  );
}
