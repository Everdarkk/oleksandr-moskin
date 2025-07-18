'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'

type AnimatedScrollProps = {
  children: React.ReactNode
  offset?: number 
  duration?: number 
  delay?: number 
  y?: number 
}

export default function AnimatedScroll({
  children,
  offset = 0.2,
  duration = 0.6,
  delay = 0,
  y = 50,
}: AnimatedScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: offset }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [offset])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
