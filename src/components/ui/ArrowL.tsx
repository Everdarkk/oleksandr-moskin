import Image from 'next/image'
import styles from '../../styles/arrow.module.css'

export default function ArrowL() {

  return (

    <Image
      src='/utils/next.png'
      alt={'Previous'}
      width={50}
      height={50}
      className={styles.leftArrow}
    />

  )

}