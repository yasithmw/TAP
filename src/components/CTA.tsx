import RoleSelector from "./RoleSelector";
import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  return (
    <section className="cta" id="waitlist">
      <div className="container cta-inner">
        <div className="eyebrow">Launching July 2026</div>
        <h2>Be one of the first <em>inside.</em></h2>
        <p>
          Early members get priority onboarding, founding-artist status, and direct
          input on what we build next. No noise, no spam — just the launch signal.
        </p>

        <RoleSelector />
        <WaitlistForm source="cta" />

        <div className="cta-meta">
          <span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            No spam
          </span>
          <span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Early access priority
          </span>
          <span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Unsubscribe anytime
          </span>
        </div>
      </div>
    </section>
  );
}
