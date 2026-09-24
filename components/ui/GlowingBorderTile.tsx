'use client'

import React from 'react'

export interface GlowingBorderTileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  color1?: string // Primary beam color (e.g., '#00f5ff')
  color2?: string // Secondary beam color (e.g., '#818cf8')
  duration?: number // Rotation speed in seconds (default: 4.5)
  borderRadius?: string // e.g. 'rounded-xl', 'rounded-2xl', 'rounded-[2rem]'
  className?: string // Outer container className
  innerClassName?: string // Inner content container className
  showAura?: boolean // Whether to show ambient outer glow (default: true)
  borderWidth?: number // Border thickness in px (default: 2)
}

/**
 * GlowingBorderTile
 * High-performance, GPU-optimized continuous rotating border glow.
 * Sized with geometric precision to avoid viewport fill rate throttling.
 */
export function GlowingBorderTile({
  children,
  color1 = '#00f5ff',
  color2 = '#8b5cf6',
  duration = 4.5,
  borderRadius = 'rounded-2xl',
  className = '',
  innerClassName = '',
  showAura = true,
  borderWidth = 2,
  ...props
}: GlowingBorderTileProps) {
  // Luminous 180-degree comet beam that sweeps continuously around the card perimeter
  const gradient = `conic-gradient(from 0deg, transparent 0deg 170deg, ${color1} 220deg, ${color2} 280deg, #ffffff 330deg, ${color1} 360deg)`

  return (
    <div
      className={`group/tile relative ${borderRadius} ${className}`}
      {...props}
    >
      {/* 1. LIGHTWEIGHT OPTIMIZED AMBIENT NEON GLOW */}
      {showAura && (
        <div
          className={`pointer-events-none absolute -inset-1.5 ${borderRadius} overflow-hidden blur-md opacity-75 transition-opacity duration-300 group-hover/tile:opacity-95`}
          aria-hidden="true"
        >
          <div
            className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              width: 'max(200%, 800px)',
              animation: `border-beam-spin ${duration}s linear infinite`,
              background: gradient,
            }}
          />
        </div>
      )}

      {/* 2. SHARP ROTATING LASER BORDER BEAM */}
      <div
        className={`relative ${borderRadius} overflow-hidden size-full transition-transform duration-300 group-hover/tile:-translate-y-0.5 bg-transparent`}
        style={{ padding: `${borderWidth}px` }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            width: 'max(200%, 800px)',
            animation: `border-beam-spin ${duration}s linear infinite`,
            background: gradient,
          }}
          aria-hidden="true"
        />

        {/* 3. SOLID INNER CARD BACKDROP */}
        <div
          className={`relative z-10 size-full ${borderRadius} ${
            innerClassName.includes('bg-') ? innerClassName : `bg-[#0b0f1a] ${innerClassName}`
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
