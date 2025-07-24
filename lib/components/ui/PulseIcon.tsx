import Link from "next/link"
import { PulseIconProps } from "../../types"
import styles from '../../styles/pulseicon.module.css'

export default function PulseIcon({href, ariaLabel, icon}: PulseIconProps) {
    return (
        <Link href={href} aria-label={ariaLabel} className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
        </Link>       
    )
}