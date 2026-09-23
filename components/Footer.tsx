export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10 sm:px-8 overflow-hidden">
      {/* Top Glowing Laser/Energy Line */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] footer-glow-line" />
      
      {/* Ambient background glow orb */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-28 w-2/3 rounded-full bg-cyan-400/10 blur-[50px] pointer-events-none" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
        <span className="font-semibold text-white/90 transition hover:text-cyan-200">
          Aritra Sarkar<span className="text-cyan-300 drop-shadow-[0_0_10px_#22d3ee]">.</span>
        </span>
        <span className="text-center sm:text-left">
          © 2026 Aritra Sarkar · Built with curiosity &amp; precision.
        </span>
        <div className="flex items-center gap-3">
          <span className="inline-block size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
          <span className="font-mono text-xs text-cyan-300/80">CORE ACTIVE</span>
        </div>
      </div>
    </footer>
  )
}
