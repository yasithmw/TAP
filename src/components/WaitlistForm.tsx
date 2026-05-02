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
    const inputs = form.querySelectorAll("input");
    const emailInput = form.querySelector("input[type=email]") as HTMLInputElement;
    if (!emailInput.value.trim()) return;

    setSubmitted(true);
    inputs.forEach((input) => { input.value = ""; });

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  }

  return (
    <>
      <form className={`waitlist-form${source === "cta" ? " waitlist-form--cta" : ""}`} onSubmit={handleSubmit}>
        {source === "cta" && (
          <input
            type="text"
            placeholder="Enter your name"
            autoComplete="given-name"
            style={{
              width: "200px",
              height: "52px",
              padding: "14px 22px",
              borderRadius: "999px",
            }}
          />
        )}
        <input
          type="email"
          placeholder={source === "cta" ? "Enter your email" : "you@yourdomain.com"}
          required
          autoComplete="email"
          style={{
            width: "250px",
            height: "52px",
            padding: "14px 22px",
            borderRadius: "999px",
          }}
        />
        <button type="submit" disabled={submitted}>
          {submitted ? "✓ Added" : source === "cta" ? "Join waitlist" : "Join waitlist"}
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
