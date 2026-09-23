'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Placeholder } from '@/components/Placeholder'
import { SectionHeading } from '@/components/SectionHeading'
import { educationItems } from '@/lib/data'

export function EducationSection() {
  return (
    <section id="education" className="section-wrap">
      <SectionHeading eyebrow="02 / Education" title="The foundations." />
      
      <div className="relative ml-3 border-l border-cyan-300/25 pl-8 sm:ml-8 sm:pl-12">
        {educationItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-7 last:mb-0"
          >
            <span className="absolute -left-[calc(2rem+7px)] top-7 size-3 rounded-full border-2 border-cyan-300 bg-[#070a12] shadow-[0_0_16px_#67e8f9] sm:-left-[calc(3rem+7px)]" />
            <Card className="glass-card">
              <CardContent className="grid gap-5 p-5 sm:grid-cols-[120px_1fr_120px_auto] sm:items-center">
                <span className="font-mono text-sm text-cyan-300">{item.year}</span>
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/45">{item.school}</p>
                </div>
                {/* IMAGE SLOT: Each education item in lib/data.ts can specify a logo or image path */}
                <Placeholder
                  label="institution.jpg"
                  src={item.logo}
                  alt={item.school}
                  className="aspect-[4/3] rounded-xl"
                />
                {(() => {
                  const isCompleted = item.status.toLowerCase().includes('complete')
                  const isPursuing = item.status.toLowerCase().includes('pursu')
                  return (
                    <div
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-medium tracking-wide transition-all duration-300 select-none ${
                        isCompleted
                          ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.35)] hover:shadow-[0_0_24px_rgba(52,211,153,0.65)] hover:border-emerald-300'
                          : isPursuing
                          ? 'border-amber-400/50 bg-amber-500/15 text-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.35)] hover:shadow-[0_0_24px_rgba(251,191,36,0.65)] hover:border-amber-300'
                          : 'border-white/10 text-white/50'
                      }`}
                    >
                      <span
                        className={`size-2 rounded-full ${
                          isCompleted
                            ? 'bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse'
                            : isPursuing
                            ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse'
                            : 'bg-white/40'
                        }`}
                      />
                      {item.status}
                    </div>
                  )
                })()}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
