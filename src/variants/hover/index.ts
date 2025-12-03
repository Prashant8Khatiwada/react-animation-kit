import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Hover lift - Slight vertical lift
 */
export const hoverLift: Variants = {
    initial: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    hover: {
        y: -8,
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Hover dip - Slight downward press
 */
export const hoverDip: Variants = {
    initial: { y: 0 },
    hover: {
        y: 2,
        transition: { duration: 0.15, ease: easings.snap },
    },
}

/**
 * Hover scale - Scales up on hover
 */
export const hoverScale: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Hover scale soft - Softer scale
 */
export const hoverScaleSoft: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: { duration: 0.3, ease: easings.smooth },
    },
}

/**
 * Hover tilt - Light tilt
 */
export const hoverTilt: Variants = {
    initial: { rotateZ: 0 },
    hover: {
        rotateZ: 2,
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Hover rotate - Tiny rotation
 */
export const hoverRotate: Variants = {
    initial: { rotate: 0 },
    hover: {
        rotate: 5,
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Hover glow - Glow shadow
 */
export const hoverGlow: Variants = {
    initial: { boxShadow: '0 0 0 rgba(102, 126, 234, 0)' },
    hover: {
        boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)',
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Hover shadow - Increases shadow
 */
export const hoverShadow: Variants = {
    initial: { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' },
    hover: {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Hover pulse - Repeating pulse
 */
export const hoverPulse: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Hover float - Floating hover effect
 */
export const hoverFloat: Variants = {
    initial: { y: 0 },
    hover: {
        y: [-2, 2, -2],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Tap shrink - Shrinks on tap
 */
export const tapShrink: Variants = {
    tap: {
        scale: 0.95,
        transition: { duration: 0.1, ease: easings.snap },
    },
}

/**
 * Tap bounce - Bouncy press
 */
export const tapBounce: Variants = {
    tap: {
        scale: 0.9,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
        },
    },
}

/**
 * Tap rotate - Small rotate on tap
 */
export const tapRotate: Variants = {
    tap: {
        rotate: 5,
        transition: { duration: 0.1, ease: easings.snap },
    },
}
