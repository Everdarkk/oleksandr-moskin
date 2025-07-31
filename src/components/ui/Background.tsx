import styles from '../../styles/background.module.css'

export default function Background() {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            className={styles.video}
        >
            <source src='/videos/glitch-3.mp4' type='video/mp4'/>    
        </video>
    )
}