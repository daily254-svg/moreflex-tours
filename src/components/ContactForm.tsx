"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center rounded-2xl border border-sand bg-white p-10 text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold"
          >
            <CheckCircle2 size={28} />
          </motion.span>
          <p className="mt-4 font-serif text-2xl font-semibold text-deep">
            Thank you!
          </p>
          <p className="mt-2 text-muted">
            A MoreFlex travel consultant will reach out shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
              className="mt-1 w-full rounded-lg border border-sand px-4 py-2.5 outline-none transition-colors focus:border-gold"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-deep">Email</label>
            <input
              required
              type="email"
              className="mt-1 w-full rounded-lg border border-sand px-4 py-2.5 outline-none transition-colors focus:border-gold"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-deep">
              Tell us about your trip
            </label>
            <textarea
              required
              rows={4}
              className="mt-1 w-full rounded-lg border border-sand px-4 py-2.5 outline-none transition-colors focus:border-gold"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep transition-colors hover:bg-gold-light"
          >
            Send Inquiry
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
