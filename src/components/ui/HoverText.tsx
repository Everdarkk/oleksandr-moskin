'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { AnimatedLetterProps } from '../../lib/types'
import styles from '../../styles/hovertext.module.css'

export const allowedCharacters = ['X', '$', 'Y', '#', '?', '*', '0', '1', '+', '%', '&']

export function getRandomCharacter() {
  const index = Math.floor(Math.random() * allowedCharacters.length)
  return allowedCharacters[index]
}

export function getRandomColor() {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 90%, 60%)`
}

export function AnimatedLetter({ letter, isTriggered, onAnimationComplete, index }: AnimatedLetterProps) {
  const [displayedChar, setDisplayedChar] = useState(letter)
  const [color, setColor] = useState('inherit')
  const isAnimating = useRef(false)

  const animate = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let frame = 0;
    const totalFrames = 15;

    const interval = setInterval(() => {
      if (frame < totalFrames) {
        setDisplayedChar(getRandomCharacter());
        setColor(getRandomColor());
        frame++;
      } else {
        clearInterval(interval);
        setDisplayedChar(letter);
        setColor('inherit');
        isAnimating.current = false;
        if (onAnimationComplete && typeof index === 'number') {
          onAnimationComplete(index);
        }
      }
    }, 50);
  }, [letter, onAnimationComplete, index]);

  const handleMouseOver = () => {
    animate()
    
  }

  useEffect(() => {
    if (isTriggered) {
      animate()
    }
  }, [isTriggered, animate])

  return (
    <span className={styles.span} onMouseOver={!isTriggered ? handleMouseOver : undefined}>
      <span
        className={`${styles.spanInner} ${isAnimating.current ? styles.animating : ''}`}
        style={{ color }}
      >
        {displayedChar}
      </span>
    </span>
  )
  
}

export default function HoverText({ children }: { children: string }) {
  
  const tokens = children.split(/(\s+)/)

  return (
    <span className={styles.container}>
      {tokens.map((token, idx) => {
        if (token.trim() === '') {
          return <span key={idx}>{token}</span>
        }
        return (
          <span key={idx} style={{ whiteSpace: 'nowrap' }}>
            {token.split('').map((char, i) => (
              <AnimatedLetter key={i} letter={char} />
            ))}
          </span>
        )
      })}
    </span>
  )
}
