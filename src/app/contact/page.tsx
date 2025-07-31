import MaskedImage from "@/components/ui/MaskedImage"
import AnimatedSocial from "@/components/AnimatedSocial"
import Transition from "@/components/ui/Transition"
import Subscribe from "@/components/ui/Subscribe"


export default function Contact() {
    return (
        <>
            <Transition>
                <AnimatedSocial />
                <MaskedImage />
                <Subscribe/>
            </Transition>
        </>
    )
}