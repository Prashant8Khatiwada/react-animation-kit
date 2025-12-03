import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Card pop - Small scale pop
 */
export const cardPop: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.03, 1],
        transition: {
            duration: 0.3,
            ease: easings.bounce,
        },
    },
}

/**
 * Card float - Subtle float
 */
export const cardFloat: Variants = {
    animate: {
        y: [-5, 5, -5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Card hover glow - Glow on hover
 */
export const cardHoverGlow: Variants = {
    initial: { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    hover: {
        boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Card hover lift - Lift on hover
 */
export const cardHoverLift: Variants = {
    initial: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    hover: {
        y: -8,
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Card flip - Flip card reveal
 */
export const cardFlip: Variants = {
    front: { rotateY: 0 },
    back: {
        rotateY: 180,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Card reveal up - Card unmasks upward
 */
export const cardRevealUp: Variants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: {
        clipPath: 'inset(0% 0 0 0)',
        transition: { duration: 0.7, ease: easings.smooth },
    },
}

/**
 * Card swipe in - Swipe-in card
 */
export const cardSwipeIn: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.softOvershoot },
    },
}

/**
 * Card swipe out - Swipe-out card
 */
export const cardSwipeOut: Variants = {
    visible: { x: 0, opacity: 1 },
    exit: {
        x: 100,
        opacity: 0,
        transition: { duration: 0.4, ease: easings.accelerate },
    },
}

/**
 * Card press - Press-down effect
 */
export const cardPress: Variants = {
    tap: {
        scale: 0.98,
        y: 2,
        transition: { duration: 0.1, ease: easings.snap },
    },
}

/**
 * Card pulse - Gentle pulse
 */
export const cardPulse: Variants = {
    animate: {
        scale: [1, 1.02, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}
