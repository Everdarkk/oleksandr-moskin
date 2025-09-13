'use client'

import {pictures} from "@/lib/data/pictures"
import Image from "next/image"
import styles from "../styles/gallery.module.css"
import {motion} from 'motion/react'
import Link from "next/link"
import { Geist_Mono } from "next/font/google";
import AutoAnimatingText from "./ui/AutoAnimatingText"
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection"
import { useRouter } from "next/navigation"

const geist = Geist_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-geist',
    display: 'swap',
})

export default function Pictures() {
  const {isMobile} = useDeviceDetection()
  
  const router = useRouter()

  return (
      <div className={`${geist.className} ${styles.container}`}>
        {pictures.map((item, id) => (
          <Link 
            key={id} 
            href={`/artwork/${id + 1}`} 
            className={styles.card}
            onClick={(e) => {
              e.preventDefault()
              router.push(`/artwork/${id + 1}`, {scroll: false})
            }}
          >
            {isMobile ? (
              <div className={styles.imageWrapMobile}>
                <div className={styles.imageMotionMobile}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={id < 10}
                    className={styles.imageMobile}
                  />
                </div>
              </div>
            ) : (
              <>
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
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={id < 10}
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
                    <div className={styles.caption}>
                      <AutoAnimatingText>{item.alt}</AutoAnimatingText>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </Link>
        ))}
      </div>
    )
}
