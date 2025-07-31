import { ArrowProps } from '../../lib/types'
import Image from 'next/image'
import styles from '../../styles/arrow.module.css'

export default function Arrow({ direction, onClick }: ArrowProps) {
  const isLeft = direction === 'left'

  return (

    <Image
      src='/utils/next.png'
      alt={isLeft ? 'Previous' : 'Next'}
      width={50}
      height={50}
      onClick={onClick}
      className={isLeft ? styles.leftArrow : styles.rightArrow}
    />

  )

}
