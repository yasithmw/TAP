"use client";

import { useState, FormEvent } from "react";

interface WaitlistFormProps {
  source: "hero" | "cta";
}

export default function WaitlistForm({ source }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector("input") as HTMLInputElement;
    if (!input.value.trim()) return;

    setSubmitted(true);
    input.value = "";

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  }

  return (
    <>
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          autoComplete="email"
        />
        <button type="submit" disabled={submitted}>
          {submitted ? "✓ Added" : source === "cta" ? "Request access" : "Join waitlist"}
        </button>
      </form>
      {source === "cta" && (
        <div className={`success-msg${submitted ? " show" : ""}`} >
          ✓ You&apos;re on the list. We&apos;ll be in touch as soon as applications open in your city.
        </div>
      )}
    </>
  );
}
