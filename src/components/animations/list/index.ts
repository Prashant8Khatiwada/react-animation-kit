'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'
import { staggerDelays } from '../../../presets/transitions'

export const StaggerContainer = createAnimation(
    'StaggerContainer',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { staggerChildren: staggerDelays.normal }
)

export const StaggerFast = createAnimation(
    'StaggerFast',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { staggerChildren: staggerDelays.tight }
)

export const StaggerSlow = createAnimation(
    'StaggerSlow',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { staggerChildren: staggerDelays.relaxed }
)

export const FadeItem = createAnimation(
    'FadeItem',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 0.5, ease: easings.smooth }
)

export const SlideItemUp = createAnimation(
    'SlideItemUp',
    { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    { duration: 0.5, ease: easings.softOvershoot }
)

export const SlideItemRight = createAnimation(
    'SlideItemRight',
    { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
    { duration: 0.5, ease: easings.smooth }
)

export const ClipItemReveal = createAnimation(
    'ClipItemReveal',
    { hidden: { clipPath: 'inset(0 100% 0 0)' }, visible: { clipPath: 'inset(0 0% 0 0)' } },
    { duration: 0.6, ease: easings.smooth }
)

export const ScaleItem = createAnimation(
    'ScaleItem',
    { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    { duration: 0.4, ease: easings.softOvershoot }
)

export const SpringItem = createAnimation(
    'SpringItem',
    { hidden: { opacity: 0, scale: 0.8, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } },
    { type: 'spring', stiffness: 300, damping: 20 }
)

export const CascadeFade = createAnimation(
    'CascadeFade',
    { hidden: {}, visible: {} },
    { staggerChildren: 0.15 }
)

export const CascadeSlide = createAnimation(
    'CascadeSlide',
    { hidden: {}, visible: {} },
    { staggerChildren: 0.1, delayChildren: 0.2 }
)
