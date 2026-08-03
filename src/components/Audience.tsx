export default function Audience() {
  return (
    <section className="audience" id="who">
      <div className="container">
        <div className="section-label">The TAP Ecosystem</div>
        <h2 className="section-title">Shaped by the industry. Built for artists. <em>Connected with everyone.</em></h2>
        <div style={{ height: 24 }} />

        <div className="audience-grid">
          {/* Artists */}
          <div className="aud-card aud-artists">
            <div className="aud-label">For artists</div>
            <h3>Access more opportunities <em>to play.</em></h3>
            <p>Build your professional presence and access the connections, opportunities, services and resources needed to move your career forward.</p>
            <ul className="aud-features">
              <li>Industry-ready artist profile and EPK</li>
              <li>Artist, venue and opportunity discovery</li>
              <li>Collaboration and professional networking</li>
              <li>Trusted music-industry services</li>
              <li>Practical resources and career development</li>
            </ul>
          </div>

          {/* Venues */}
          <div className="aud-card aud-venues">
            <div className="aud-label">For venues</div>
            <h3>Booking made <em>easy.</em></h3>
            <p>Connect with &amp; discover professional artists through one structured ecosystem. Discover talent, share opportunities, build industry relationships and provide the services artists need to progress.</p>
            <ul className="aud-features">
              <li>Structured artist discovery</li>
              <li>Professional artist profiles</li>
              <li>Venue and opportunity visibility</li>
              <li>Industry networking and collaboration</li>
              <li>Trusted Partner presence and member offers</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
