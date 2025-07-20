import React, { useEffect, useRef, useCallback } from 'react'
import styles from '../../styles/animatedbackground.module.css'
import { Star, Point } from '../../types'

export default function ActiveStarfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameId = useRef<number | null>(null)


  // Використовуємо useCallback, щоб функція не створювалася заново при кожному рендері
  const draw = useCallback(() => {
    // --- Налаштування ---
    const STAR_COUNT = 1000 // Кількість зірок
    const SPEED = 0.05 // Швидкість польоту
    const MAX_DEPTH = 32 // Глибина простору

    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    // --- Змінні з типами ---
    let stars: Star[] = []
    const pointer: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const vanishingPoint: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let width: number, height: number, center: Point

    // --- Функції ---

    // Створює нову зорю з випадковими параметрами
    function createStar(): Star {
      return {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        z: Math.random() * MAX_DEPTH,
        px: 0,
        py: 0,
        color: `hsl(${Math.random() * 360}, 100%, 75%)`,
      };
    }

    // Створює початковий набір зірок
    function generate() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(createStar())
      }
    }

    // Обробляє зміну розміру вікна
    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      center = { x: width / 2, y: height / 2 }
      if (canvas) {
        canvas.width = width
        canvas.height = height
      }
    }

    // Головний цикл анімації
    function step() {
      update()
      render()
      animationFrameId.current = requestAnimationFrame(step)
    }
    
    // Оновлює позиції зірок та точки зникнення
    function update() {
      vanishingPoint.x += (pointer.x - vanishingPoint.x) * 0.05
      vanishingPoint.y += (pointer.y - vanishingPoint.y) * 0.05

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        star.z -= SPEED

        if (star.z <= 0) {
          stars[i] = createStar()
        }
      }
    }

    // Рендерить зірки на полотні
    function render() {
      if (!context) return

      context.clearRect(0, 0, width, height)

      stars.forEach((star: Star) => {
        const k = 128 / star.z
        const sx = star.x * k + vanishingPoint.x
        const sy = star.y * k + vanishingPoint.y

        const size = (1 - star.z / MAX_DEPTH) * 2
        const alpha = 1 - star.z / MAX_DEPTH

        if (star.px !== 0) {
          context.beginPath()
          context.moveTo(sx, sy)
          context.lineTo(star.px, star.py)
          context.strokeStyle = star.color
          context.lineWidth = size
          context.globalAlpha = alpha
          context.stroke()
        }
        
        star.px = sx
        star.py = sy
      })
    }

    // --- Обробники подій з типізованими аргументами ---
    function onMouseMove(event: MouseEvent) {
      pointer.x = center.x + (center.x - event.clientX)
      pointer.y = center.y + (center.y - event.clientY)
    }
    
    function onMouseLeave() {
      pointer.x = center.x
      pointer.y = center.y
    }
    
    function onTouchMove(event: TouchEvent) {
        event.preventDefault()
        const touch = event.touches[0]
        pointer.x = center.x + (center.x - touch.clientX)
        pointer.y = center.y + (center.y - touch.clientY)
    }

    function onTouchEnd() {
        pointer.x = center.x
        pointer.y = center.y
    }


    // --- Ініціалізація ---
    generate()
    resize()
    step()

    window.addEventListener('resize', resize)
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseleave', onMouseLeave)
      document.addEventListener('touchmove', onTouchMove, { passive: false })
      document.addEventListener('touchend', onTouchEnd)
    

    return () => {
      window.removeEventListener('resize', resize)
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseleave', onMouseLeave)
        document.removeEventListener('touchmove', onTouchMove)
        document.removeEventListener('touchend', onTouchEnd)

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    };
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanup = draw()
      return cleanup
    }
  }, [draw])

  return <canvas ref={canvasRef} className={styles.container} />
};