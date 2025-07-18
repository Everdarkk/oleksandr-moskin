import { ReactNode } from "react"

export type ArrowProps = {
  direction: 'left' | 'right'
  onClick: () => void
}

export type PhotoProps = {
  onClick: (index: number) => void
  activeIndex: number
}

export interface TransitionProps {
  children: ReactNode
}

export type AnimatedLetterProps = {
  letter: string
  isTriggered?: boolean
  onAnimationComplete?: (index: number) => void
  index?: number
}

export type AnimatedProfileProps = {
  src: string
  alt?: string
  width: number
  height: number
  intensity?: number
}

export type ShowType = {
    year: number
    city: string
    country: string
    name: string
    src: string
    display: 'normal' | 'reversed'
}