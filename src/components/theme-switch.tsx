'use client'

import { useTheme } from 'next-themes'

import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState, HTMLAttributes } from 'react'
import { Button } from './ui/button'

type SVGProps = Omit<HTMLAttributes<HTMLOrSVGElement>, 'onChange'>

export interface Props extends SVGProps {
  onChange?: (checked: boolean) => void
  size?: number | string
  moonColor?: string
  sunColor?: string
  starterId?: number
}

export function ThemeSwitch({
  onChange,
  size = 24,
  moonColor = 'white',
  sunColor = 'dark',
  starterId = 0,
}: Props) {
  const { theme, systemTheme, setTheme } = useTheme()

  const [id] = useState(() => starterId + Math.random())

  useEffect(() => {
    // If the theme is currently using system theme, set the theme according to the system theme value.
    if (theme === 'system') {
      setTheme(systemTheme as 'dark' | 'light')
    }
  }, [theme, systemTheme, setTheme])

  const properties = {
    circle: {
      r: theme === 'dark' ? 9 : 5,
    },
    mask: {
      cx: theme === 'dark' ? '50%' : '100',
      cy: theme === 'dark' ? '23%' : '0%',
    },
    svg: {
      transform: theme === 'dark' ? 'rotate(40deg)' : 'rotate(90deg)',
    },
    lines: {
      opacity: theme === 'dark' ? 0 : 1,
    },
    config: { mass: 4, tension: 250, friction: 35 },
  }

  const svgContainerProps = useSpring({
    ...properties.svg,
    config: properties.config,
  })

  const centerCircleProps = useSpring({
    ...properties.circle,
    config: properties.config,
  })
  const maskedCircleProps = useSpring({
    ...properties.mask,
    config: properties.config,
  })
  const linesProps = useSpring({
    ...properties.lines,
    config: properties.config,
  })

  const uniqueMaskId = `circle-mask-${id}`

  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    onChange && onChange(theme === 'dark')
  }

  return (
    <Button onClick={toggle} variant="ghost" size="icon">
      <div className="flex items-center w-5 h-5 bg-transparent">
        <animated.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          color={theme === 'dark' ? moonColor : sunColor}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          style={{
            cursor: 'pointer',
            ...svgContainerProps,
          }}
        >
          <mask id={uniqueMaskId}>
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <animated.circle
              // @ts-ignore
              style={maskedCircleProps}
              r="9"
              fill="black"
            />
          </mask>

          <animated.circle
            cx="12"
            cy="12"
            fill={theme === 'dark' ? moonColor : sunColor}
            // @ts-ignore
            style={centerCircleProps}
            mask={`url(#${uniqueMaskId})`}
          />
          <animated.g stroke="currentColor" style={linesProps}>
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </animated.g>
        </animated.svg>
      </div>
    </Button>
  )
}
