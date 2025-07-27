import ChromaticIcon from "./ui/ChromaticIcon"
import styles from '../styles/animatedsocial.module.css'

export default function AnimatedSocial() {
    return (
        <div className={styles.container}>
            <ChromaticIcon href={'/'} ariaLabel='link' src={'/utils/instagram.png'} hoverColor={'#3d0716'}/>

            <ChromaticIcon href={'/'} ariaLabel='link' src={'/utils/tik-tok.png'} hoverColor={'#363417'}/>
            
            <ChromaticIcon href={'/'} ariaLabel='link' src={'/utils/telegram.png'} hoverColor={'#061429'}/>
        </div>
    )
}