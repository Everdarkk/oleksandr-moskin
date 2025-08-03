'use client'

import styles from '@/styles/notfound.module.css'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import Transition from '@/components/ui/Transition'

export default function NotFound() {

    useEffect(() => {
        setTimeout(()=> redirect('/about'), 4000)
    }, [])

    return (
        <section className={styles.container}>
            <Transition>
                <h5 className={styles.title}>
                    This page does not exist
                </h5>
                
                <p className={styles.text}>
                    You will be redirected automatically to main page
                </p>
            </Transition>
        </section>
    )
}
