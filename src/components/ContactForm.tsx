"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-sand bg-white p-10 text-center">
        <p className="font-serif text-2xl font-semibold text-deep">
          Thank you!
        </p>
        <p className="mt-2 text-muted">
          A MoreFlex travel consultant will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4 rounded-2xl border border-sand bg-white p-8"
    >
      <div>
        <label className="text-sm font-medium text-deep">Full Name</label>
        <input
          required
          type="text"
          className="mt-1 w-full rounded-lg border border-sand px-4 py-2.5 outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-deep">Email</label>
        <input
          required
          type="email"
          className="mt-1 w-full rounded-lg border border-sand px-4 py-2.5 outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-deep">
          Tell us about your trip
        </label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-sand px-4 py-2.5 outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition-colors hover:bg-gold-light"
      >
        Send Inquiry
      </button>
    </form>
  );
}
