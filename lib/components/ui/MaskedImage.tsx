import Image from 'next/image'
import styles from '../../styles/maskedimage.module.css'

export default function MaskedImage ({src}: {src: string}) {
    return (
        <div className={styles.container}>
            

            <Image
                src={src}
                alt='Contact Image'
                width={2048}
                height={1340}
                className={styles.image}
            /> 
        </div>
    )
}