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
import { useEffect } from "react"


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
  const currentIndex = pictures.findIndex(item => item.id === picture?.id)
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : pictures.length - 1
  const nextIndex = currentIndex < pictures.length - 1 ? currentIndex + 1 : 0

  const previous = pictures[previousIndex]
  const next = pictures[nextIndex]

  const onDismiss = () => {
    router.back()
  };

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

  function handlePrev() {
    router.replace(`/artwork/${previous.id}`, { scroll: false })
  }

  function handleNext() {
    router.replace(`/artwork/${next.id}`, { scroll: false })
  }

  return (
    <ModalWrap>
      <div className={`${geist.className} ${styles.modalLayout}`}>
          <h2 className={styles.title}>{picture.alt}</h2>

        <div className={styles.contentWrap}>
          <div className={styles.arrowWrap} onClick={handlePrev}>
            <ArrowL/>
          </div>

          <div className={styles.imageContainer}>
              <Image
                src={picture.src}
                alt={picture.alt}
                fill
                sizes="80vw"
                onClick={onDismiss}
              />
            
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