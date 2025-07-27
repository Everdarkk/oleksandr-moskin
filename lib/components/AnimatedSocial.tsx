import ChromaticIcon from "./ui/ChromaticIcon"
import styles from '../styles/animatedsocial.module.css'

export default function AnimatedSocial() {
    return (
        <div className={styles.container}>
            <ChromaticIcon href={'/'} ariaLabel='link' src={'/utils/instagram.png'} hoverColor={'#E4405F'}/>
            <ChromaticIcon href={'/'} ariaLabel='link' src={'/utils/tik-tok.png'} hoverColor={'#00f2ea'}/>
            <ChromaticIcon href={'/'} ariaLabel='link' src={'/utils/telegram.png'} hoverColor={'#0088cc'}/>
        </div>
    )
}