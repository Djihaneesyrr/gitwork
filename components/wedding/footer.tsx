import { Monogram } from './ornaments'

export function Footer() {
  return (
    <footer className="bg-background px-6 py-16 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto mb-8 h-px w-24 bg-primary/50" />
        <div className="flex justify-center">
          <Monogram size={56} />
        </div>
        <p className="mt-6 font-serif text-2xl font-light text-foreground">
          Djihane <span className="text-primary">&amp;</span> Azzeddine
        </p>
        <p className="mt-3 font-sans text-[0.65rem] uppercase tracking-luxe text-muted-foreground">
          09 · 09 · 2026 — Bordj El-Kiffan, Algérie
        </p>
        <p className="mt-8 font-sans text-[0.65rem] uppercase tracking-wide-lux text-muted-foreground/70">
          Avec amour
        </p>
      </div>
    </footer>
  )
}
