import Link from "next/link"
import Image from "next/image"
import { PulseIconProps } from "../../types"
import styles from '../../styles/pulseicon.module.css'

export default function PulseIcon({href, ariaLabel, src}: PulseIconProps) {
    return (
        <Link href={href} aria-label={ariaLabel} className={styles.container}>
            <Image
                width={512}
                height={512}
                src={src}
                alt="Icon"
                className={styles.icon}
                
            />
        </Link>       
    )
}