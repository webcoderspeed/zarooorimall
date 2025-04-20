"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  hours: number
}

export default function CountdownTimer({ hours }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          // Reset to initial time when countdown reaches zero
          return { hours, minutes: 0, seconds: 0 }
        }

        let newHours = prev.hours
        let newMinutes = prev.minutes
        let newSeconds = prev.seconds - 1

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [hours])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0")
  }

  return (
    <div className="flex items-center gap-1 font-mono font-bold">
      <div className="bg-black/20 backdrop-blur-sm rounded px-2 py-1">{formatTime(timeLeft.hours)}</div>
      <span>:</span>
      <div className="bg-black/20 backdrop-blur-sm rounded px-2 py-1">{formatTime(timeLeft.minutes)}</div>
      <span>:</span>
      <div className="bg-black/20 backdrop-blur-sm rounded px-2 py-1">{formatTime(timeLeft.seconds)}</div>
    </div>
  )
}
