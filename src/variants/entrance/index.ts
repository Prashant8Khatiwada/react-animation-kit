import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Fade in animation - Smooth opacity reveal
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: easings.smooth },
    },
}

/**
 * Fade in soft - Slower, smoother fade
 */
export const fadeInSoft: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: easings.smooth },
    },
}

/**
 * Fade in sharp - Faster fade
 */
export const fadeInSharp: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: easings.snap },
    },
}

/**
 * Slide up - Slide from below
 */
export const slideUp: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Slide down - Slide from above
 */
export const slideDown: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Slide left - Slide from right
 */
export const slideLeft: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Slide right - Slide from left
 */
export const slideRight: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Slide up soft - Slow upward slide
 */
export const slideUpSoft: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: easings.smooth },
    },
}

/**
 * Slide right long - Longer horizontal travel
 */
export const slideRightLong: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: easings.smooth },
    },
}

/**
 * Scale in - Subtle zoom-in
 */
export const scaleIn: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.softOvershoot },
    },
}

/**
 * Scale in soft - Gentle scale-up
 */
export const scaleInSoft: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.7, ease: easings.smooth },
    },
}

/**
 * Zoom in - Strong zoom entrance
 */
export const zoomIn: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.softOvershoot },
    },
}

/**
 * Blur in - Blur to sharp reveal
 */
export const blurIn: Variants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: {
        filter: 'blur(0px)',
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Rotate in - Light spin reveal
 */
export const rotateIn: Variants = {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.softOvershoot },
    },
}

/**
 * Flip in X - Flip on X-axis
 */
export const flipInX: Variants = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: {
        rotateX: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.softOvershoot },
    },
}

/**
 * Flip in Y - Flip on Y-axis
 */
export const flipInY: Variants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: {
        rotateY: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.softOvershoot },
    },
}

/**
 * Pop in - Punchy scale bounce
 */
export const popIn: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
        },
    },
}

/**
 * Drop in - Drop down and settle
 */
export const dropIn: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
        },
    },
}

/**
 * Grow in - Expands into place
 */
export const growIn: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: easings.softOvershoot },
    },
}

/**
 * Reveal clip - Mask-based reveal
 */
export const revealClip: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
        clipPath: 'inset(0 0% 0 0)',
        transition: { duration: 0.7, ease: easings.smooth },
    },
}
