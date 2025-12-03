import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Modal fade in - Soft fade
 */
export const modalFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: easings.smooth },
    },
}

/**
 * Modal scale in - Zoom-in modal
 */
export const modalScaleIn: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3, ease: easings.softOvershoot },
    },
}

/**
 * Modal slide up - Slide from bottom
 */
export const modalSlideUp: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: easings.softOvershoot },
    },
}

/**
 * Modal pop in - Snappy modal pop
 */
export const modalPopIn: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 15,
        },
    },
}

/**
 * Overlay fade - Background dim fade
 */
export const overlayFade: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
}

/**
 * Overlay blur in - Blur overlay
 */
export const overlayBlurIn: Variants = {
    hidden: { backdropFilter: 'blur(0px)', opacity: 0 },
    visible: {
        backdropFilter: 'blur(8px)',
        opacity: 1,
        transition: { duration: 0.3 },
    },
}

/**
 * Sheet slide up - Mobile sheet entrance
 */
export const sheetSlideUp: Variants = {
    hidden: { y: '100%' },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
}

/**
 * Sheet slide down - Mobile sheet exit
 */
export const sheetSlideDown: Variants = {
    visible: { y: 0 },
    exit: {
        y: '100%',
        transition: { duration: 0.3, ease: easings.accelerate },
    },
}
