'use client'

import { Code2, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Placeholder } from '@/components/Placeholder'
import { Project } from '@/lib/data'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="border-white/10 bg-[#101522] text-white sm:max-w-lg">
        <DialogTitle className="display text-2xl">
          {project?.title}
        </DialogTitle>
        {project && (
          <div>
            {/* IMAGE SLOT: Displays project image or gradient placeholder */}
            <div
              className={`mt-4 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
            >
              <Placeholder
                label={project.title}
                src={project.image}
                alt={project.title}
                className="aspect-video w-full"
              />
            </div>
            <p className="mt-5 leading-7 text-white/55">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} className="bg-cyan-300/10 text-cyan-200">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-full bg-white text-black hover:bg-cyan-200">
                GitHub <Code2 data-icon="inline-end" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/15 hover:bg-white/10 hover:text-white"
              >
                Live demo <ExternalLink data-icon="inline-end" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
