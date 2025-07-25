import MaskedImage from "../../../lib/components/ui/MaskedImage"
import AnimatedSocial from '../../../lib/components//AnimatedSocial'
import Transition from "../../../lib/components/ui/Transition"

export default function Contact() {
    return (
        <>
            <Transition>
                <MaskedImage src={'/images/oleksandr-3.png'}/>
                <AnimatedSocial />
            </Transition>
        </>
    )
}