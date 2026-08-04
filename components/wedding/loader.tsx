'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Monogram } from './ornaments'

export function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200)
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!visible) document.body.style.overflow = ''
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Monogram size={72} />
          </motion.div>

          <motion.div
            className="mt-8 h-px overflow-hidden bg-primary/30"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.p
            className="mt-6 font-sans text-[0.65rem] uppercase tracking-luxe text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Djihane &amp; Azzeddine
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
