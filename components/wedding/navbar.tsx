'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Monogram } from './ornaments'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Le Grand Jour', href: '#compte-a-rebours' },
  { label: 'Notre Histoire', href: '#histoire' },
  { label: 'Programme', href: '#programme' },
  { label: 'Le Lieu', href: '#lieu' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-700',
        scrolled
          ? 'border-b border-border/60 bg-background/85 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Left links */}
        <ul
          className={cn(
            'hidden flex-1 items-center gap-8 text-[0.7rem] uppercase tracking-wide-lux lg:flex',
            scrolled ? 'text-foreground' : 'text-card',
          )}
        >
          {links.slice(0, 3).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center monogram */}
        <a
          href="#accueil"
          aria-label="Retour à l'accueil"
          className="flex items-center justify-center lg:flex-none"
        >
          <Monogram
            size={scrolled ? 44 : 52}
            className="transition-all duration-500"
          />
        </a>

        {/* Right links */}
        <ul
          className={cn(
            'hidden flex-1 items-center justify-end gap-8 text-[0.7rem] uppercase tracking-wide-lux lg:flex',
            scrolled ? 'text-foreground' : 'text-card',
          )}
        >
          {links.slice(3).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#remerciements"
              className="border border-primary/70 px-5 py-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Remerciements
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={cn(
            'lg:hidden',
            scrolled || open ? 'text-foreground' : 'text-card',
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          'overflow-hidden bg-background/98 backdrop-blur-md transition-all duration-500 lg:hidden',
          open ? 'max-h-96 border-t border-border/60' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-5 px-8 py-8 text-center text-xs uppercase tracking-wide-lux text-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#remerciements"
              onClick={() => setOpen(false)}
              className="mx-auto inline-block border border-primary/70 px-6 py-2 text-primary"
            >
              Remerciements
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
