'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems } from '@/lib/data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0b0f1a]/75 px-5 py-3 backdrop-blur-xl">
        <a href="#home" className="group flex items-center py-0.5">
          <span className="brand-glow text-xl font-bold tracking-tight text-white transition duration-300 group-hover:text-cyan-200">
            AS<span className="text-cyan-300 drop-shadow-[0_0_10px_#22d3ee]">.</span>
          </span>
        </a>
        
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-glow-item text-sm font-medium text-white/65 tracking-wide transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(103,232,249,0.85)]"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#070a12] shadow-[0_0_16px_rgba(255,255,255,0.25)] transition duration-300 hover:bg-cyan-200 hover:shadow-[0_0_24px_rgba(103,232,249,0.6)] md:flex"
        >
          Let&apos;s talk <ArrowUpRight className="size-4" />
        </a>

        <button
          className="rounded-full p-2 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-white/10 bg-[#0b0f1a]/95 p-3 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
