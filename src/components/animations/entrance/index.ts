'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const FadeIn = createAnimation(
    'FadeIn',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 0.5, ease: easings.smooth }
)

export const FadeInSoft = createAnimation(
    'FadeInSoft',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 0.8, ease: easings.smooth }
)

export const FadeInSharp = createAnimation(
    'FadeInSharp',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 0.3, ease: easings.snap }
)

export const SlideUp = createAnimation(
    'SlideUp',
    { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const SlideDown = createAnimation(
    'SlideDown',
    { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const SlideLeft = createAnimation(
    'SlideLeft',
    { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const SlideRight = createAnimation(
    'SlideRight',
    { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const SlideUpSoft = createAnimation(
    'SlideUpSoft',
    { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { duration: 0.8, ease: easings.smooth }
)

export const SlideRightLong = createAnimation(
    'SlideRightLong',
    { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    { duration: 0.8, ease: easings.smooth }
)

export const ScaleIn = createAnimation(
    'ScaleIn',
    { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { duration: 0.5, ease: easings.softOvershoot }
)

export const ScaleInSoft = createAnimation(
    'ScaleInSoft',
    { hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { duration: 0.7, ease: easings.smooth }
)

export const ZoomIn = createAnimation(
    'ZoomIn',
    { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { duration: 0.5, ease: easings.softOvershoot }
)

export const BlurIn = createAnimation(
    'BlurIn',
    { hidden: { filter: 'blur(10px)', opacity: 0 }, visible: { filter: 'blur(0px)', opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const RotateIn = createAnimation(
    'RotateIn',
    { hidden: { rotate: -10, opacity: 0 }, visible: { rotate: 0, opacity: 1 } },
    { duration: 0.5, ease: easings.softOvershoot }
)

export const FlipInX = createAnimation(
    'FlipInX',
    { hidden: { rotateX: 90, opacity: 0 }, visible: { rotateX: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.softOvershoot }
)

export const FlipInY = createAnimation(
    'FlipInY',
    { hidden: { rotateY: 90, opacity: 0 }, visible: { rotateY: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.softOvershoot }
)

export const PopIn = createAnimation(
    'PopIn',
    { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { type: 'spring', stiffness: 400, damping: 10 }
)

export const DropIn = createAnimation(
    'DropIn',
    { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { type: 'spring', stiffness: 300, damping: 20 }
)

export const GrowIn = createAnimation(
    'GrowIn',
    { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { duration: 0.5, ease: easings.softOvershoot }
)

export const RevealClip = createAnimation(
    'RevealClip',
    { hidden: { clipPath: 'inset(0 100% 0 0)' }, visible: { clipPath: 'inset(0 0% 0 0)' } },
    { duration: 0.7, ease: easings.smooth }
)
