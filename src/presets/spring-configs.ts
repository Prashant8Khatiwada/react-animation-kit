import type { Spring } from 'framer-motion'

/**
 * Spring configuration presets for physics-based animations
 */
export const springs = {
    /** Gentle, smooth spring */
    gentle: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 1,
    } as Spring,

    /** Bouncy, playful spring */
    bouncy: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
        mass: 0.5,
    } as Spring,

    /** Snappy, responsive spring */
    snappy: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8,
    } as Spring,

    /** Slow, dramatic spring */
    slow: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        mass: 1.2,
    } as Spring,
} as const

export type SpringName = keyof typeof springs
