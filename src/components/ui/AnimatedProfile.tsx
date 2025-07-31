'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styles from '../../styles/profile.module.css'
import { AnimatedProfileProps } from '../../lib/types' 


export default function AnimatedProfile({ src, alt = '', width, height, intensity = 15 }: AnimatedProfileProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = imageRef.current
    const highlight = highlightRef.current
    if (!el || !highlight) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    highlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25), transparent 60%)`
  }

  const handleMouseLeave = () => {
    const el = imageRef.current
    const highlight = highlightRef.current
    if (el) {
      el.style.transform = `rotateX(0deg) rotateY(0deg)`
    }
    if (highlight) {
      highlight.style.background = `radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 60%)`
    }
  }

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={imageRef} className={styles.imageWrap}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.image}
        />

        <div ref={highlightRef} className={styles.highlight}></div>
      </div>
    </div>
  )
}
