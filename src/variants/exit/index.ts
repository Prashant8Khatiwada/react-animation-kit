import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Fade out animation
 * Simple opacity transition to transparent
 */
export const fadeOut: Variants = {
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: easings.decelerate,
        },
    },
}

/**
 * Fade out with upward slide
 */
export const fadeOutUp: Variants = {
    visible: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: easings.decelerate,
        },
    },
}

/**
 * Slide out upward
 */
export const slideOutUp: Variants = {
    visible: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: -50,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: easings.decelerate,
        },
    },
}

/**
 * Zoom out animation
 * Scale down with fade out
 */
export const zoomOut: Variants = {
    visible: {
        scale: 1,
        opacity: 1,
    },
    exit: {
        scale: 0.95,
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: easings.decelerate,
        },
    },
}
