'use client'

import { useEffect, useState } from 'react'
import { FadeIn } from './fade-in'
import { Flourish } from './ornaments'

const TARGET = new Date('2026-09-09T16:00:00')

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET.getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

const labels: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Jours' },
  { key: 'hours', label: 'Heures' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Secondes' },
]

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="compte-a-rebours"
      className="relative overflow-hidden bg-card px-6 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="font-sans text-[0.7rem] uppercase tracking-luxe text-primary">
            Compte à rebours
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
            Le grand jour approche
          </h2>
          <div className="mt-6 flex justify-center">
            <Flourish />
          </div>
          <p className="mx-auto mt-6 max-w-lg font-sans text-sm font-light leading-relaxed text-muted-foreground">
            Chaque instant nous rapproche de cette journée que nous attendons
            avec tant de bonheur.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {labels.map(({ key, label }) => (
              <div
                key={key}
                className="flex flex-col items-center border border-border bg-background px-4 py-8 transition-colors duration-500 hover:border-primary/60"
              >
                <span className="font-serif text-5xl font-light tabular-nums text-foreground lg:text-6xl">
                  {time ? String(time[key]).padStart(2, '0') : '--'}
                </span>
                <span className="mt-3 font-sans text-[0.65rem] uppercase tracking-wide-lux text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
