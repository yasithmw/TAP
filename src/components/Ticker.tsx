const ITEMS = [
  "Live music Sydney",
  "Venues",
  "Artists",
  "Industry Marketplace",
  "Launching August 2026",
  "Pre-registration open",
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
