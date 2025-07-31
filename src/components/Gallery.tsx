'use client'

import { useState, useEffect} from "react"
import gallery from "../lib/data/gallery"
import Image from "next/image"
import Arrow from "./ui/Arrow"
import PhotoNav from "./ui/PhotoNav"
import styles from "../styles/gallery.module.css"
import {motion} from 'motion/react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    
    if (isFullScreen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isFullScreen])

  function nextImage() {
    setSelectedImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  function prevImage() {
    setSelectedImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  return (
    <>
      <div className={styles.container}>
        {gallery.map((item, index) => (
          <div key={index} className={styles.card} onClick={() => {setSelectedImage(index); setIsFullScreen(true)}}>

            <motion.div
              className={styles.imageWrap}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className={styles.imageMotion}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.path}
                  alt={item.description}
                  fill
                  className={styles.image}
                />
              </motion.div>

              <motion.div
                className={styles.overlay}
                variants={{
                  rest: { y: "100%", opacity: 0 },
                  hover: { y: "0%", opacity: 1 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className={styles.caption}>{item.description}</div>
              </motion.div>
            </motion.div>

          </div>
        ))}
      </div>

      { isFullScreen && (
        <div className={styles.fullOverlay}>
          
          <div className={styles.topside}>
            <Arrow
              direction="left"
              onClick={() => {prevImage()}}
            />

            <Image
              src={gallery[selectedImage].path}
              alt={gallery[selectedImage].description}
              width={1200}
              height={800}
              className={styles.fullImage}
              onClick={() => setIsFullScreen(false)}
            />
            
            <Arrow
              direction="right"
              onClick={() => {nextImage()}}
            />
          </div>

          <div className={styles.bottomside}>
              <PhotoNav 
                onClick={(index) => setSelectedImage(index)} 
                activeIndex={selectedImage}
              />
          </div>

        
        </div>
      )}
    </>
  )
}
