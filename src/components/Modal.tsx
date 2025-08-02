// app/@modal/(..)gallery/pictures/[id]/ModalClient.tsx
'use client';

import { ImageItem } from "@/lib/types"
import Image from "next/image"
import styles from '@/styles/modal.module.css'
import { useRouter } from 'next/navigation'
import ModalWrap from '@/components/ModalWrap'
import ArrowL from "@/components/ui/ArrowL"
import ArrowR from "@/components/ui/ArrowR"
import { pictures } from "@/lib/data/pictures"
import Transition from "@/components/ui/Transition"

export default function ModalClient({ 
  picture, 
}: { 
  picture: ImageItem | undefined
}) {
  const router = useRouter()

  const onDismiss = () => {
    router.back()
  }

  if (!picture) {
    return (
      <ModalWrap>
        <div onClick={onDismiss}>Picture not found</div>
      </ModalWrap>
    );
  }

  const currentIndex = pictures.findIndex(item => item.id === picture.id);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : pictures.length - 1;
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
      <Transition>
        <h2 className={styles.title}>{picture.alt}</h2>
      </Transition>

      <div className={styles.contentWrap}>
        <div className={styles.arrowWrap} onClick={handlePrev}>
          <ArrowL/>
        </div>

        <Image
          src={picture.src}
          alt={picture.alt}
          width={800}
          height={1200}
          onClick={onDismiss}
          className={styles.image}
        />

        <div className={styles.arrowWrap} onClick={handleNext}>
          <ArrowR />
        </div>
      </div>
      
    </ModalWrap>
  );
}