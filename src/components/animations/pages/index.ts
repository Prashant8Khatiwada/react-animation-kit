'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const PageFade = createAnimation(
    'PageFade',
    {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.3, ease: easings.decelerate } }
    },
    { duration: 0.5, ease: easings.smooth }
)

export const PageSlideLeft = createAnimation(
    'PageSlideLeft',
    {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 100, opacity: 0, transition: { duration: 0.3, ease: easings.accelerate } }
    },
    { duration: 0.5, ease: easings.smooth }
)

export const PageSlideRight = createAnimation(
    'PageSlideRight',
    {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0, transition: { duration: 0.3, ease: easings.accelerate } }
    },
    { duration: 0.5, ease: easings.smooth }
)

export const PageScaleIn = createAnimation(
    'PageScaleIn',
    { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { duration: 0.5, ease: easings.softOvershoot }
)

export const PageReveal = createAnimation(
    'PageReveal',
    { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const PageBlurIn = createAnimation(
    'PageBlurIn',
    { hidden: { filter: 'blur(20px)', opacity: 0 }, visible: { filter: 'blur(0px)', opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const PageSwap = createAnimation(
    'PageSwap',
    {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: easings.smooth } }
    },
    { duration: 0.5, ease: easings.smooth }
)

export const PagePush = createAnimation(
    'PagePush',
    {
        hidden: { x: '100%' },
        visible: { x: 0 },
        exit: { x: '-100%', transition: { duration: 0.4, ease: easings.accelerate } }
    },
    { type: 'spring', stiffness: 300, damping: 30 }
)
