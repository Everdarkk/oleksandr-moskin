import Image from "next/image"
import Link from "next/link"
import styles from '../styles/footer.module.css'
import { Nerko_One, Grechen_Fuemen } from "next/font/google"

const nerkoOne = Nerko_One({
    subsets: ['latin'],
    weight: ['400'],
})

const grechen = Grechen_Fuemen({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap'
})

export default function Footer() {
    return (
        <footer className={`${grechen.className} ${styles.container}`}>
            <video autoPlay muted loop className={styles.video}>
                <source src="/videos/bg-5.mp4" type="video/mp4" />
            </video>

            <div className={styles.contentWrap}>
                <span className={styles.text}>
                    presented by
                </span>

                <Link href={'https://github.com/Everdarkk'} className={styles.imageWrap}>
                    <Image
                        src={'/images/logo-2.png'}
                        alt={'Oleksandr Dorokhov Dev Logo'}
                        width={70}
                        height={70}
                        className={styles.image}
                    />
                </Link>

                <span className={styles.text}>
                    Oleksandr Dorokhov
                </span>
            </div>
        </footer>
    )
}