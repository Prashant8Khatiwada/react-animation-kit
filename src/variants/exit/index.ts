import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Fade out - Smooth fade
 */
export const fadeOut: Variants = {
    visible: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: { duration: 0.3, ease: easings.decelerate },
    },
}

/**
 * Fade out fast - Quick fade
 */
export const fadeOutFast: Variants = {
    visible: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: { duration: 0.15, ease: easings.decelerate },
    },
}

/**
 * Zoom out - Shrinks while fading
 */
export const zoomOut: Variants = {
    visible: { scale: 1, opacity: 1 },
    exit: {
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.3, ease: easings.decelerate },
    },
}

/**
 * Scale down - Soft scale-out
 */
export const scaleDown: Variants = {
    visible: { scale: 1, opacity: 1 },
    exit: {
        scale: 0.95,
        opacity: 0,
        transition: { duration: 0.4, ease: easings.decelerate },
    },
}

/**
 * Slide out left - Exits left
 */
export const slideOutLeft: Variants = {
    visible: { x: 0, opacity: 1 },
    exit: {
        x: -100,
        opacity: 0,
        transition: { duration: 0.4, ease: easings.accelerate },
    },
}

/**
 * Slide out right - Exits right
 */
export const slideOutRight: Variants = {
    visible: { x: 0, opacity: 1 },
    exit: {
        x: 100,
        opacity: 0,
        transition: { duration: 0.4, ease: easings.accelerate },
    },
}

/**
 * Slide out up - Moves out upward
 */
export const slideOutUp: Variants = {
    visible: { y: 0, opacity: 1 },
    exit: {
        y: -50,
        opacity: 0,
        transition: { duration: 0.3, ease: easings.decelerate },
    },
}

/**
 * Slide out down - Drops down
 */
export const slideOutDown: Variants = {
    visible: { y: 0, opacity: 1 },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 0.4, ease: easings.accelerate },
    },
}

/**
 * Rotate out - Rotational exit
 */
export const rotateOut: Variants = {
    visible: { rotate: 0, opacity: 1 },
    exit: {
        rotate: 10,
        opacity: 0,
        transition: { duration: 0.3, ease: easings.decelerate },
    },
}

/**
 * Flip out X - X-axis flip exit
 */
export const flipOutX: Variants = {
    visible: { rotateX: 0, opacity: 1 },
    exit: {
        rotateX: 90,
        opacity: 0,
        transition: { duration: 0.4, ease: easings.accelerate },
    },
}

/**
 * Collapse out - Height shrinks to zero
 */
export const collapseOut: Variants = {
    visible: { scaleY: 1, opacity: 1 },
    exit: {
        scaleY: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: easings.decelerate },
    },
}
