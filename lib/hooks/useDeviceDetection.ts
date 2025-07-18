'use client'

import { useState, useEffect } from 'react'

export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)')
    
    const handleMediaChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches)
    }

   
    handleMediaChange(mediaQuery)

   
    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return { isMobile }
}