'use client'

import React from 'react'

interface SectionSideGlowProps {
  leftColor?: string   // Hex or color token, e.g. '#8b5cf6', '#22d3ee', '#10b981'
  rightColor?: string  // Hex or color token, e.g. '#22d3ee', '#c084fc', '#ff0077'
  leftPosition?: string  // Top position class, e.g. 'top-12', 'top-1/4', 'top-1/3'
  rightPosition?: string // Top position class, e.g. 'top-20', 'top-1/2', 'bottom-16'
  leftOpacity?: number   // default 0.14
  rightOpacity?: number  // default 0.14
}

/**
 * SectionSideGlow
 * Renders atmospheric cyber side glow orbs along section boundaries.
 * Unclipped to blend naturally across the entire dark background like the Hero section.
 */
export function SectionSideGlow({
  leftColor = '#8b5cf6',
  rightColor = '#22d3ee',
  leftPosition = 'top-1/4',
  rightPosition = 'top-1/3',
}: SectionSideGlowProps) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* LEFT SIDE GLOW ORB */}
      <div
        style={{ backgroundColor: leftColor }}
        className={`absolute -left-36 sm:-left-56 ${leftPosition} size-72 sm:size-96 rounded-full blur-[90px] side-glow-left-anim`}
      />

      {/* RIGHT SIDE GLOW ORB */}
      <div
        style={{ backgroundColor: rightColor }}
        className={`absolute -right-36 sm:-right-56 ${rightPosition} size-72 sm:size-96 rounded-full blur-[90px] side-glow-right-anim`}
      />
    </div>
  )
}
