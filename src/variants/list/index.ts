import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'
import { staggerDelays } from '../../presets/transitions'

/**
 * Stagger container - Sequential animation parent
 * Use this on the parent element
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelays.normal,
        },
    },
}

/**
 * Stagger fast - Fast stagger
 */
export const staggerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelays.tight,
        },
    },
}

/**
 * Stagger slow - Slow stagger
 */
export const staggerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelays.relaxed,
        },
    },
}

/**
 * Fade item - Simple item fade
 * Use on child elements
 */
export const fadeItem: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: easings.smooth },
    },
}

/**
 * Slide item up - Item rises in
 */
export const slideItemUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easings.softOvershoot },
    },
}

/**
 * Slide item right - Item enters from right
 */
export const slideItemRight: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: easings.smooth },
    },
}

/**
 * Clip item reveal - Masked list reveal
 */
export const clipItemReveal: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
        clipPath: 'inset(0 0% 0 0)',
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Scale item - Item scales in
 */
export const scaleItem: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: easings.softOvershoot },
    },
}

/**
 * Spring item - Spring physics item entrance
 */
export const springItem: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
        },
    },
}

/**
 * Cascade fade - Items fade one by one
 * Container variant
 */
export const cascadeFade: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

/**
 * Cascade slide - Items slide in order
 * Container variant
 */
export const cascadeSlide: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}
