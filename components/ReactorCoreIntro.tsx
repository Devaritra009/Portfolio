'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface ReactorCoreIntroProps {
  onComplete?: () => void
}

// Scramble text generator for DedSec hacker terminal effect
const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#________0101'

export function ReactorCoreIntro({ onComplete }: ReactorCoreIntroProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'charging' | 'cutout' | 'done'>('charging')
  const [hackerText, setHackerText] = useState('DEDSEC // INITIALIZING KERNEL')
  const [glitchActive, setGlitchActive] = useState(false)
  
  const completedRef = useRef(false)
  const progressRef = useRef(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  // Text scrambling effect across multiple hacking phases
  // Decoupled from progress state renders to eliminate CPU contention and stutter
  useEffect(() => {
    const messages = [
      'DEDSEC // INITIALIZING KERNEL',
      'BREACHING CTOS 2.0 PROTOCOL',
      'INJECTING QUANTUM PAYLOAD',
      'BYPASSING SECURITY FIREWALL',
      'ROOT ACCESS GRANTED // READY',
    ]

    let glitchTimeout: ReturnType<typeof setTimeout> | null = null

    const textInterval = setInterval(() => {
      if (completedRef.current) return
      const currentProg = progressRef.current
      const msgIndex = Math.min(
        messages.length - 1,
        Math.floor((currentProg / 100) * messages.length)
      )
      const target = messages[msgIndex]

      setHackerText(
        target
          .split('')
          .map((char) =>
            Math.random() > 0.75 && char !== ' '
              ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              : char
          )
          .join('')
      )

      // Clean occasional RGB chromatic glitch twitch without timer thrashing
      if (Math.random() > 0.78 && !glitchTimeout) {
        setGlitchActive(true)
        glitchTimeout = setTimeout(() => {
          setGlitchActive(false)
          glitchTimeout = null
        }, 85)
      }
    }, 80)

    return () => {
      clearInterval(textInterval)
      if (glitchTimeout) clearTimeout(glitchTimeout)
    }
  }, [])

  // Progress counter animation - calibrated to ~2.2 seconds duration with fluid cadence
  useEffect(() => {
    if (completedRef.current) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          progressRef.current = 100
          return 100
        }
        // Smooth progression across ~2.2 seconds (60 ticks @ 35ms)
        const step = prev < 25 ? 1.3 : prev < 65 ? 1.7 : prev < 88 ? 2.1 : 2.8
        const next = Math.round((prev + step) * 10) / 10
        if (next >= 100) {
          clearInterval(interval)
          progressRef.current = 100
          return 100
        }
        progressRef.current = next
        return next
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  // Trigger cutout on 100% completion
  useEffect(() => {
    if (progress >= 100 && !completedRef.current) {
      completedRef.current = true

      // Hold briefly at 100% to read "ROOT ACCESS GRANTED"
      const t1 = setTimeout(() => {
        setPhase('cutout')
      }, 350)

      // Fully unmount once the aperture cutout has expanded past screen edges
      const t2 = setTimeout(() => {
        setPhase('done')
        onCompleteRef.current?.()
      }, 1250)

      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [progress])

  const handleSkip = () => {
    if (completedRef.current) return
    completedRef.current = true
    setPhase('done')
    onCompleteRef.current?.()
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleSkip()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (phase === 'done') return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden">
      {/* NATIVE SVG MASK CUTOUT:
          The rect covers the viewport with #03050c.
          When phase === 'cutout', the black circle in the mask expands from 0 to 150%,
          creating a clean circular aperture that reveals the webpage directly through the center! */}
      <svg className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <mask id="reactor-aperture-cutout">
            {/* White keeps background opaque */}
            <rect width="100%" height="100%" fill="white" />
            {/* Black circle cuts out transparent hole */}
            <motion.circle
              cx="50%"
              cy="50%"
              initial={{ r: 0 }}
              animate={phase === 'cutout' ? { r: '150%' } : { r: 0 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="#03050c"
          mask="url(#reactor-aperture-cutout)"
        />
      </svg>

      {/* EXPANDING NEON SHOCKWAVE RING ON CUTOUT */}
      {phase === 'cutout' && (
        <motion.div
          initial={{ scale: 0.2, opacity: 1 }}
          animate={{ scale: 4.8, opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="pointer-events-none absolute left-1/2 top-1/2 -ml-44 -mt-44 size-88 rounded-full border-4 border-cyan-300 shadow-[0_0_80px_#22d3ee,0_0_120px_#ff0077] will-change-transform"
        />
      )}

      {/* DEDSEC / WATCH DOGS 2 OVERLAY CONTENT */}
      <AnimatePresence>
        {phase !== 'cutout' && (
          <motion.div
            key="dedsec-hud"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.2,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-center"
          >
            {/* CRT SCANLINES */}
            <div className="crt-scanlines absolute inset-0 opacity-75 pointer-events-none" />

            {/* DEDSEC SKULL PATTERN WATERMARK */}
            <div
              className="absolute inset-0 opacity-[0.07] bg-repeat pointer-events-none"
              style={{
                backgroundImage: 'url(/images/watchdogs/wd_skulls.jpg)',
                backgroundSize: '240px 240px',
                filter: 'contrast(150%)',
              }}
            />

            {/* Skip button with DedSec glitch styling */}
            <button
              onClick={handleSkip}
              className="absolute right-6 top-6 z-20 rounded-md border border-cyan-400/40 bg-black/60 px-4 py-1.5 font-mono text-xs text-cyan-300 backdrop-blur-md transition hover:border-[#ff0077] hover:bg-[#ff0077]/10 hover:text-white"
            >
              [ SKIP INTRO // ESC ]
            </button>

            {/* Top Corner Telemetry */}
            <div className="absolute left-6 top-6 hidden font-mono text-[11px] text-white/40 sm:block">
              <p className="text-cyan-400">// PROTOCOL: DEDSEC_V2</p>
              <p className="text-white/25">NODE: 127.0.0.1:3000</p>
            </div>

            {/* MAIN HACKER REACTOR CORE */}
            <div
              className={`relative flex size-72 sm:size-88 items-center justify-center transition-all ${
                glitchActive
                  ? 'translate-x-[2px] translate-y-[-1px] filter hue-rotate-90'
                  : ''
              }`}
            >
              {/* Outer Calibration Hex Ring - GPU Accelerated */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 border-dashed reactor-spin-slow">
                {['0x00', '0x1F', '0x3E', '0x7C', '0xBA', 'xF8'].map((hex, i) => (
                  <span
                    key={hex}
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-8px)`,
                    }}
                    className="absolute left-1/2 top-0 -ml-3 font-mono text-[9px] text-cyan-400/60"
                  >
                    {hex}
                  </span>
                ))}
              </div>

              {/* Middle Stator Ring with Glitch Notches - GPU Accelerated */}
              <div className="absolute inset-6 rounded-full border-2 border-cyan-400/40 border-t-[#ff0077] border-b-[#ff0077] shadow-[0_0_25px_rgba(34,211,238,0.25)] reactor-spin-reverse">
                {[0, 90, 180, 270].map((deg) => (
                  <div
                    key={deg}
                    style={{ transform: `rotate(${deg}deg) translateY(-5px)` }}
                    className="absolute left-1/2 top-0 -ml-1 size-2 rounded-sm bg-[#ff0077] shadow-[0_0_10px_#ff0077]"
                  />
                ))}
              </div>

              {/* Inner High-Speed Cyber Ring - GPU Accelerated */}
              <div className="absolute inset-14 rounded-full border border-cyan-300/60 border-dotted shadow-[0_0_20px_#22d3ee] reactor-spin-fast" />

              {/* CENTRAL CORE EYE: Featuring Watch Dogs 2 8-bit DedSec Reaper */}
              <div className="relative flex size-28 sm:size-32 items-center justify-center rounded-full border-2 border-cyan-300/80 bg-black/95 p-2 shadow-[0_0_40px_#22d3ee,inset_0_0_25px_#22d3ee]">
                {/* 8-bit Reaper Graphic */}
                <div
                  className={`relative flex size-20 sm:size-24 items-center justify-center overflow-hidden rounded-full bg-black/90 transition-transform ${
                    glitchActive ? 'translate-x-0.5 filter drop-shadow-[2px_0_0_#00ffff]' : ''
                  }`}
                >
                  <img
                    src="/images/watchdogs/wd_reaper.jpg"
                    alt="DedSec Reaper"
                    className="size-full object-contain p-1 filter contrast-125"
                  />
                  {/* Glitch chromatic sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-60 animate-pulse pointer-events-none" />
                </div>

                {/* Pulsing Energy Beacon */}
                <span className="absolute -inset-1 rounded-full border border-[#ff0077]/40 animate-ping pointer-events-none" />
              </div>
            </div>

            {/* DEDSEC TELEMETRY & TERMINAL READOUT */}
            <div className="mt-8 flex flex-col items-center gap-2.5 text-center font-mono">
              {/* Cyber Progress Bar */}
              <div className="relative h-2 w-64 sm:w-80 overflow-hidden rounded-sm border border-cyan-400/30 bg-black/70 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-[#ff0077] to-cyan-300 transition-all duration-75 shadow-[0_0_12px_#22d3ee]"
                  style={{ width: `${Math.min(100, Math.floor(progress))}%` }}
                />
              </div>

              {/* Scrambling Glitch Terminal Text */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-cyan-300">
                <span className="inline-block size-2 bg-[#ff0077] shadow-[0_0_8px_#ff0077] animate-pulse" />
                <span className={glitchActive ? 'glitch-rgb' : ''}>
                  {hackerText}
                </span>
                <span className="text-[#ff0077] font-bold">
                  [{Math.min(100, Math.floor(progress))}%]
                </span>
              </div>

              <p className="text-[10px] sm:text-[11px] text-white/40 tracking-widest uppercase">
                ARITRA SARKAR // QUANTUM EXPLOIT INITIALIZED
              </p>

              {/* Equalizer Frequency Stream - GPU Keyframe Animated */}
              <div className="mt-1 flex items-end justify-center gap-1 h-3.5">
                {[0.4, 0.9, 0.5, 1, 0.45, 0.8, 0.3, 0.95, 0.65, 0.35].map(
                  (h, i) => (
                    <span
                      key={i}
                      className="w-1 rounded-none will-change-transform"
                      style={{
                        height: '100%',
                        transformOrigin: 'bottom',
                        backgroundColor: i % 3 === 0 ? '#ff0077' : '#22d3ee',
                        animation: `eq-pulse ${0.5 + (i % 4) * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
