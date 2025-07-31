'use client'

import styles from '../../styles/autoletters.module.css'

const MAX_OFFSET = 5

export default function AutoAnimatedText({ text }: { text: string }) {
  // random offset function
  const getRandomOffset = () => (Math.random() - 0.5) * 5 * MAX_OFFSET

  return (
    <h1 style={{ display: 'flex' }}>
      {text.split('').map((char, index) => {
        // random coordinates for each letter
        const style = {
          '--offsetX1': `${getRandomOffset()}px`,
          '--offsetY1': `${getRandomOffset()}px`,
          '--offsetX2': `${getRandomOffset()}px`,
          '--offsetY2': `${getRandomOffset()}px`,
          '--offsetX3': `${getRandomOffset()}px`,
          '--offsetY3': `${getRandomOffset()}px`,
          // animation duration for each letter
          animationDuration: `${6 + Math.random() * 1}s`,
          // random delay for each letter
          // this creates a staggered effect
          animationDelay: `${Math.random() * -10}s`,
        }

        return (
          <span
            key={index}
            className={styles.letter}
            style={style as React.CSSProperties} // css type assertion
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        )
      })}
    </h1>
  )
}