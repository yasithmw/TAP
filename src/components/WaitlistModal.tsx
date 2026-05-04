"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface WaitlistModalProps {
  email: string;
  onClose: () => void;
}

const successMessages: Record<string, string> = {
  artist: "Welcome aboard. The live music industry just got a little easier to break into — we're glad you're here.",
  venue: "Welcome to TAP. Finding the right act just got a whole lot simpler — we're excited to have you.",
};

export default function WaitlistModal({ email, onClose }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [emailVal, setEmailVal] = useState(email);
  const [role, setRole] = useState<"artist" | "venue">("artist");
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !emailVal.trim()) return;
    setSubmitted(true);
    setTimeout(() => onClose(), 2800);
  }

  const modal = (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-label="Complete your registration">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h2 className="modal-title">Be one of the <em>first inside.</em></h2>
            <p className="modal-sub">Be first to access TAP, with priority onboarding and early access to real opportunities.</p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-field">
                <label className="modal-label" htmlFor="modal-name">Name</label>
                <input
                  ref={nameRef}
                  id="modal-name"
                  type="text"
                  className="modal-input"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="modal-field" style={{ marginBottom: "10px" }}>
                <label className="modal-label" htmlFor="modal-email">Email</label>
                <input
                  id="modal-email"
                  type="email"
                  className="modal-input"
                  value={emailVal}
                  onChange={(e) => setEmailVal(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="modal-field">
                <span className="modal-label">I want to onboard as a</span>
                <div className="modal-roles" style={{ marginTop: "5px" }}>
                  <button
                    type="button"
                    className={`modal-role-chip${role === "artist" ? " active" : ""}`}
                    onClick={() => setRole("artist")}
                  >
                    Artist
                  </button>
                  <button
                    type="button"
                    className={`modal-role-chip${role === "venue" ? " active" : ""}`}
                    onClick={() => setRole("venue")}
                  >
                    Venue
                  </button>
                </div>
              </div>
              <button type="submit" className="modal-submit">
                Join Waitlist
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h2 className="modal-title">You&rsquo;re on<br /><em>the list.</em></h2>
            <p className="modal-sub">{successMessages[role]}</p>
          </div>
        )}
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modal, document.body);
}
