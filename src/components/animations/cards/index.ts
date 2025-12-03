'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const CardPop = createAnimation(
    'CardPop',
    { initial: { scale: 1 }, animate: { scale: [1, 1.03, 1] } },
    { duration: 0.3, ease: easings.bounce }
)

export const CardFloat = createAnimation(
    'CardFloat',
    {
        animate: {
            y: [-5, 5, -5],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const CardHoverGlow = createAnimation(
    'CardHoverGlow',
    {
        initial: { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
        hover: { boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)' }
    },
    { duration: 0.2, ease: easings.snap }
)

export const CardHoverLift = createAnimation(
    'CardHoverLift',
    {
        initial: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
        hover: { y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }
    },
    { duration: 0.2, ease: easings.snap }
)

export const CardFlip = createAnimation(
    'CardFlip',
    { front: { rotateY: 0 }, back: { rotateY: 180 } },
    { duration: 0.6, ease: easings.smooth }
)

export const CardRevealUp = createAnimation(
    'CardRevealUp',
    { hidden: { clipPath: 'inset(100% 0 0 0)' }, visible: { clipPath: 'inset(0% 0 0 0)' } },
    { duration: 0.7, ease: easings.smooth }
)

export const CardSwipeIn = createAnimation(
    'CardSwipeIn',
    { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    { duration: 0.5, ease: easings.softOvershoot }
)

export const CardSwipeOut = createAnimation(
    'CardSwipeOut',
    { visible: { x: 0, opacity: 1 }, exit: { x: 100, opacity: 0 } },
    { duration: 0.4, ease: easings.accelerate }
)

export const CardPress = createAnimation(
    'CardPress',
    { tap: { scale: 0.98, y: 2 } },
    { duration: 0.1, ease: easings.snap }
)

export const CardPulse = createAnimation(
    'CardPulse',
    {
        animate: {
            scale: [1, 1.02, 1],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)
