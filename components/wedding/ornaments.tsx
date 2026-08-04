import { cn } from '@/lib/utils'

/* A small refined horizontal flourish used between titles */
export function Flourish({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-primary', className)}
      width="140"
      height="16"
      viewBox="0 0 140 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8H55"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M138 8H85"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M70 2.5c-3.2 2.1-5 3.6-5 5.5s1.8 3.4 5 5.5c3.2-2.1 5-3.6 5-5.5s-1.8-3.4-5-5.5Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="8" r="1.4" fill="currentColor" />
      <circle cx="80" cy="8" r="1.4" fill="currentColor" />
    </svg>
  )
}

/* Monogram DA inside an oval frame */
export function Monogram({
  className,
  size = 56,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      className={cn('text-primary', className)}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Monogramme D et A"
      role="img"
    >
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="46"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="39"
        ry="41"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.6"
      />
      <text
        x="34"
        y="60"
        fontFamily="Georgia, serif"
        fontSize="30"
        fill="currentColor"
      >
        D
      </text>
      <line
        x1="50"
        y1="30"
        x2="50"
        y2="70"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <text
        x="55"
        y="60"
        fontFamily="Georgia, serif"
        fontSize="30"
        fill="currentColor"
      >
        A
      </text>
    </svg>
  )
}

/* Delicate corner floral line-art used as a subtle decoration */
export function FloralCorner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-primary/45', className)}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M210 10c-40 6-72 20-98 44C82 82 62 116 52 158c-6 26-8 42-8 52"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M186 34c-8 2-15 8-18 16-2 6-1 12 3 16 5-1 11-6 14-14 3-8 3-14 1-18Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M150 66c-8 3-14 10-16 18-1 6 1 11 5 14 5-2 10-8 12-16 2-8 1-13-1-16Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M116 104c-8 4-13 12-14 20-1 5 2 10 6 12 4-3 9-9 10-17 1-8 0-13-2-15Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M84 146c-7 5-11 13-11 21 0 5 3 9 7 11 4-4 8-11 8-19 0-8-2-12-4-13Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="196" cy="24" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  )
}
