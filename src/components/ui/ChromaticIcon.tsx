import { ChromaticIconProps } from "../../lib/types"
import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/chromaticicon.module.css'

export default function ChromaticIcon({href, ariaLabel, src, hoverColor}: ChromaticIconProps) {

    return (
        <Link href={href} target="_blank" aria-label={ariaLabel} className={styles.container} style={{ '--hover-color': hoverColor } as React.CSSProperties}>
            <div className={styles.iconContainer}>
                <Image
                    width={512}
                    height={512}
                    src={src}
                    alt="Icon"
                    className={styles.icon}
                />
            </div>
        </Link> 
    )
}