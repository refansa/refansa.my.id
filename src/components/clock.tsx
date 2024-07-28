'use client'

import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState(
    new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Asia/Jakarta',
    }),
  )

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'Asia/Jakarta',
        }),
      )
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  return (
    <div className="font-bold text-lg md:text-xl">
      <span>{time.format()}</span>
      <span className="md:inline hidden"> - </span>
      <span className="md:inline hidden">Jakarta</span>
    </div>
  )
}
