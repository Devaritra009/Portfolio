'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/SectionHeading'
import { skills } from '@/lib/data'

export function SkillsSection() {
  const categoryKeys = Object.keys(skills)

  return (
    <section id="skills" className="section-wrap">
      <SectionHeading
        eyebrow="04 / Toolkit"
        title="A growing toolkit."
        copy="No fake percentages — just tools I enjoy using to make ideas tangible."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="glass-card h-full transition duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-white/90">{category}</h3>
                  <span className="font-mono text-xs text-cyan-300/50">
                    0{categoryKeys.indexOf(category) + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-sm text-white/70 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-200 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
