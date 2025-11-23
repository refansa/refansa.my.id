'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait for providers to hydrate
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background transition-opacity duration-300"
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      <div className="flex flex-col items-center gap-8 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          className="h-48 w-48 overflow-visible"
        >
          {/* Paper/Note background */}
          <rect
            x="80"
            y="80"
            width="240"
            height="280"
            rx="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="opacity-50"
          />
          {/* Lines on paper */}
          <line
            x1="110"
            y1="160"
            x2="290"
            y2="160"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-30"
          />
          <line
            x1="110"
            y1="200"
            x2="290"
            y2="200"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-30"
          />
          <line
            x1="110"
            y1="240"
            x2="290"
            y2="240"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-30"
          />
          <line
            x1="110"
            y1="280"
            x2="290"
            y2="280"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-30"
          />

          {/* Scribble Path - Drawn before pen to be under it if they overlap, but pen is on top z-index wise usually */}
          <path
            d="M120 220 Q 150 180 180 220 T 240 220"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="scribble"
          />

          {/* Pen Body */}
          <g className="pen-animation">
            {/* Pen Tip */}
            <path d="M260 260 L280 300 L300 260 Z" fill="currentColor" />
            {/* Pen Shaft */}
            <rect x="260" y="100" width="40" height="160" fill="currentColor" />
            {/* Pen Cap/Top */}
            <rect x="250" y="80" width="60" height="20" rx="4" fill="currentColor" />
          </g>
        </svg>
        <span className="text-sm font-medium text-muted-foreground">Scribbling the page...</span>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scribble {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: scribble 2s ease-in-out infinite;
        }

        .pen-animation {
          /* Pen tip is at 280, 300 originally */
          transform-origin: 280px 300px;
          animation: write 2s ease-in-out infinite;
        }

        @keyframes scribble {
          0% { stroke-dashoffset: 200; opacity: 0; }
          15% { opacity: 1; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes write {
          0% { transform: translate(0, 0) rotate(0deg); }
          
          /* Start: (120, 220) -> (-160, -80) */
          15% { transform: translate(-160px, -80px) rotate(-15deg); }
          
          /* Peak 1: (150, 200) -> (-130, -100) */
          24% { transform: translate(-130px, -100px) rotate(-5deg); }
          
          /* Inflection: (180, 220) -> (-100, -80) */
          32% { transform: translate(-100px, -80px) rotate(5deg); }
          
          /* Dip 2: (210, 240) -> (-70, -60) */
          41% { transform: translate(-70px, -60px) rotate(-5deg); }
          
          /* End: (240, 220) -> (-40, -80) */
          50% { transform: translate(-40px, -80px) rotate(-15deg); }
          
          /* Lift and return */
          60% { transform: translate(-20px, -120px) rotate(0deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `,
        }}
      />
    </div>
  )
}
