'use client'

import { ImageItem } from "@/lib/types"
import Image from "next/image"
import styles from '@/styles/modal.module.css'
import { useRouter } from 'next/navigation'
import ModalWrap from '@/components/ModalWrap'
import ArrowL from "@/components/ui/ArrowL"
import ArrowR from "@/components/ui/ArrowR"
import { pictures } from "@/lib/data/pictures"
import { Geist_Mono } from "next/font/google"
import { useEffect, useState } from "react"
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection"
import Transition from "./ui/Transition"


const geist = Geist_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-geist',
    display: 'swap',
})

export default function ModalClient({ 
  picture }: { 
  picture: ImageItem | undefined
  }) {

  const router = useRouter()
  const currentIndex = pictures.findIndex(item => item.id === picture?.id)
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : pictures.length - 1
  const nextIndex = currentIndex < pictures.length - 1 ? currentIndex + 1 : 0

  const previous = pictures[previousIndex]
  const next = pictures[nextIndex]
  const [visible, setVisible] = useState(false)
  const { isMobile } = useDeviceDetection()
  
  const onDismiss = () => {
    router.back()
  }
  const onOverlay = () => {
   if (!isMobile) {
     router.back()
   } else {
      return
   }
  }

  const onWrap = () => {
    if (isMobile) {
      setVisible(!visible)
    } else {
      return
    }
  }
  
  function handlePrev() {
    router.replace(`/artwork/${previous.id}`, { scroll: false })
  }

  function handleNext() {
    router.replace(`/artwork/${next.id}`, { scroll: false })
  }
  
  useEffect(() => {
    if (next) {
      router.prefetch(`/artwork/${next.id}`);
    }
    if (previous) {
      router.prefetch(`/artwork/${previous.id}`);
    }
    
  }, [next, previous, router]);
  
  if (!picture) {
    return (
      <ModalWrap>
        <div onClick={onDismiss}>Picture not found</div>
      </ModalWrap>
    );
  }

  if (!isMobile) {
    return (
      <ModalWrap>
      <div className={`${geist.className} ${styles.modalLayout}`}>
        <Transition>
          <h2 className={styles.title}>
            {picture.alt}
            <span
              className={styles.back}
              onClick={onDismiss}
              style={{display: 'none'}}
            >
              ↩
            </span>
          </h2>
        </Transition>

        <div className={styles.contentWrap}>
          <div className={styles.arrowWrap} onClick={handlePrev}>
            <ArrowL/>
          </div>

          <div className={styles.imageContainer}>
              <Transition>
                <Image
                  src={picture.src}
                  alt={picture.alt}
                  fill
                  sizes="80vw"
                  onClick={onDismiss}
                />
              </Transition>
            
            {picture.description && (
              <div onClick={onWrap} className={styles.overlayWrap}>
                <div
                  className={styles.overlay}
                  onClick={onOverlay}
                >
                  <p className={styles.descriptionMats}>{picture.materials}</p>
                  <div className={styles.descriptionText}>
                    {picture.description}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.arrowWrap} onClick={handleNext}>
            <ArrowR />
          </div>
        </div>
      </div>
      </ModalWrap>  
  )
  } else { 
    return (
    <ModalWrap>
      <div className={`${geist.className} ${styles.modalLayout}`}>
        <Transition>
          <h2 className={styles.title}>
            {picture.alt}
            <span
              className={styles.back}
              onClick={onDismiss}
              style={{display: 'block'}}
            >
              ↩
            </span>
          </h2>
        </Transition>

        <div className={styles.contentWrap}>
          <div className={styles.arrowWrap} onClick={handlePrev}>
            <ArrowL/>
          </div>

          <div className={styles.imageContainer}>
              <Transition>
                <Image
                  src={picture.src}
                  alt={picture.alt}
                  fill
                  sizes="80vw"
                  onClick={onDismiss}
                />
              </Transition>
            
            {picture.description && (
              <div onClick={onWrap} className={styles.overlayWrap}>
                <div
                  className={styles.overlayMobile}
                  style={ visible ? {opacity: '1'} : {opacity: '0'}}
                  onClick={onOverlay}
                  
                >
                  <p className={styles.descriptionMats}>{picture.materials}</p>
                  <div className={styles.descriptionText}>
                    {picture.description}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.arrowWrap} onClick={handleNext}>
            <ArrowR />
          </div>
        </div>
      </div>
    </ModalWrap>  
  )
  }

}