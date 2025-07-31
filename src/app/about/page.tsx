import Bio from "@/components/Bio"
import Hero from "@/components/Hero"
import Transition from "@/components/ui/Transition"


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