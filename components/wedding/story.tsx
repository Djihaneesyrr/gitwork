'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FadeIn } from './fade-in'
import { FloralCorner } from './ornaments'

export function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="histoire" className="relative overflow-hidden bg-background px-6 py-28 lg:py-36">
      <FloralCorner className="pointer-events-none absolute -right-6 top-10 hidden lg:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image with arched frame */}
        <FadeIn className="order-1">
          <div
            ref={ref}
            className="relative mx-auto max-w-md overflow-hidden rounded-t-[999px] border border-primary/30 shadow-[0_30px_60px_-30px_rgba(74,58,49,0.35)]"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <motion.img
                src="/images/story.png"
                alt="Table de réception dressée avec des roses blanches, des bougies et de la vaisselle dorée"
                style={{ y: imageY }}
                className="h-[116%] w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-t-[999px] ring-1 ring-inset ring-card/30" />
          </div>
        </FadeIn>

        {/* Text */}
        <div className="order-2">
          <FadeIn>
            <p className="font-sans text-[0.7rem] uppercase tracking-luxe text-primary">
              Notre histoire
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Le début d&apos;une
              <span className="mt-1 block font-script text-5xl text-primary sm:text-6xl">
                belle aventure
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 space-y-5 font-sans text-sm font-light leading-relaxed text-muted-foreground">
              <p>Deux familles, deux histoires, un même destin.</p>
              <p>
                Depuis notre rencontre, nous avançons main dans la main avec une
                seule certitude&nbsp;: construire ensemble une vie remplie
                d&apos;amour, de confiance et de bonheur.
              </p>
              <p>
                Aujourd&apos;hui, nous serions heureux de partager ce nouveau
                chapitre avec les personnes qui comptent le plus à nos yeux.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-10 font-script text-3xl text-foreground/80">
              Djihane &amp; Azzeddine
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
