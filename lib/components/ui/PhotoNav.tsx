import Image from "next/image"
import gallery from "../../data/gallery"
import styles from "../../styles/photonav.module.css"
import { PhotoProps } from "../../types"

export default function PhotoNav( { onClick, activeIndex }: PhotoProps) {
    return (
        <>
            <nav className={styles.container}>
                {gallery.map((item, index) => (
                    <div 
                        key={index} 
                        className={`${styles.imageWrap} ${index === activeIndex ? styles.active : ''}`}
                    >
                        <Image
                            src={item.path}
                            alt={item.description}
                            width={80}
                            height={80}
                            className={styles.image}
                            onClick={() => onClick(index)}
                        />
                    </div>
                ))}
            </nav>
        </>
    )
}