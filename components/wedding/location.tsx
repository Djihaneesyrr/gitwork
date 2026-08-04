'use client'

import { MapPin, Navigation } from 'lucide-react'
import { FadeIn } from './fade-in'
import { Flourish } from './ornaments'

const MAPS_QUERY = 'Bordj El Kiffan, Alger, Algérie'
const EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  'Bordj El Kiffan, Alger, Algérie',
)}&z=13&output=embed`
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_QUERY,
)}`

export function Location() {
  return (
    <section id="lieu" className="bg-background px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="font-sans text-[0.7rem] uppercase tracking-luxe text-primary">
            Informations pratiques
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
            Le lieu de réception
          </h2>
          <div className="mt-6 flex justify-center">
            <Flourish />
          </div>
        </FadeIn>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Photo + details */}
          <FadeIn>
            <div className="flex h-full flex-col overflow-hidden border border-border bg-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/venue-real.webp"
                  alt="Scène de mariage immaculée blanche et or, canapé central entouré de compositions florales, chandeliers dorés et voilages"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-8 py-10 text-center">
                <MapPin size={20} strokeWidth={1.4} className="text-primary" />
                <h3 className="mt-4 font-serif text-3xl font-light text-foreground">
                  Salle des Rêves
                </h3>
                <p className="mt-2 font-sans text-[0.7rem] uppercase tracking-wide-lux text-muted-foreground">
                  Bordj El Kiffan, Alger, Algérie
                </p>
                <p className="mt-5 max-w-sm font-sans text-sm font-light leading-relaxed text-muted-foreground">
                  Un écrin d&apos;élégance qui accueillera notre célébration.
                  Nous vous y attendons avec impatience pour partager ce moment
                  d&apos;exception.
                </p>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 border border-primary/70 px-8 py-3.5 font-sans text-[0.7rem] uppercase tracking-wide-lux text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
                >
                  <Navigation size={15} strokeWidth={1.6} />
                  Ouvrir l&apos;itinéraire
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={0.15}>
            <div className="h-full min-h-80 overflow-hidden border border-border">
              <iframe
                title="Carte — Salle des Rêves, Bordj El Kiffan, Alger"
                src={EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-80 w-full grayscale-[0.25]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
