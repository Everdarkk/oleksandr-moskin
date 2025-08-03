import Image from "next/image"
import { pictures } from "@/lib/data/pictures"
import styles from '@/styles/artworkpage.module.css'
import { notFound } from "next/navigation"

export default async function ArtworkSoloPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const picture = pictures.find((pic) => pic.id === id)
    
    if (!picture) {
        return notFound()
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleWrap}>
                <h1 className={styles.title}>{picture.alt}</h1>
            </div>

            <Image 
                src={picture.src}
                alt={picture.alt}
                width={800}
                height={1200}
                className={styles.image}
            />
        </div>
    )
}