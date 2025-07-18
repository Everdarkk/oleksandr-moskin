'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from '../../styles/hovertext.module.css'
import { AnimatedLetter } from './HoverText'

export default function AutoAnimatingText({ children }: { children: string }) {
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null)

  useEffect(() => {
    const textLength = children.length
    if (textLength === 0) return

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textLength)
      setAnimatingIndex(randomIndex)
    }, 200)

    return () => clearInterval(interval)
  }, [children])

  const handleAnimationComplete = useCallback(() => {
    setAnimatingIndex(null)
  }, [])

  const tokens = children.split(/(\s+)/)
  let globalCharIndex = 0

  return (
    <p className={styles.container}>
      {tokens.map((token, tokenIdx) => {
        
        if (token.trim() === '') {
          
          globalCharIndex += token.length
          return <span key={`space-${tokenIdx}`}>{token}</span>
        }

        return (
          <span key={`word-${tokenIdx}`} style={{ whiteSpace: 'nowrap' }}>
            {token.split('').map((char, charIdx) => {
              
              const currentIndex = globalCharIndex++
              
              return (
                <AnimatedLetter
                  key={charIdx}
                  index={currentIndex}
                  letter={char}
                  isTriggered={currentIndex === animatingIndex}
                  onAnimationComplete={handleAnimationComplete}
                />
              )
            })}
          </span>
        )
      })}
    </p>
  )
}
