import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-decor" />
      <div className="container hero-grid">
        <div>
          <div className="eyebrow reveal r1">Launching in Sydney · July 2026</div>
          <h1 className="hero-title reveal r2">
            Where musicians<br />
            meet <em>opportunity.</em>
          </h1>
          <p className="hero-sub reveal r3">
            A gate-kept network for serious artists and the venues, labels and managers
            looking for them. Structured profiles. Verified signals. Real bookings — no cold DMs, no noise.
          </p>

          <div className="reveal r4">
            <WaitlistForm source="hero" />
          </div>
          <div className="waitlist-meta reveal r4">
            <span className="dot" />
            <span>1,200+ artists &amp; venues already on the list</span>
          </div>
        </div>

        {/* Hero visual: stacked cards preview */}
        <div className="hero-visual">
          {/* Match indicator */}
          <div className="match-pill">Match Found</div>

          {/* Big artist card */}
          <div className="card card-artist">
            <div className="card-artist-header">
              <div className="avatar">M</div>
              <div className="artist-meta">
                <div className="artist-name">Maya Chen</div>
                <div className="artist-role">Solo artist · Vocalist / Pianist</div>
              </div>
              <div className="badge-status">Open to bookings</div>
            </div>
            <div className="card-artist-body">
              <div className="tags">
                <span className="tag">Jazz</span>
                <span className="tag">Soul</span>
                <span className="tag">R&amp;B</span>
                <span className="tag gray">Sydney, NSW</span>
                <span className="tag gray">Live performance</span>
              </div>
              <p className="bio">
                8 years performing · 120+ bookings completed. Available for venues,
                private events, studio work and label showcases.
              </p>
              <div className="card-artist-ctas">
                <button className="mini-btn dark">View full profile</button>
                <button className="mini-btn ghost">Send offer</button>
              </div>
            </div>
          </div>

          {/* Venue request card */}
          <div className="card card-venue">
            <div className="card-venue-label">New opportunity</div>
            <div className="card-venue-title">Friday night residency —<br /> Surry Hills jazz bar</div>
            <div className="venue-meta">
              <div>Genre<strong>Jazz · Soul</strong></div>
              <div>Fee<strong>$850 / night</strong></div>
              <div>Date<strong>Fri, 12 Jun</strong></div>
              <div>Capacity<strong>140 seated</strong></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
