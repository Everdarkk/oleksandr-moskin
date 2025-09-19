'use client'

import {useRef, useEffect} from 'react'
import styles from '@/styles/modalwrap.module.css'
import { useDeviceDetection } from '@/lib/hooks/useDeviceDetection'

export default function ModalWrap({ children,}: { children: React.ReactNode}) {
  const modalRef = useRef(null)
  const { isMobile } = useDeviceDetection()
  

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
  useEffect(() => {
    if (isMobile) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY); // відновлюємо скрол позицію
      };
    }
  },[isMobile])

  return (
  
    <div ref={modalRef} className={styles.container}>
      {children}
    </div>
  );
}