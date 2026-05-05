"use client";

import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

const successMessages: Record<string, string> = {
  artist: "Welcome aboard. The live music industry just got a little easier to break into — we're glad you're here.",
  venue: "Welcome to TAP. Finding the right act just got a whole lot simpler — we're excited to have you.",
};

interface WaitlistFormProps {
  source: "hero" | "cta";
  role?: string;
}

export default function WaitlistForm({ source, role = "artist" }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [heroEmail, setHeroEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector("input[type=email]") as HTMLInputElement;
    if (!emailInput.value.trim()) return;

    if (source === "hero") {
      setHeroEmail(emailInput.value.trim());
      setModalOpen(true);
      emailInput.value = "";
      return;
    }

    const inputs = form.querySelectorAll("input");
    setSubmitted(true);
    inputs.forEach((input) => { input.value = ""; });
    setTimeout(() => { setSubmitted(false); }, 3500);
  }

  return (
    <>
      <form
        className={`waitlist-form${source === "cta" ? " waitlist-form--cta" : ""}`}
        onSubmit={handleSubmit}
      >
        {source === "cta" && (
          <input
            type="text"
            placeholder="Enter your name"
            autoComplete="given-name"
            className="waitlist-input"
          />
        )}
        <input
          type="email"
          placeholder="Enter your email"
          required
          autoComplete="email"
          className="waitlist-input"
        />
        <button type="submit" disabled={submitted}>
          {submitted ? "✓ Request Sent" : "Join waitlist"}
        </button>
      </form>

      {source === "cta" && (
        <div className={`success-msg${submitted ? " show" : ""}`}>
          ✓ {successMessages[role] ?? successMessages.artist}
        </div>
      )}

      {modalOpen && (
        <WaitlistModal
          email={heroEmail}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
