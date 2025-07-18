import Image from 'next/image'
import styles from '../../styles/maskedimage.module.css'

export default function MaskedImage () {
    return (
        <div>
            

            <Image
                src="/images/oleksandr.png"
                alt="Masked Image"
                width={500}
                height={500}
                className={styles.maskedImage}
            />
        </div>
    )
}