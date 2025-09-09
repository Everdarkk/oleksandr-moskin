import ChromaticIcon from "./ui/ChromaticIcon"
import styles from '../styles/animatedsocial.module.css'

export default function AnimatedSocial() {
    return (
        <div className={styles.container}>
            <ChromaticIcon href={'https://www.instagram.com/artist_shura'} ariaLabel='link' src={'/utils/instagram.png'} hoverColor={'linear-gradient(to bottom, #c94b4b, #4b134f)'}/>

            <ChromaticIcon href={'https://www.tiktok.com/@shura3206'} ariaLabel='link' src={'/utils/tik-tok.png'} hoverColor={'linear-gradient(to bottom, #1f1c2c, #928dab)'}/>
            
            <ChromaticIcon href={'https://t.me/ShuraZaebal'} ariaLabel='link' src={'/utils/telegram.png'} hoverColor={'linear-gradient(to bottom, #4b6cb7, #182848)'}/>
        </div>
    )
}