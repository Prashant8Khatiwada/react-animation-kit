'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const IconSpin = createAnimation(
    'IconSpin',
    {
        animate: {
            rotate: 360,
            transition: { duration: 2, repeat: Infinity, ease: 'linear' }
        }
    }
)

export const IconPop = createAnimation(
    'IconPop',
    { initial: { scale: 1 }, animate: { scale: [1, 1.2, 1] } },
    { duration: 0.3, ease: easings.bounce }
)

export const IconShake = createAnimation(
    'IconShake',
    { animate: { rotate: [-5, 5, -5, 5, 0] } },
    { duration: 0.5 }
)

export const IconBlink = createAnimation(
    'IconBlink',
    {
        animate: {
            opacity: [1, 0, 1],
            transition: { duration: 1, repeat: Infinity, ease: 'linear' }
        }
    }
)

export const IconHoverColor = createAnimation(
    'IconHoverColor',
    { initial: { scale: 1 }, hover: { scale: 1.1 } },
    { duration: 0.2, ease: easings.snap }
)

export const IconPulse = createAnimation(
    'IconPulse',
    {
        animate: {
            scale: [1, 1.15, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const IconBounce = createAnimation(
    'IconBounce',
    {
        animate: {
            y: [0, -10, 0],
            transition: { duration: 0.6, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut' }
        }
    }
)

export const IconRotateHover = createAnimation(
    'IconRotateHover',
    { initial: { rotate: 0 }, hover: { rotate: 15 } },
    { duration: 0.2, ease: easings.snap }
)
