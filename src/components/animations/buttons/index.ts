'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const ButtonTap = createAnimation(
    'ButtonTap',
    { tap: { scale: 0.95 } },
    { duration: 0.1, ease: easings.snap }
)

export const ButtonHoverPop = createAnimation(
    'ButtonHoverPop',
    { initial: { scale: 1 }, hover: { scale: 1.05 } },
    { duration: 0.2, ease: easings.snap }
)

export const ButtonHoverArrow = createAnimation(
    'ButtonHoverArrow',
    { initial: { x: 0 }, hover: { x: 4 } },
    { duration: 0.2, ease: easings.snap }
)

export const ButtonSlideBg = createAnimation(
    'ButtonSlideBg',
    { initial: { backgroundPosition: '0% 50%' }, hover: { backgroundPosition: '100% 50%' } },
    { duration: 0.3, ease: easings.smooth }
)

export const ButtonGlow = createAnimation(
    'ButtonGlow',
    {
        initial: { boxShadow: '0 0 0 rgba(102, 126, 234, 0)' },
        hover: { boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)' }
    },
    { duration: 0.2, ease: easings.snap }
)

export const ButtonShake = createAnimation(
    'ButtonShake',
    { animate: { x: [-2, 2, -2, 2, 0] } },
    { duration: 0.4 }
)

export const ButtonRipple = createAnimation(
    'ButtonRipple',
    { hidden: { scale: 0, opacity: 0.5 }, visible: { scale: 2, opacity: 0 } },
    { duration: 0.6, ease: easings.decelerate }
)

export const ButtonExpand = createAnimation(
    'ButtonExpand',
    { tap: { scale: 1.05 } },
    { type: 'spring', stiffness: 400, damping: 10 }
)
