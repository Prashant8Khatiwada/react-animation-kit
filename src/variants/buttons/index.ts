import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Button tap - Quick scale press
 */
export const buttonTap: Variants = {
    tap: {
        scale: 0.95,
        transition: { duration: 0.1, ease: easings.snap },
    },
}

/**
 * Button hover pop - Slight pop on hover
 */
export const buttonHoverPop: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Button hover arrow - Moves arrow icon
 * Apply to arrow icon inside button
 */
export const buttonHoverArrow: Variants = {
    initial: { x: 0 },
    hover: {
        x: 4,
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Button slide bg - Background slides on hover
 */
export const buttonSlideBg: Variants = {
    initial: { backgroundPosition: '0% 50%' },
    hover: {
        backgroundPosition: '100% 50%',
        transition: { duration: 0.3, ease: easings.smooth },
    },
}

/**
 * Button glow - Glow accent
 */
export const buttonGlow: Variants = {
    initial: { boxShadow: '0 0 0 rgba(102, 126, 234, 0)' },
    hover: {
        boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)',
        transition: { duration: 0.2, ease: easings.snap },
    },
}

/**
 * Button shake - Micro shake (invalid state)
 */
export const buttonShake: Variants = {
    animate: {
        x: [-2, 2, -2, 2, 0],
        transition: { duration: 0.4 },
    },
}

/**
 * Button ripple - Radial touch ripple
 * Note: This works best with custom implementation
 */
export const buttonRipple: Variants = {
    initial: { scale: 0, opacity: 0.5 },
    animate: {
        scale: 2,
        opacity: 0,
        transition: { duration: 0.6, ease: easings.decelerate },
    },
}

/**
 * Button expand - Expands slightly on click
 */
export const buttonExpand: Variants = {
    tap: {
        scale: 1.05,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
        },
    },
}
