export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-label">The market</div>
        <h2 className="section-title">A large, <em>underserved</em> industry.</h2>
        <p className="section-intro">Live music is expanding. The infrastructure around it hasn&apos;t caught up.</p>

        <div className="stats-grid">
          <div className="stat">
            <div className="stat-num">25<span className="unit">k+</span></div>
            <div className="stat-label">Artists in Sydney alone</div>
          </div>
          <div className="stat">
            <div className="stat-num">1.5<span className="unit">k+</span></div>
            <div className="stat-label">Active Sydney venues</div>
          </div>
          <div className="stat">
            <div className="stat-num">100<span className="unit">k+</span></div>
            <div className="stat-label">Artists · national expansion</div>
          </div>
          <div className="stat">
            <div className="stat-num">1.5<span className="unit">M+</span></div>
            <div className="stat-label">Artists across AU · NZ · US</div>
          </div>
        </div>
      </div>
    </section>
  );
}
