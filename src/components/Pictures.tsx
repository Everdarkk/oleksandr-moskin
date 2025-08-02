'use client'

import {pictures} from "@/lib/data/pictures"
import Image from "next/image"
import styles from "../styles/gallery.module.css"
import {motion} from 'motion/react'
import Link from "next/link"

export default function Pictures() {


  return (
    <>
      <div className={styles.container}>
        {pictures.map((item, id) => (
          <Link key={id} href={`/artwork/${id + 1}`} className={styles.card} scroll={false}>

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
                <div className={styles.caption}>{item.alt}</div>
              </motion.div>
            </motion.div>

          </Link>
        ))}
      </div>

    </>
  )
}
