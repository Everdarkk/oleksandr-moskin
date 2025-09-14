'use client'

import {useRef, useEffect} from 'react'
import styles from '@/styles/modalwrap.module.css'


export default function ModalWrap({ children,}: { children: React.ReactNode}) {
  const modalRef = useRef(null)
  

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const originalBodyOverflow = document.body.style.overflow
    const originalBodyPaddingRight = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow
      document.body.style.paddingRight = originalBodyPaddingRight
    }
  }, [])

  return (
  
    <div ref={modalRef} className={styles.container}>
      {children}
    </div>
  );
}