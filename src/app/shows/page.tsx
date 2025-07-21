import Shows from "../../../lib/components/Shows"
import AnimatedBackground from '../../../lib/components/AnimatedBackground'
import Transition from "../../../lib/components/ui/Transition"

export default function ShowsPage() {
    return (
        <>
            <Transition>
                <AnimatedBackground />
                <Shows />
            </Transition>
        </>
    )
}