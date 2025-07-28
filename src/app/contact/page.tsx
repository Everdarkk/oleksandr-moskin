import MaskedImage from "../../../lib/components/ui/MaskedImage"
import AnimatedSocial from '../../../lib/components//AnimatedSocial'
import Transition from "../../../lib/components/ui/Transition"
import Subscribe from "../../../lib/components/ui/Subscribe"
import Footer from "../../../lib/components/Footer"

export default function Contact() {
    return (
        <>
            <Transition>
                <AnimatedSocial />
                <MaskedImage />
                <Subscribe/>
                <Footer />
            </Transition>
        </>
    )
}