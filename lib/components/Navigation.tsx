import { navigation } from "../data/navigation"
import Link from "next/link"
import styles from "../styles/navigation.module.css"
import { Viga } from "next/font/google"
import AnimatedLogo from "./ui/AnimatedLogo"

const viga = Viga({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})

export default function Navigation() {
    return (
       <nav className={`${styles.container} ${viga.className}`}>
            <AnimatedLogo src={'/images/logo-1.png'} alt=""/>
            

            <ul className={styles.list}>
                {navigation.map((item) => (
                    <li key={item} className={styles.itemWrap}>
                        <Link href={`/${item}`} className={styles.item} data-text={item}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}