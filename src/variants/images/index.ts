import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Image fade in - Soft fade
 */
export const imageFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
}

/**
 * Image zoom on hover - Zoom-in hover
 */
export const imageZoomOnHover: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.1,
        transition: { duration: 0.4, ease: easings.smooth },
    },
}

/**
 * Image parallax float - Floating parallax
 */
export const imageParallaxFloat: Variants = {
    animate: {
        y: [-20, 20, -20],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Image tilt - 3D tilt
 */
export const imageTilt: Variants = {
    initial: { rotateX: 0, rotateY: 0 },
    hover: {
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3, ease: easings.snap },
    },
}

/**
 * Image reveal mask - Mask reveal
 */
export const imageRevealMask: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
        clipPath: 'inset(0 0% 0 0)',
        transition: { duration: 0.8, ease: easings.smooth },
    },
}

/**
 * Image lift - Slight lift on appear
 */
export const imageLift: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easings.softOvershoot },
    },
}
