import MaskedImage from "../../../lib/components/ui/MaskedImage"
import AnimatedSocial from '../../../lib/components//AnimatedSocial'
import Transition from "../../../lib/components/ui/Transition"
import Subscribe from "../../../lib/components/ui/Subscribe"


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