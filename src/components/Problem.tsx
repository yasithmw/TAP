export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="section-label">The Disconnect</div>
        <h2 className="section-title">The live music industry has been <em> <br />left behind.</em></h2>
        <p className="section-intro">
          Artist discovery in the live music industry is unstructured and inefficient, leaving a gap between artists and the industry.
        </p>

        <div className="problem-grid">
          <div className="problem-item">
            <h3>No structured access</h3>
            <p>Artists have no reliable way to reach venues beyond personal networks, word of mouth, and direct outreach.</p>
          </div>
          <div className="problem-item">
            <h3>No efficient evaluation</h3>
            <p>Venues spend hours reviewing scattered content with no consistent way to assess artist quality, fit, or reliability.</p>
          </div>
          <div className="problem-item">
            <h3>No visibility without networks</h3>
            <p>Opportunities are largely driven by who you know, leaving high-potential artists undiscovered.</p>
          </div>
          <div className="problem-item">
            <h3>No progression framework</h3>
            <p>There is no clear pathway for artists to develop, improve, and move toward higher-quality opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
