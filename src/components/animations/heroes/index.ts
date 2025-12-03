'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const HeroFade = createAnimation(
    'HeroFade',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 1.2, ease: easings.smooth }
)

export const HeroRise = createAnimation(
    'HeroRise',
    { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { duration: 1, ease: easings.softOvershoot }
)

export const HeroTextReveal = createAnimation(
    'HeroTextReveal',
    { hidden: { clipPath: 'inset(0 100% 0 0)' }, visible: { clipPath: 'inset(0 0% 0 0)' } },
    { duration: 1, ease: easings.smooth }
)

export const HeroImageFloat = createAnimation(
    'HeroImageFloat',
    {
        animate: {
            y: [-10, 10, -10],
            transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }
    }
)

export const HeroScaleIn = createAnimation(
    'HeroScaleIn',
    { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { duration: 1, ease: easings.softOvershoot }
)

export const HeroStagger = createAnimation(
    'HeroStagger',
    { hidden: {}, visible: {} },
    { staggerChildren: 0.2, delayChildren: 0.3 }
)

export const HeroShine = createAnimation(
    'HeroShine',
    {
        animate: {
            backgroundPosition: ['200% 0', '-200% 0'],
            transition: { duration: 3, repeat: Infinity, ease: 'linear' }
        }
    }
)
