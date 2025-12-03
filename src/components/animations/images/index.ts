'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const ImageFadeIn = createAnimation(
    'ImageFadeIn',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 0.6, ease: easings.smooth }
)

export const ImageZoomOnHover = createAnimation(
    'ImageZoomOnHover',
    { initial: { scale: 1 }, hover: { scale: 1.1 } },
    { duration: 0.4, ease: easings.smooth }
)

export const ImageParallaxFloat = createAnimation(
    'ImageParallaxFloat',
    {
        animate: {
            y: [-20, 20, -20],
            transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const ImageTilt = createAnimation(
    'ImageTilt',
    { initial: { rotateX: 0, rotateY: 0 }, hover: { rotateX: 5, rotateY: 5 } },
    { duration: 0.3, ease: easings.snap }
)

export const ImageRevealMask = createAnimation(
    'ImageRevealMask',
    { hidden: { clipPath: 'inset(0 100% 0 0)' }, visible: { clipPath: 'inset(0 0% 0 0)' } },
    { duration: 0.8, ease: easings.smooth }
)

export const ImageLift = createAnimation(
    'ImageLift',
    { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { duration: 0.6, ease: easings.softOvershoot }
)
