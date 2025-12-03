import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Icon spin - Continuous rotation
 */
export const iconSpin: Variants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
        },
    },
}

/**
 * Icon pop - Quick scale pop
 */
export const iconPop: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.2, 1],
        transition: { duration: 0.3, ease: easings.bounce },
    },
}

/**
 * Icon shake - Light shake
 */
export const iconShake: Variants = {
    animate: {
        rotate: [-5, 5, -5, 5, 0],
        transition: { duration: 0.5 },
    },
}

/**
 * Icon blink - Turning opacity on/off
 */
export const iconBlink: Variants = {
    animate: {
        opacity: [1, 0, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
        },
    },
}

/**
 * Icon hover color - Color shift on hover
 * Note: Works best with CSS color property
 */
export const iconHoverColor: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.1,
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Icon pulse - Icon pulse
 */
export const iconPulse: Variants = {
    animate: {
        scale: [1, 1.15, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Icon bounce - Small bounce loop
 */
export const iconBounce: Variants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: 'easeOut',
        },
    },
}

/**
 * Icon rotate hover - Rotates slightly on hover
 */
export const iconRotateHover: Variants = {
    initial: { rotate: 0 },
    hover: {
        rotate: 15,
        transition: { duration: 0.2, ease: easings.snap },
    },
}
