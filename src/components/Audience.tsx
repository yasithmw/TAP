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
            <h3>Get paid <em>to play.</em></h3>
            <p>A professional profile that does the pitching for you. Real venues, real fees, real bookings.</p>
            <ul className="aud-features">
              <li>Standardised EPK &amp; media</li>
              <li>Direct offers from venues</li>
              <li>Milestone-based progression</li>
              <li>Networking &amp; collaborations</li>
            </ul>
          </div>

          {/* Venues */}
          <div className="aud-card aud-venues">
            <div className="aud-label">For venues</div>
            <h3>Book the <em>right</em> act — faster.</h3>
            <p>Stop scrolling. Search verified artists by genre, draw, fee and fit. Fill your calendar in minutes.</p>
            <ul className="aud-features">
              <li>Advanced filtering &amp; shortlists</li>
              <li>Verified performance data</li>
              <li>One-click offers &amp; messaging</li>
              <li>Calendar &amp; pipeline tools</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
