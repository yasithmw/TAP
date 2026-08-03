const ITEMS = [
  "Professional Profiles",
  "Artist Collaboration",
  "Venue Discovery",
  "Trusted Marketplace",
  "Career Resources",
  "Sydney & Brisbane",
  "Live 25th of August 2026",
];

function TickerItems() {
  return (
    <span aria-hidden>
      {ITEMS.map((item, i) => (
        <span key={item}>
          {item}
          {i < ITEMS.length - 1 && <span className="divider" />}
        </span>
      ))}
      <span className="divider" />
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}
