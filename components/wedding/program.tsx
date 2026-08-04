'use client'

import { motion } from 'framer-motion'
import {
  Cake,
  Moon,
  Music,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wine,
  type LucideIcon,
} from 'lucide-react'
import { FadeIn } from './fade-in'
import { Flourish } from './ornaments'

type Event = {
  time: string
  title: string
  description: string
  Icon: LucideIcon
}

const events: Event[] = [
  {
    time: '16h00',
    title: 'Accueil des invités & entrée des mariés',
    description:
      'Nous ouvrirons cette journée exceptionnelle entourés de nos familles et amis, dans une atmosphère remplie d’émotion, de joie et de douceur.',
    Icon: Users,
  },
  {
    time: '17h00',
    title: 'Cocktail & rafraîchissements',
    description:
      'Un moment de convivialité pour partager les premiers instants de cette belle célébration autour de délicates gourmandises.',
    Icon: Wine,
  },
  {
    time: '17h30',
    title: 'Cérémonie de la Tesdira',
    description:
      'Un moment fort en émotion mettant à l’honneur nos traditions et la richesse de notre héritage.',
    Icon: Sparkles,
  },
  {
    time: '19h30',
    title: 'Dîner de célébration',
    description:
      'Un dîner raffiné partagé avec celles et ceux qui nous sont chers.',
    Icon: UtensilsCrossed,
  },
  {
    time: '21h00',
    title: 'Entrée de la mariée & pièce montée',
    description:
      'Un instant magique marqué par l’entrée de la mariée dans sa robe blanche, suivi de la traditionnelle découpe de la pièce montée.',
    Icon: Cake,
  },
  {
    time: '21h30',
    title: 'Soirée dansante',
    description:
      'Place à la fête, aux sourires, aux éclats de rire et aux souvenirs qui resteront gravés dans nos cœurs.',
    Icon: Music,
  },
  {
    time: '23h30',
    title: 'Fin de la célébration',
    description:
      'Nous terminerons cette journée le cœur rempli d’émotions et de merveilleux souvenirs.',
    Icon: Moon,
  },
]

export function Program() {
  return (
    <section id="programme" className="bg-card px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <p className="font-sans text-[0.7rem] uppercase tracking-luxe text-primary">
            Le déroulé de la journée
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
            Programme des festivités
          </h2>
          <div className="mt-6 flex justify-center">
            <Flourish />
          </div>
        </FadeIn>

        <div className="relative mt-20">
          {/* Central line */}
          <div className="absolute left-6 top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-12 md:space-y-4">
            {events.map((event, i) => {
              const left = i % 2 === 0
              return (
                <li key={event.title} className="relative md:min-h-[7rem]">
                  <div
                    className={`grid gap-x-8 md:grid-cols-2 md:items-center ${
                      left ? '' : 'md:[&>*:first-child]:col-start-2'
                    }`}
                  >
                    <FadeIn
                      y={24}
                      className={`pl-16 md:pl-0 ${
                        left ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'
                      }`}
                    >
                      <span className="font-serif text-3xl font-light text-primary">
                        {event.time}
                      </span>
                      <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
                        {event.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                        {event.description}
                      </p>
                    </FadeIn>
                  </div>

                  {/* Icon node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-6 top-1 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-primary/60 bg-card text-primary md:left-1/2"
                  >
                    <event.Icon size={18} strokeWidth={1.4} />
                  </motion.div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
