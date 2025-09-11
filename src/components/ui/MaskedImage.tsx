
import styles from '../../styles/maskedimage.module.css'

export default function MaskedImage () {
    return (
        <div className={styles.container}>
            
            <video 
                    src={'videos/oleksandr-1.webm'}
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className={styles.video}
                >
                </video>
            
        </div>
    )
}