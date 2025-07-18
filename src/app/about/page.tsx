import Bio from "../../../lib/components/Bio"
import Hero from "../../../lib/components/Hero"
import Transition from "../../../lib/components/ui/Transition"


export default function About() {

    return (
        <>
            <Transition>
                <Hero />
            </Transition>

            <Bio />
        </>
    )
}