'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Placeholder } from '@/components/Placeholder'
import { SectionHeading } from '@/components/SectionHeading'
import { SectionSideGlow } from '@/components/SectionSideGlow'
import { GlowingBorderTile } from '@/components/ui/GlowingBorderTile'
import { Project, projects } from '@/lib/data'

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void
}

const categories = ['All', 'Web', 'IoT']

// Distinct futuristic beam palettes for each project
const projectThemes: Record<string, { c1: string; c2: string; duration: number }> = {
  '01': { c1: '#00f5ff', c2: '#38bdf8', duration: 4.8 }, // Cyber Cyan / Azure
  '02': { c1: '#ff0077', c2: '#a855f7', duration: 5.4 }, // Watch Dogs Magenta / Neon Purple
  '03': { c1: '#10b981', c2: '#2dd4bf', duration: 5.6 }, // Emerald / Spring Teal
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? projects : projects.filter((project) => project.type === filter)

  return (
    <section id="projects" className="section-wrap relative">
      {/* ATMOSPHERIC SIDE GLOW */}
      <SectionSideGlow
        leftColor="#8b5cf6"
        rightColor="#22d3ee"
        leftPosition="top-20"
        rightPosition="bottom-24"
        leftOpacity={0.14}
        rightOpacity={0.14}
      />

      <div className="relative z-10 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="03 / Selected work" title="Things I've built." />
        <div className="flex flex-wrap gap-2 pb-12">
          {categories.map((item) => (
            <Button
              key={item}
              onClick={() => setFilter(item)}
              variant="outline"
              className={`rounded-full border-white/10 text-xs ${
                filter === item
                  ? 'bg-white text-black hover:bg-white/90 hover:text-black'
                  : 'bg-transparent text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => {
          const theme = projectThemes[project.number] || {
            c1: '#22d3ee',
            c2: '#c084fc',
            duration: 5.0,
          }

          return (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="h-full"
            >
              <GlowingBorderTile
                color1={theme.c1}
                color2={theme.c2}
                duration={theme.duration}
                borderRadius="rounded-2xl"
                className="h-full cursor-pointer"
                innerClassName="flex flex-col h-full overflow-hidden bg-[#0c1220]/75 backdrop-blur-md"
                onClick={() => onSelectProject(project)}
              >
                {/* IMAGE SLOT: Configured per project in lib/data.ts */}
                <div
                  className={`relative aspect-[1.15] overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <Placeholder
                    label={`project-${project.number}.jpg`}
                    src={project.image}
                    alt={project.title}
                    fill
                    className="size-full"
                  />
                  <span className="absolute left-5 top-5 z-10 font-mono text-sm text-white/70 drop-shadow">
                    PROJECT {project.number}
                  </span>
                  <span className="absolute right-5 top-5 z-10 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    {project.type}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50 flex-1">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/5 text-xs font-normal text-white/55"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm text-cyan-300">
                    Explore project <ArrowUpRight />
                  </div>
                </div>
              </GlowingBorderTile>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

