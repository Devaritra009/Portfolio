'use client'

import { motion } from 'motion/react'
import { Placeholder } from '@/components/Placeholder'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionSideGlow } from '@/components/SectionSideGlow'
import { GlowingBorderTile } from '@/components/ui/GlowingBorderTile'

export function AboutSection() {
  return (
    <section id="about" className="section-wrap relative">
      {/* ATMOSPHERIC SIDE GLOW */}
      <SectionSideGlow
        leftColor="#22d3ee"
        rightColor="#a855f7"
        leftPosition="top-16"
        rightPosition="bottom-20"
        leftOpacity={0.15}
        rightOpacity={0.15}
      />

      <SectionHeading
        eyebrow="01 / About"
        title="Curious by default. Intentional by design."
        copy="I like turning complex ideas into simple, useful experiences. My work sits at the intersection of code, hardware, and visual thinking."
      />
      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-violet-400/10 blur-2xl pointer-events-none" />
          <GlowingBorderTile
            color1="#a855f7"
            color2="#ec4899"
            duration={6}
            borderRadius="rounded-[2.2rem]"
            className="w-full"
            innerClassName="p-2 overflow-hidden bg-[#0c101c]"
          >
            <Placeholder
              label="about photo"
              src="/images/10.png"
              alt="Aritra Sarkar About Photo"
              className="aspect-square w-full rounded-[1.8rem] transition duration-500 hover:scale-[1.02]"
            />
          </GlowingBorderTile>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl"
        >
          <p className="text-xl leading-9 text-white/85">
            I&apos;m currently pursuing a Bachelor of Science in Computer Science at
            Sammilani Mahavidyalaya. From wiring up an ESP32 to composing a polished
            interface, I&apos;m always looking for the next thing to understand.
          </p>
          <p className="mt-6 text-base leading-8 text-white/60">
            I enjoy learning by building, experimenting with ideas, and finding the balance
            between thoughtful engineering and expressive design. Whether I&apos;m
            developing a web experience, connecting hardware, or exploring cybersecurity,
            I care about making technology feel clear, useful, and genuinely human.
          </p>
          <p className="mt-6 text-base leading-8 text-white/60">
            This portfolio is a small window into that journey. There is always another
            concept to explore, another problem to solve, and another opportunity to turn
            curiosity into something people can use.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

