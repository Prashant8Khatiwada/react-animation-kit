import type { Variants } from 'framer-motion'

/**
 * Float - Up-down motion
 */
export const float: Variants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Float wide - Larger movement
 */
export const floatWide: Variants = {
    animate: {
        y: [-20, 20, -20],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Float slow - Slow calm float
 */
export const floatSlow: Variants = {
    animate: {
        y: [-8, 8, -8],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Breath - Rhythmic scale
 */
export const breath: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Breath slow - Slow version
 */
export const breathSlow: Variants = {
    animate: {
        scale: [1, 1.03, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Wiggle - Micro rotation
 */
export const wiggle: Variants = {
    animate: {
        rotate: [-2, 2, -2],
        transition: {
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Shake - Repeated shake
 */
export const shake: Variants = {
    animate: {
        x: [-5, 5, -5, 5, 0],
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2,
        },
    },
}

/**
 * Bounce loop - Bounce forever
 */
export const bounceLoop: Variants = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: 'easeOut',
        },
    },
}

/**
 * Pulse glow - Glow pulse
 */
export const pulseGlow: Variants = {
    animate: {
        boxShadow: [
            '0 0 0 rgba(102, 126, 234, 0)',
            '0 0 20px rgba(102, 126, 234, 0.6)',
            '0 0 0 rgba(102, 126, 234, 0)',
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Oscillate X - Side-to-side motion
 */
export const oscillateX: Variants = {
    animate: {
        x: [-15, 15, -15],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Oscillate Y - Vertical oscillation
 */
export const oscillateY: Variants = {
    animate: {
        y: [-15, 15, -15],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}
