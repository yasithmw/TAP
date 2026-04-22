export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="section-label">The problem</div>
        <h2 className="section-title">Talent discovery is <em>broken</em>.</h2>
        <p className="section-intro">
          Cold emails. TikTok scouting. Word-of-mouth. The live music industry runs
          on fragmented channels with no standard way to assess who&apos;s ready,
          relevant, or worth booking.
        </p>

        <div className="problem-grid">
          <div className="problem-item">
            <div className="problem-num">01</div>
            <h3>No structured access</h3>
            <p>Artists have no reliable way to reach venues outside of personal networks and DMs.</p>
          </div>
          <div className="problem-item">
            <div className="problem-num">02</div>
            <h3>No efficient evaluation</h3>
            <p>Venues waste hours sifting through Instagram pages with no context on quality or fit.</p>
          </div>
          <div className="problem-item">
            <div className="problem-num">03</div>
            <h3>No visibility without networks</h3>
            <p>Opportunities go to who you know. High-potential artists stay undiscovered.</p>
          </div>
          <div className="problem-item">
            <div className="problem-num">04</div>
            <h3>No progression framework</h3>
            <p>No benchmarks for artists. No clear path from open-mic to headline slot.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
