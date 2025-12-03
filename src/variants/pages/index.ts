import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Page fade - Full fade transition
 */
export const pageFade: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: easings.smooth },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3, ease: easings.decelerate },
    },
}

/**
 * Page slide left - Page enters from left
 */
export const pageSlideLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.smooth },
    },
    exit: {
        x: 100,
        opacity: 0,
        transition: { duration: 0.3, ease: easings.accelerate },
    },
}

/**
 * Page slide right - Page enters from right
 */
export const pageSlideRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.smooth },
    },
    exit: {
        x: -100,
        opacity: 0,
        transition: { duration: 0.3, ease: easings.accelerate },
    },
}

/**
 * Page scale in - Zoom-in page
 */
export const pageScaleIn: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.softOvershoot },
    },
}

/**
 * Page reveal - Upward section reveal
 */
export const pageReveal: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Page blur in - Page deblurs
 */
export const pageBlurIn: Variants = {
    hidden: { filter: 'blur(20px)', opacity: 0 },
    visible: {
        filter: 'blur(0px)',
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Page swap - Swap pages with horizontal slide
 */
export const pageSwap: Variants = {
    enter: { x: '100%', opacity: 0 },
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.smooth },
    },
    exit: {
        x: '-100%',
        opacity: 0,
        transition: { duration: 0.5, ease: easings.smooth },
    },
}

/**
 * Page push - Push old page out, new slides in
 */
export const pagePush: Variants = {
    hidden: { x: '100%' },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
    exit: {
        x: '-100%',
        transition: { duration: 0.4, ease: easings.accelerate },
    },
}
