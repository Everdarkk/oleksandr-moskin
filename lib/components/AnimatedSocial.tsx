import PulseIcon from "./ui/PulseIcon"
import { Instagram } from "lucide-react"

export default function AnimatedSocial() {
    return (
        <>
            <PulseIcon href={'/'} ariaLabel='link' icon={<Instagram/>}/>
        </>
    )
}