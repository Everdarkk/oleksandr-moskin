import Image from 'next/image'
import styles from '../../styles/arrow.module.css'

export default function ArrowR() {

  return (

    <Image
      src='/utils/next.png'
      alt={'Next'}
      width={50}
      height={50}
      className={styles.rightArrow}
    />

  )

}