'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionSideGlow } from '@/components/SectionSideGlow'
import { GlowingBorderTile } from '@/components/ui/GlowingBorderTile'

export function ContactSection() {
  return (
    <section id="contact" className="section-wrap relative pb-24">
      {/* ATMOSPHERIC SIDE GLOW */}
      <SectionSideGlow
        leftColor="#ff0077"
        rightColor="#22d3ee"
        leftPosition="top-16"
        rightPosition="bottom-16"
        leftOpacity={0.15}
        rightOpacity={0.15}
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full"
      >
        <GlowingBorderTile
          color1="#22d3ee"
          color2="#ff0077"
          duration={6.8}
          borderRadius="rounded-[2.2rem]"
          className="w-full"
          innerClassName="p-5 sm:p-10 lg:p-12 bg-gradient-to-br from-[#0c1220]/90 via-[#0a0f1d]/80 to-[#120e20]/90 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.06)]"
        >
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="eyebrow mb-4">05 / Contact</p>
              <h2 className="display text-3xl font-semibold tracking-tight xs:text-4xl sm:text-5xl lg:text-6xl">
                Let&apos;s make something <span className="gradient-text">real.</span>
              </h2>
              <p className="mt-5 max-w-sm leading-7 text-white/50 sm:mt-6">
                Have an idea, a question, or just want to say hello? My inbox is always open.
              </p>
              {/* SOCIAL ICON / IMAGE SLOTS */}
              <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
                <a aria-label="GitHub" href="https://github.com/Devaritra009" target="_blank" rel="noreferrer" className="social">
                  <img src="/images/github.png" alt="GitHub" className="size-8 object-contain" />
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/devaritra" target="_blank" rel="noreferrer" className="social">
                  <img src="/images/Linkedin.png" alt="LinkedIn" className="size-8 object-contain" />
                </a>
                <a aria-label="Instagram" href="https://instagram.com/who_is_aritra" target="_blank" rel="noreferrer" className="social">
                  <img src="/images/Insta.png" alt="Instagram" className="size-8 object-contain" />
                </a>
                <a aria-label="Email" href="mailto:aritrasarkarofficial027@gmail.com" className="social">
                  <Mail className="size-4" />
                </a>
              </div>
            </div>

            <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input aria-label="Name" placeholder="Your name" className="field" />
                <Input
                  aria-label="Email"
                  type="email"
                  placeholder="Email address"
                  className="field"
                />
              </div>
              <Input aria-label="Subject" placeholder="Subject" className="field" />
              <Textarea
                aria-label="Message"
                placeholder="Tell me a little about your idea..."
                className="field min-h-32 resize-none"
              />
              <Button
                type="submit"
                className="w-fit rounded-full bg-white px-6 text-[#070a12] hover:bg-cyan-200"
              >
                Send message <ArrowUpRight data-icon="inline-end" />
              </Button>
            </form>
          </div>
        </GlowingBorderTile>
      </motion.div>
    </section>
  )
}

