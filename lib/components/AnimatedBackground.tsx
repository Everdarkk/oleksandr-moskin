'use client'

import  {useDeviceDetection} from '../hooks/useDeviceDetection'
import ActiveStarfield from './ui/ActiveStarfield'
import PassiveStarfield from './ui/PassiveStarfield'
import styles from '../styles/animatedbackground.module.css'

export default function AnimatedBackground() {
    const {isMobile} = useDeviceDetection()

    const Starfield = isMobile ? PassiveStarfield : ActiveStarfield

    return (
        <div className={styles.background}>
            <Starfield />
        </div>
  )
}