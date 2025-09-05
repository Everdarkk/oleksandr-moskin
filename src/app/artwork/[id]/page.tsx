import Image from "next/image"
import { pictures } from "@/lib/data/pictures"
import styles from '@/styles/artworkpage.module.css'
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return pictures.map((pic) => ({ id: pic.id }))
}

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
            <p className={styles.title}>
                {picture.alt}
            </p>

            <div className={styles.contentWrap}>
                <Image
                    src={picture.src}
                    alt={picture.alt}
                    width={picture.width}
                    height={picture.height}
                    className={styles.image}
                    priority
                />

                <div className={styles.textWrap}>
                    <p className={styles.materials}>
                        {picture.materials}
                    </p>

                    <p className={styles.description}>
                        {picture.description}
                    </p>

                </div>
            </div>
            
        
        </div>
    )
}