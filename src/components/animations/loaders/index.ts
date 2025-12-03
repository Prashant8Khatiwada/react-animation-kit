'use client'

import { createAnimation } from '../../../utils/create-animation'

export const LoaderPulse = createAnimation(
    'LoaderPulse',
    {
        animate: {
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const LoaderSpin = createAnimation(
    'LoaderSpin',
    {
        animate: {
            rotate: 360,
            transition: { duration: 1, repeat: Infinity, ease: 'linear' }
        }
    }
)

export const LoaderBounce = createAnimation(
    'LoaderBounce',
    {
        animate: {
            y: [0, -20, 0],
            transition: { duration: 0.6, repeat: Infinity, ease: 'easeOut' }
        }
    }
)

export const LoaderStretch = createAnimation(
    'LoaderStretch',
    {
        animate: {
            scaleY: [1, 1.5, 1],
            transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const LoaderWave = createAnimation(
    'LoaderWave',
    {
        animate: {
            scaleY: [1, 1.5, 1],
            transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)
