import Gallery from "../../../lib/components/Gallery"
import Transition from "../../../lib/components/ui/Transition"

export default function Artwork() {
    return (
        <>
            <Transition>
                <Gallery />
            </Transition>
        </>
    )
}