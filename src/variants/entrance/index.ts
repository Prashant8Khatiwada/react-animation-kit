import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Fade in animation
 * Simple opacity transition
 */
export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easings.smooth,
        },
    },
}

/**
 * Fade in with upward slide
 * Combines opacity and vertical movement
 */
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easings.softOvershoot,
        },
    },
}

/**
 * Slide up entrance animation
 * Vertical movement without opacity change
 */
export const slideUp: Variants = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easings.smooth,
        },
    },
}

/**
 * Zoom in entrance animation
 * Scale up with fade in
 */
export const zoomIn: Variants = {
    hidden: {
        scale: 0.95,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easings.softOvershoot,
        },
    },
}

/**
 * Slide down entrance animation
 */
export const slideDown: Variants = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easings.smooth,
        },
    },
}

/**
 * Slide from left entrance animation
 */
export const slideLeft: Variants = {
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easings.smooth,
        },
    },
}

/**
 * Slide from right entrance animation
 */
export const slideRight: Variants = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easings.smooth,
        },
    },
}
