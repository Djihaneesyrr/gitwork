'use client'

import { FadeIn } from './fade-in'
import { Flourish, FloralCorner } from './ornaments'

export function ThankYou() {
  return (
    <section
      id="remerciements"
      className="relative overflow-hidden bg-card px-6 py-32 lg:py-44"
    >
      <FloralCorner className="pointer-events-none absolute -left-8 bottom-0 hidden -scale-x-100 lg:block" />
      <FloralCorner className="pointer-events-none absolute -right-8 top-0 hidden -scale-y-100 lg:block" />

      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="font-sans text-[0.7rem] uppercase tracking-luxe text-primary">
            Avec toute notre gratitude
          </p>
          <div className="mt-6 flex justify-center">
            <Flourish />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 font-serif text-2xl font-light leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
            Votre présence à nos côtés sera le plus beau des cadeaux. Merci de
            partager avec nous ce moment si précieux. Nous avons hâte de vivre
            cette journée exceptionnelle en votre compagnie.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14">
            <p className="font-script text-5xl text-foreground sm:text-6xl">
              Djihane
            </p>
            <p className="my-2 font-serif text-3xl font-light text-primary">
              &amp;
            </p>
            <p className="font-script text-5xl text-foreground sm:text-6xl">
              Azzeddine
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
