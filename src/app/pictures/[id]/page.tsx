import Image from "next/image"
import { pictures } from "@/lib/data/pictures"

export default async function PictureIdPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const picture = pictures.find((pic) => pic.id === id)
    
    if (!picture) {
        return (
            <div>
                <div>
                    <h1>Picture not found</h1>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h1 style={{color:'red'}}>{picture.alt}</h1>
            </div>

            <Image 
                src={picture.src}
                alt={picture.alt}
                width={800}
                height={1200}
            />
        </div>
    )
}