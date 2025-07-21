'use client'

import { ShowType } from '../../types'
import styles from '../../styles/showcard.module.css'
import { Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import HoverText from './HoverText'
import AutoAnimatingText from './AutoAnimatingText'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

const geist = Geist_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-cousine',
    display: 'swap',
})



export default function ShowCard({year, city, country, name, src, display}: ShowType) {
    const side = display === 'normal' ? styles.containerNormal : styles.containerReversed
    const direction = display === 'normal' ? styles.imageNormal : styles.imageReversed

    const { isMobile } = useDeviceDetection()
    const TextComponent = isMobile ? AutoAnimatingText : HoverText  

    return (
        <div className={`${geist.className} ${side}`}>
            <Image
                src={src}
                alt={name}
                width={500}
                height={500}
                className={`${direction}`}
            />

           
            <div className={styles.contentWrap}>
                <h3 className={styles.title}>
                    <TextComponent>
                        {name}
                    </TextComponent>
                </h3>

                <p className={styles.place}>
                    {city}, {country}
                </p>

                <p className={styles.year}>
                    {year}
                </p>
            </div>
           
        </div>
    )
}