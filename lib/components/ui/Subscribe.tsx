import { subscribe } from '../../data/bio'
import styles from '../../styles/subscribe.module.css'
import AutoAnimatingText from './AutoAnimatingText'

export default function Subcribe () {
    return (
        <div className={styles.container}>
            <AutoAnimatingText>
                {subscribe.text}
            </AutoAnimatingText>
        </div>
    )
}