"use client";

import Link from "next/link";
import { useState } from "react";
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

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-cream/85 transition-colors hover:text-gold-light"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
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

        <div className="hidden lg:block">
          <Link
            href="/trip-planner"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-gold-light"
          >
            Start Planning
          </Link>
        </div>

        <button
          className="text-cream lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-deep px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-cream/85 hover:text-gold-light"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/trip-planner"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-deep"
            >
              Start Planning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
