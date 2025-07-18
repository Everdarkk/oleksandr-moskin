'use client'
import { useRef, useEffect } from "react"


const RADIUS = 700  
const MAX_OFFSET = 30 

export default function AnimatedText({ text }: { text: string }) {
    // h1 ref
    const wrapperRef = useRef<HTMLHeadingElement>(null)
    // span refs
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

    useEffect(() => {
        const wrapper = wrapperRef.current
        if (!wrapper) return

        const handleMouseMove = (e: MouseEvent) => {
            // cursor coordinates
            const { clientX, clientY } = e

            letterRefs.current.forEach(letter => {
    
                if (!letter) return

                // letter position and size
                const rect = letter.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2

                // distance from cursor to letter center
                const deltaX = centerX - clientX
                const deltaY = centerY - clientY
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

                // pull factor based on distance
                const pullFactor = Math.max(0, 1 - distance / RADIUS)
                
                // letter offset based on distance and pull factor
                const offsetX = (deltaX / distance) * pullFactor * MAX_OFFSET
                const offsetY = (deltaY / distance) * pullFactor * MAX_OFFSET

                // transform letter position
                letter.style.transition = 'transform 0.1s linear'
                letter.style.transform = `translate(${offsetX || 0}px, ${offsetY || 0}px)`
            })
        }

        const handleMouseLeave = () => {
            // return letters to original position
            letterRefs.current.forEach(letter => {
                if (letter) {
                    // smooth transition back to original position
                    letter.style.transition = 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
                    letter.style.transform = 'translate(0px, 0px)'
                }
            })
        }

        // event types definitions
        wrapper.addEventListener('mousemove', handleMouseMove as (e: Event) => void)
        wrapper.addEventListener('mouseleave', handleMouseLeave as () => void)

        
        return () => {
            wrapper.removeEventListener('mousemove', handleMouseMove as (e: Event) => void)
            wrapper.removeEventListener('mouseleave', handleMouseLeave as () => void)
        }
    }, []) 

    // cleanup letterRefs
    letterRefs.current = [];

    return (
        
        <h1 ref={wrapperRef} style={{ display: 'flex', cursor: 'pointer', userSelect: 'none' }}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    ref={(el) => { letterRefs.current[index] = el; }}
                    style={{
                        display: 'inline-block',
                        position: 'relative',
                        cursor: 'cell',
                        lineHeight: '0.75',

                    }}
                >
                    
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h1>
    );
}
