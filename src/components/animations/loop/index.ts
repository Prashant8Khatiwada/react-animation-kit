'use client'

import { createAnimation } from '../../../utils/create-animation'

export const Float = createAnimation(
    'Float',
    {
        animate: {
            y: [-10, 10, -10],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const FloatWide = createAnimation(
    'FloatWide',
    {
        animate: {
            y: [-20, 20, -20],
            transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const FloatSlow = createAnimation(
    'FloatSlow',
    {
        animate: {
            y: [-8, 8, -8],
            transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const Breath = createAnimation(
    'Breath',
    {
        animate: {
            scale: [1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const BreathSlow = createAnimation(
    'BreathSlow',
    {
        animate: {
            scale: [1, 1.03, 1],
            transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const Wiggle = createAnimation(
    'Wiggle',
    {
        animate: {
            rotate: [-2, 2, -2],
            transition: { duration: 0.5, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const ShakeLoop = createAnimation(
    'ShakeLoop',
    {
        animate: {
            x: [-5, 5, -5, 5, 0],
            transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
        }
    }
)

export const BounceLoop = createAnimation(
    'BounceLoop',
    {
        animate: {
            y: [0, -20, 0],
            transition: { duration: 0.6, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut' }
        }
    }
)

export const PulseGlow = createAnimation(
    'PulseGlow',
    {
        animate: {
            boxShadow: [
                '0 0 0 rgba(102, 126, 234, 0)',
                '0 0 20px rgba(102, 126, 234, 0.6)',
                '0 0 0 rgba(102, 126, 234, 0)'
            ],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const OscillateX = createAnimation(
    'OscillateX',
    {
        animate: {
            x: [-15, 15, -15],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const OscillateY = createAnimation(
    'OscillateY',
    {
        animate: {
            y: [-15, 15, -15],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)
