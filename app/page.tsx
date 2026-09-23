'use client'

import { useState, useCallback } from 'react'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ProjectModal } from '@/components/ProjectModal'
import { ReactorCoreIntro } from '@/components/ReactorCoreIntro'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { Project } from '@/lib/data'

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
  }, [])

  return (
    <>
      {/* Sci-Fi Reactor Core Opening Sequence */}
      {showIntro && <ReactorCoreIntro onComplete={handleIntroComplete} />}

      <main className="min-h-screen overflow-hidden bg-[#070a12] text-white">
        {/* Background Noise Layer */}
        <div className="noise" aria-hidden="true" />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Section 00: Hero / Home */}
      <HeroSection />

      {/* Section 01: About */}
      <AboutSection />

      {/* Section 02: Education */}
      <EducationSection />

      {/* Section 03: Projects */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* Section 04: Skills */}
      <SkillsSection />

      {/* Section 05: Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Selected Project Dialog / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
    </>
  )
}
