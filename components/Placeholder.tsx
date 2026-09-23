'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Code2 } from 'lucide-react'

interface PlaceholderProps {
  label: string
  src?: string
  alt?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

export function Placeholder({
  label,
  src,
  alt = '',
  className = '',
  fill = false,
  width,
  height,
}: PlaceholderProps) {
  const [imageError, setImageError] = useState(false)

  if (src && !imageError) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt || label}
          fill={fill}
          width={!fill ? width || 600 : undefined}
          height={!fill ? height || 400 : undefined}
          className="size-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  return (
    <div className={`placeholder flex items-center justify-center ${className}`}>
      <div className="p-4 text-center">
        <div className="mx-auto mb-3 grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-cyan-300">
          <Code2 />
        </div>
        <span className="block text-xs uppercase tracking-[0.2em] text-white/40">
          {label}
        </span>
        <span className="mt-1 block text-[10px] text-white/25">
          {src ? `(Image not found: ${src})` : 'Place image in public/'}
        </span>
      </div>
    </div>
  )
}

