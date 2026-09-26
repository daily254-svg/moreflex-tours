"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="relative z-10 h-7 w-7"
        aria-hidden="true"
      >
        <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 3c-4.9 0-8.9 4-8.9 8.9 0 1.57.41 3.1 1.2 4.44L3 21l4.8-1.26a8.9 8.9 0 0 0 4.25 1.08h.01c4.9 0 8.9-4 8.9-8.9 0-2.38-.93-4.61-2.36-6.6zm-5.55 13.7h-.01a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.8.74.75-2.73-.18-.28a7.38 7.38 0 0 1-1.13-3.94c0-4.08 3.32-7.4 7.41-7.4a7.36 7.36 0 0 1 5.24 2.17 7.36 7.36 0 0 1 2.17 5.24c0 4.08-3.32 7.4-7.41 7.4zm4.06-5.54c-.22-.11-1.31-.65-1.52-.72-.2-.08-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.16-.48.05-.22-.11-.94-.35-1.79-1.1-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.11-.45.11-.1.24-.26.36-.4.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.4-.06-.11-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.2.87 2.36 1 2.52.12.17 1.7 2.6 4.12 3.54.58.23 1.03.37 1.38.47.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.44-.27z" />
      </svg>
    </motion.a>
  );
}
