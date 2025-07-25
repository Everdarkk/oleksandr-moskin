import PulseIcon from "./ui/PulseIcon"
import styles from '../styles/animatedsocial.module.css'

export default function AnimatedSocial() {
    return (
        <div className={styles.container}>
            <PulseIcon href={'/'} ariaLabel='link' src={'/utils/instagram.png'}/>

            <PulseIcon href={'/'} ariaLabel='link' src={'/utils/tik-tok.png'}/>

            <PulseIcon href={'/'} ariaLabel='link' src={'/utils/telegram.png'}/>
        </div>
    )
}