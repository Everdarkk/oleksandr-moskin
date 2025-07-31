'use client'

import { Miltonian_Tattoo } from 'next/font/google'
import styles from '../styles/hero.module.css'
import AnimatedText from './ui/AnimatedText'
import AutoAnimatedLetters from './ui/AutoAnimatedLetters'
import { motion } from 'motion/react'
import { useDeviceDetection } from '../lib/hooks/useDeviceDetection'

const miltonian = Miltonian_Tattoo({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-notable',
    display: 'swap',
})

export default function Hero() {

    const { isMobile } = useDeviceDetection();
    console.log('isMobile', isMobile);

    const Animated = isMobile ? AutoAnimatedLetters : AnimatedText;

    return (
        <>
            <div className={`${miltonian.className} ${styles.container}`}>
                <motion.video 
                    src='/videos/oleksandr-3.mp4'
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className={styles.video}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                </motion.video>
                
                <div className={styles.textWrap}> 
                    <Animated text="OLE" />
                    <Animated text="KSA" />
                    <Animated text="NDR" />
                    <Animated text="MOS" />
                    <Animated text="KIN" />
                </div>
            </div>
        </>
    )
}