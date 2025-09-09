'use client'

import styles from '../styles/bio.module.css'
import { bio } from '../lib/data/bio'
import { Exo_2, Geist_Mono } from 'next/font/google'
import HoverText from './ui/HoverText'
import AnimatedProfile from './ui/AnimatedProfile'
import AnimatedScroll from './ui/AnimatedScroll'
import Background from './ui/Background'
import AutoAnimatingText from './ui/AutoAnimatingText'
import { useDeviceDetection } from '../lib/hooks/useDeviceDetection'

const geist = Geist_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-geist',
    display: 'swap',
})

const exo = Exo_2({
    subsets: ['latin', 'cyrillic'],
    weight: ['400'],
    variable: '--font-exo',
    display: 'swap',
}) 

export default function Bio() {
    const { isMobile } = useDeviceDetection()

    const TextComponent = isMobile ? AutoAnimatingText : HoverText

    return (
        <>
            <section className={`${exo.className} ${styles.container}`}>
                <Background />
                <AnimatedScroll>
                    <AnimatedProfile
                        src={'/images/oleksandr-1.jpg'}
                        alt=''
                        width={500}
                        height={500}
                    />
                </AnimatedScroll>

                <div className={`${geist.className} ${styles.contentWrap}`}>
                    <AnimatedScroll>
                        <TextComponent>
                            {bio.eng}
                        </TextComponent>
                    </AnimatedScroll>
                    
                    <div className={styles.divider}></div>

                    <AnimatedScroll>
                        <TextComponent>
                            {bio.ukr}
                        </TextComponent>
                    </AnimatedScroll>

                </div>
            </section>
        </>     
    )
}