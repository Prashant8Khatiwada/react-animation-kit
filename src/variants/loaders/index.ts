import type { Variants } from 'framer-motion'

/**
 * Loader pulse - Pulse loop
 */
export const loaderPulse: Variants = {
    animate: {
        scale: [1, 1.2, 1],
        opacity: [1, 0.5, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Loader spin - Spinning loader
 */
export const loaderSpin: Variants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
        },
    },
}

/**
 * Loader bounce - Bouncing dots
 * Apply to individual dots with delays
 */
export const loaderBounce: Variants = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeOut',
        },
    },
}

/**
 * Loader stretch - Stretch loop
 */
export const loaderStretch: Variants = {
    animate: {
        scaleY: [1, 1.5, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Loader wave - Wave across bars
 * Apply to bars with increasing delays
 */
export const loaderWave: Variants = {
    animate: {
        scaleY: [1, 1.5, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}
