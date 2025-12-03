import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Input focus glow - Glow when focused
 */
export const inputFocusGlow: Variants = {
    unfocused: { boxShadow: '0 0 0 rgba(102, 126, 234, 0)' },
    focused: {
        boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.3)',
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Input slide in - Inputs slide in
 */
export const inputSlideIn: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: easings.smooth },
    },
}

/**
 * Input error shake - Shake on validation error
 */
export const inputErrorShake: Variants = {
    animate: {
        x: [-5, 5, -5, 5, 0],
        transition: { duration: 0.4 },
    },
}

/**
 * Label float - Label floats up
 */
export const labelFloat: Variants = {
    default: { y: 0, fontSize: '1rem', opacity: 0.7 },
    float: {
        y: -24,
        fontSize: '0.75rem',
        opacity: 1,
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Checkbox scale - Checkbox scales on check
 */
export const checkboxScale: Variants = {
    unchecked: { scale: 0, opacity: 0 },
    checked: {
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
 * Toggle slide - Toggle knob moves smoothly
 */
export const toggleSlide: Variants = {
    off: { x: 0 },
    on: {
        x: 20,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 25,
        },
    },
}
