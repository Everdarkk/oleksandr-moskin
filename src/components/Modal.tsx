'use client'

import { ImageItem } from "@/lib/types"
import Image from "next/image"
import styles from '@/styles/modal.module.css'
import { useRouter } from 'next/navigation'
import ModalWrap from '@/components/ModalWrap'
import ArrowL from "@/components/ui/ArrowL"
import ArrowR from "@/components/ui/ArrowR"
import { pictures } from "@/lib/data/pictures"
import Transition from "@/components/ui/Transition"
import { Geist_Mono } from "next/font/google"


const geist = Geist_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-geist',
    display: 'swap',
})

export default function ModalClient({ 
  picture, 
}: { 
  picture: ImageItem | undefined
}) {
  const router = useRouter();

  const onDismiss = () => {
    router.back()
  };

  if (!picture) {
    return (
      <ModalWrap>
        <div onClick={onDismiss}>Picture not found</div>
      </ModalWrap>
    );
  }

  const currentIndex = pictures.findIndex(item => item.id === picture.id)
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : pictures.length - 1
  const nextIndex = currentIndex < pictures.length - 1 ? currentIndex + 1 : 0

  const previous = pictures[previousIndex]
  const next = pictures[nextIndex]

  function handlePrev() {
    router.replace(`/artwork/${previous.id}`, { scroll: false })
  }

  function handleNext() {
    router.replace(`/artwork/${next.id}`, { scroll: false })
  }

  return (
    <ModalWrap>
      <div className={`${geist.className} ${styles.modalLayout}`}>
        <Transition>
          <h2 className={styles.title}>{picture.alt}</h2>
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
                sizes="(max-width: 450px) 100vw, 80vw"
                onClick={onDismiss}
                priority
              />
            </Transition>
            
            {picture.description && (
              <div className={styles.overlay}>
                <p className={styles.descriptionMats}>{picture.materials}</p>
                <div className={styles.descriptionText}>
                  {picture.description}
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
  );
}