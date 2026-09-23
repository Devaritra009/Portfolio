'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  return (
    <section id="contact" className="section-wrap pb-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[.02] to-violet-400/10 p-6 sm:p-12 shadow-[0_0_50px_rgba(34,211,238,0.05)]"
      >
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">05 / Contact</p>
            <h2 className="display text-4xl font-semibold tracking-tight sm:text-6xl">
              Let&apos;s make something <span className="gradient-text">real.</span>
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-white/50">
              Have an idea, a question, or just want to say hello? My inbox is always open.
            </p>
            {/* SOCIAL ICON / IMAGE SLOTS */}
            <div className="mt-9 flex gap-3">
              <a aria-label="GitHub" href="https://github.com/Devaritra009" target="_blank" rel="noreferrer" className="social">
                <img src="/images/github.png" alt="GitHub" className="size-8 object-contain" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/devaritra" target="_blank" rel="noreferrer" className="social">
                <img src="/images/Linkedin.png" alt="LinkedIn" className="size-8 object-contain" />
              </a>
              <a aria-label="Instagram" href="https://instagram.com/who_is_aritra" target="_blank" rel="noreferrer" className="social">
                <img src="/images/Insta.png" alt="Instagram" className="size-8 object-contain" />
              </a>
              <a aria-label="Email" href="mailto:[aritrasarkarofficial027@gmail.com]" className="social">
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
      </motion.div>
    </section>
  )
}
