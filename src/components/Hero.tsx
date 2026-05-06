import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-decor" />
      <div className="container hero-grid">
        <div>
          <div className="eyebrow reveal r1">Launching Sydney · August 2026 · Pre-registration Open</div>
          <h1 className="hero-title reveal r2">
            Where musicians<br />
            & <em>opportunity meet.</em>
          </h1>
          <p className="hero-sub reveal r3">
            TAP is a structured digital ecosystem connecting artists, venues, and industry, 
            giving musicians a professional presence to access real opportunities, and venues the tools to find, filter, and book the right act.
          </p>

          <div className="reveal r4">
            <WaitlistForm source="hero" />
          </div>
          <div className="waitlist-meta reveal r4">
            <span className="dot" />
            <span> Artists and venues across Australia already pre-registered </span>
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
                <div className="artist-name">Dani Key</div>
                <div className="artist-role">Solo artist · Vocalist / Pianist</div>
              </div>
              <div className="badge-status gray">Open to bookings</div>
            </div>
            <div className="card-artist-body">
              <div className="tags">
                <span className="tag">Jazz</span>
                
                <span className="tag gray">Sydney, NSW</span>
                <span className="tag gray">Live performance</span>
              </div>
              <p className="bio">
                8 years performing · 25+ bookings completed. Available for venues,
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
            <div className="card-venue-title">Friday night residency —<br /> Jazz Bar</div>
            <div className="venue-meta">
              <div>Genre<strong>Jazz · Soul</strong></div>
              <div>Fee<strong>$400 / night</strong></div>
              <div>Date<strong>Fri, 12 Jun</strong></div>
              <div>Capacity<strong>140 seated</strong></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
