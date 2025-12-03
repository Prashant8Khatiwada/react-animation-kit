'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const HoverLift = createAnimation(
    'HoverLift',
    {
        initial: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
        hover: { y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }
    },
    { duration: 0.2, ease: easings.snap }
)

export const HoverDip = createAnimation(
    'HoverDip',
    { initial: { y: 0 }, hover: { y: 2 } },
    { duration: 0.15, ease: easings.snap }
)

export const HoverScale = createAnimation(
    'HoverScale',
    { initial: { scale: 1 }, hover: { scale: 1.05 } },
    { duration: 0.2, ease: easings.snap }
)

export const HoverScaleSoft = createAnimation(
    'HoverScaleSoft',
    { initial: { scale: 1 }, hover: { scale: 1.02 } },
    { duration: 0.3, ease: easings.smooth }
)

export const HoverTilt = createAnimation(
    'HoverTilt',
    { initial: { rotateZ: 0 }, hover: { rotateZ: 2 } },
    { duration: 0.2, ease: easings.snap }
)

export const HoverRotate = createAnimation(
    'HoverRotate',
    { initial: { rotate: 0 }, hover: { rotate: 5 } },
    { duration: 0.2, ease: easings.snap }
)

export const HoverGlow = createAnimation(
    'HoverGlow',
    {
        initial: { boxShadow: '0 0 0 rgba(102, 126, 234, 0)' },
        hover: { boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)' }
    },
    { duration: 0.2, ease: easings.snap }
)

export const HoverShadow = createAnimation(
    'HoverShadow',
    {
        initial: { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' },
        hover: { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }
    },
    { duration: 0.2, ease: easings.snap }
)

export const HoverPulse = createAnimation(
    'HoverPulse',
    {
        initial: { scale: 1 },
        hover: {
            scale: [1, 1.05, 1],
            transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const HoverFloat = createAnimation(
    'HoverFloat',
    {
        initial: { y: 0 },
        hover: {
            y: [-2, 2, -2],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const TapShrink = createAnimation(
    'TapShrink',
    { tap: { scale: 0.95 } },
    { duration: 0.1, ease: easings.snap }
)

export const TapBounce = createAnimation(
    'TapBounce',
    { tap: { scale: 0.9 } },
    { type: 'spring', stiffness: 400, damping: 10 }
)

export const TapRotate = createAnimation(
    'TapRotate',
    { tap: { rotate: 5 } },
    { duration: 0.1, ease: easings.snap }
)
