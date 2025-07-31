import Gallery from "@/components/Gallery"
import Transition from "@/components/ui/Transition"

export default function Artwork() {
    return (
        <>
            <Transition>
                <Gallery />
            </Transition>
        </>
    )
}