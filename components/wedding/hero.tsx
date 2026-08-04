'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { Flourish } from './ornaments'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <img
          src="/images/hero-arch.jpg"
          alt="Arche florale ivoire ornée d'une calligraphie dorée, encadrée de compositions de fleurs blanches"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Scrim for legibility */}
      <motion.div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-taupe/75 via-taupe/60 to-taupe/85"
        style={{ opacity: overlayOpacity }}
      />
      {/* Center vignette to focus the names */}
      <motion.div
        className="absolute inset-0 z-[1] [background:radial-gradient(ellipse_60%_55%_at_50%_45%,rgba(43,34,28,0.55),transparent_75%)]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center text-card"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1.1, ease }}
          className="font-sans text-[0.7rem] uppercase tracking-luxe text-card/90"
        >
          L&apos;union des familles
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: 1.1, ease }}
          className="mt-6 flex items-center justify-center gap-5 font-serif text-2xl font-light uppercase tracking-[0.25em] sm:text-3xl"
        >
          <span>Aouali</span>
          <span className="text-primary">&#10022;</span>
          <span>Chikhi</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.1, ease }}
          className="mx-auto mt-8 max-w-md font-sans text-sm font-light leading-relaxed text-card/85"
        >
          ont l&apos;immense plaisir de vous inviter
          <br />à célébrer le mariage de leurs enfants
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 1.3, ease }}
          className="mt-6 font-serif text-6xl font-normal italic leading-[0.9] tracking-[0.01em] [text-shadow:0_2px_30px_rgba(43,34,28,0.35)] sm:text-7xl lg:text-[7.5rem]"
        >
          <span className="block">Djihane</span>
          <span className="my-2 block font-script text-6xl not-italic text-primary sm:text-7xl">
            &amp;
          </span>
          <span className="block">Azzeddine</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.55, duration: 1.1, ease }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <Flourish className="text-card/70" />
          <p className="font-sans text-xs uppercase tracking-luxe text-card/90">
            Mercredi 09 Septembre 2026
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 1.1, ease }}
          className="mx-auto mt-8 max-w-xl font-sans text-sm font-light italic leading-relaxed text-card/80"
        >
          Nous serions profondément honorés de partager avec vous cette journée
          unique, remplie d&apos;émotions, d&apos;amour et de souvenirs
          inoubliables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.85, duration: 1.1, ease }}
          className="mt-10"
        >
          <a
            href="#compte-a-rebours"
            className="group inline-flex items-center gap-3 border border-card/60 px-9 py-3.5 font-sans text-[0.7rem] uppercase tracking-wide-lux text-card transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Découvrir notre journée
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#compte-a-rebours"
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-card/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 1 }}
      >
        <motion.span
          className="block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        >
          <ChevronDown size={26} strokeWidth={1} />
        </motion.span>
      </motion.a>
    </section>
  )
}
