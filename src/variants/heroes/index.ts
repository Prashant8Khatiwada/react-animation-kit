import type { Variants } from 'framer-motion'
import { easings } from '../../presets/easings'

/**
 * Hero fade - Big slow fade
 */
export const heroFade: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, ease: easings.smooth },
    },
}

/**
 * Hero rise - Rise upward on load
 */
export const heroRise: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: easings.softOvershoot },
    },
}

/**
 * Hero text reveal - Masked text reveal
 */
export const heroTextReveal: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
        clipPath: 'inset(0 0% 0 0)',
        transition: { duration: 1, ease: easings.smooth },
    },
}

/**
 * Hero image float - Floating hero image
 */
export const heroImageFloat: Variants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

/**
 * Hero scale in - Zoom-in hero
 */
export const heroScaleIn: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: easings.softOvershoot },
    },
}

/**
 * Hero stagger - Multiple hero elements
 * Container variant for staggered hero content
 */
export const heroStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

/**
 * Hero shine - Shine sweep across element
 */
export const heroShine: Variants = {
    animate: {
        backgroundPosition: ['200% 0', '-200% 0'],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
        },
    },
}
