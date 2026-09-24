'use client'

import { useMotionValue, useSpring, useTransform, motion } from 'motion/react'
import { ArrowUpRight, Mail, Zap } from 'lucide-react'
import { Placeholder } from '@/components/Placeholder'
import { GlowingBorderTile } from '@/components/ui/GlowingBorderTile'

export function HeroSection() {
  // Interactive mouse tracking with fluid spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 60 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Side glow reactive offsets
  const cyanOffset = useTransform(smoothX, [-500, 500], [60, -60])
  const cyanOffsetY = useTransform(smoothY, [-300, 300], [-40, 40])
  const purpleOffset = useTransform(smoothX, [-500, 500], [-60, 60])
  const purpleOffsetY = useTransform(smoothY, [-300, 300], [40, -40])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32 sm:px-8"
    >
      {/* INTERACTIVE RIGHT CYAN GLOW */}
      <motion.div
        style={{ x: cyanOffset, y: cyanOffsetY }}
        animate={{
          scale: [1, 1.18, 0.96, 1],
          opacity: [0.15, 0.22, 0.14, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="glow glow-cyan transition-transform"
      />

      {/* INTERACTIVE LEFT PURPLE GLOW */}
      <motion.div
        style={{ x: purpleOffset, y: purpleOffsetY }}
        animate={{
          scale: [1, 0.94, 1.16, 1],
          opacity: [0.14, 0.22, 0.12, 0.14],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="glow glow-purple transition-transform"
      />

      {/* INTERACTIVE MOUSE SPOTLIGHT AURA */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -ml-40 -mt-40 size-80 rounded-full bg-cyan-400/[0.06] blur-[80px]"
      />

      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span>CS student · builder · explorer</span>
            <span className="inline-block size-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] animate-pulse" />
          </p>
          <h1 className="display max-w-3xl text-4xl leading-[1.04] font-semibold tracking-[-.05em] xs:text-5xl sm:text-7xl sm:leading-[.98] lg:text-8xl">
            Designing what&apos;s <span className="gradient-text glitch-auto">next.</span>
          </h1>
          <p className="font-crustaceans mt-6 max-w-2xl text-xl leading-relaxed text-cyan-100/90 tracking-wide drop-shadow-[0_0_12px_rgba(103,232,249,0.35)] sm:mt-7 sm:text-2xl md:text-3xl">
            Hi, I&apos;m{' '}
            <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">Aritra Sarkar</span> — a Computer
            Science student exploring web development, IoT, cybersecurity, and creative
            technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
            <a
              href="#projects"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-medium text-[#061018] transition hover:bg-cyan-200"
            >
              View projects <ArrowUpRight />
            </a>
            <a
              href="#contact"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact me <Mail />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-7 flex flex-wrap gap-2">
            <a href="mailto:[EMAIL_ADDRESS]" aria-label="Email" className="social">
              <Mail className="size-6" />
            </a>
            <a href="https://www.linkedin.com/in/devaritra/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social">
              <img src="/images/Linkedin.png" alt="LinkedIn" className="size-8 object-contain" />
            </a>
            <a href="https://instagram.com/who_is_aritra" target="_blank" rel="noreferrer" aria-label="Instagram" className="social">
              <img src="/images/Insta.png" alt="Instagram" className="size-8 object-contain" />
            </a>
            <a href="https://github.com/Devaritra009" target="_blank" rel="noreferrer" aria-label="GitHub" className="social">
              <img src="/images/github.png" alt="GitHub" className="size-8 object-contain" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/40 sm:mt-12 sm:gap-6">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
              Available for collaboration
            </span>
            <span className="hidden sm:block">Kolkata, India</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md"
        >
          <div className="absolute -inset-5 rounded-[3rem] bg-cyan-400/10 blur-3xl pointer-events-none" />
          <GlowingBorderTile
            color1="#22d3ee"
            color2="#38bdf8"
            duration={5}
            borderRadius="rounded-[2.5rem]"

            className="w-full"
            innerClassName="aspect-[.9] p-3 overflow-hidden bg-gradient-to-br from-cyan-300/15 via-[#101727] to-violet-500/15"
          >
            {/* HERO PROFILE PHOTO */}
            <div className="relative size-full overflow-hidden rounded-[2rem]">
              <Placeholder
                label="profile photo"
                src="/images/hero.png"
                alt="Aritra Sarkar Profile"
                fill
                className="h-full rounded-[2rem]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <div>
                  <p className="text-xs text-white/40">Currently learning</p>
                  <p className="mt-1 font-medium">Systems &amp; possibilities</p>
                </div>
                <Zap className="text-cyan-300 drop-shadow-[0_0_8px_#22d3ee]" />
              </div>
            </div>
          </GlowingBorderTile>
        </motion.div>
      </div>
    </section>
  )
}

