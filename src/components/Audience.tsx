export default function Audience() {
  return (
    <section className="audience" id="who">
      <div className="container">
        <div className="section-label">Built for two sides</div>
        <h2 className="section-title">If you make <em>or</em> book live music — this is for you.</h2>
        <div style={{ height: 24 }} />

        <div className="audience-grid">
          {/* Artists */}
          <div className="aud-card aud-artists">
            <div className="aud-label">For artists</div>
            <h3>Access more opportunities <em>to play.</em></h3>
            <p>Build a professional profile that does the pitching for you - helping you get discovered, connect with real venues, and build your live experience.</p>
            <ul className="aud-features">
              <li>Standardised EPK &amp; gallery system</li>
              <li>Direct opportunities &amp; offers</li>
              <li>Artist development  &amp; progression</li>
              <li>Industry Networking</li>
            </ul>
          </div>

          {/* Venues */}
          <div className="aud-card aud-venues">
            <div className="aud-label">For venues</div>
            <h3>Booking made <em>easy.</em></h3>
            <p>Stop scrolling. Search verified artists by genre, style, and fit - and fill your calendar with confidence.</p>
            <ul className="aud-features">
              <li>Advanced filtering</li>
              <li>Verified artist data</li>
              <li>One-click offers</li>
              <li>Booking &amp; pipeline tools</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
