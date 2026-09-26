"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/lib/nav";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-deep/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-cream">
            MoreFlex <span className="text-gold-light">Travel</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-cream/85 transition-colors hover:text-gold-light"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                  <div className="min-w-[200px] rounded-lg border border-white/10 bg-deep-light py-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-cream/80 hover:bg-white/5 hover:text-gold-light"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden xl:block">
          <Link
            href="/trip-planner"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-deep transition-colors hover:bg-gold-light"
          >
            Start Planning
          </Link>
        </div>

        <button
          className="text-cream xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-deep xl:hidden"
          >
            <div className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto px-6 py-4">
              {navItems.map((navItem, i) => (
                <motion.div
                  key={navItem.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <Link
                    href={navItem.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-cream/85 hover:text-gold-light"
                  >
                    {navItem.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/trip-planner"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-deep"
              >
                Start Planning
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
