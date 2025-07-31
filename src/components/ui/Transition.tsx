'use client'

import { motion, AnimatePresence } from 'motion/react'
import { TransitionProps } from '../../lib/types'



export default function Transition ({ children}: TransitionProps) {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}