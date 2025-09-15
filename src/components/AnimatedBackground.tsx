'use client'

import  {useDeviceDetection} from '../lib/hooks/useDeviceDetection'
import ActiveStarfield from './ui/ActiveStarfield'
import PassiveStarfield from './ui/PassiveStarfield'
import styles from '../styles/animatedbackground.module.css'

export default function AnimatedBackground() {
    const {isMobile} = useDeviceDetection()

    const Starfield = isMobile ? PassiveStarfield : ActiveStarfield

    return (
        <div className={styles.background}>
            {!isMobile ? <ActiveStarfield /> : 
            
            <video autoPlay muted loop className={styles.video}>
                <source src="/videos/bg-stars.mp4" type="video/mp4" />
            </video>
            }
            

        </div>
  )
}