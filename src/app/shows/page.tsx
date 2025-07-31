import Shows from '@/components/Shows'
import AnimatedBackground from '@/components/AnimatedBackground'
import Transition from '@/components/ui/Transition'

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