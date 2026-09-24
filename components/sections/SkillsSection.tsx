'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionSideGlow } from '@/components/SectionSideGlow'
import { GlowingBorderTile } from '@/components/ui/GlowingBorderTile'
import { SkillIcon } from '@/components/SkillIcon'
import { skills } from '@/lib/data'

// Distinct glowing border themes for each toolkit category
const skillCategoryThemes: Record<string, { c1: string; c2: string; duration: number }> = {
  Programming: { c1: '#00f5ff', c2: '#3b82f6', duration: 4.8 }, // Electric Cyan & Blue
  'Web Development': { c1: '#c084fc', c2: '#e879f9', duration: 5.3 }, // Neon Violet & Fuchsia
  Technology: { c1: '#10b981', c2: '#34d399', duration: 5.6 }, // Matrix Emerald & Mint
  Other: { c1: '#f59e0b', c2: '#f43f5e', duration: 5.1 }, // Solar Amber & Neon Rose
}

export function SkillsSection() {
  const categoryKeys = Object.keys(skills)

  return (
    <section id="skills" className="section-wrap relative">
      {/* ATMOSPHERIC SIDE GLOW */}
      <SectionSideGlow
        leftColor="#14b8a6"
        rightColor="#c084fc"
        leftPosition="top-16"
        rightPosition="bottom-20"
        leftOpacity={0.14}
        rightOpacity={0.14}
      />

      <SectionHeading
        eyebrow="04 / Toolkit"
        title="A growing toolkit."
        copy="No fake percentages — just tools I enjoy using to make ideas tangible."
      />
      <div className="relative z-10 grid gap-5 sm:gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => {
          const theme = skillCategoryThemes[category] || {
            c1: '#22d3ee',
            c2: '#818cf8',
            duration: 5.0,
          }

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <GlowingBorderTile
                color1={theme.c1}
                color2={theme.c2}
                duration={theme.duration}
                borderRadius="rounded-2xl"
                className="h-full"
                innerClassName="p-5 sm:p-7 bg-[#0c1220]/75 backdrop-blur-md"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-semibold text-lg sm:text-xl text-white/90">{category}</h3>
                  <span className="font-mono text-xs text-cyan-300/60">
                    0{categoryKeys.indexOf(category) + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="group/pill inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs sm:text-sm text-white/80 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_0_16px_rgba(34,211,238,0.25)] hover:scale-[1.02]"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center transition-transform duration-300 group-hover/pill:scale-110">
                        <SkillIcon name={skill} className="size-full object-contain drop-shadow" />
                      </div>
                      <span className="font-medium tracking-wide text-white/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </GlowingBorderTile>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
