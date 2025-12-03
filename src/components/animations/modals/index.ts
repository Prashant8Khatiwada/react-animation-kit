'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const ModalFadeIn = createAnimation(
    'ModalFadeIn',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 0.3, ease: easings.smooth }
)

export const ModalScaleIn = createAnimation(
    'ModalScaleIn',
    { hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { duration: 0.3, ease: easings.softOvershoot }
)

export const ModalSlideUp = createAnimation(
    'ModalSlideUp',
    { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    { duration: 0.4, ease: easings.softOvershoot }
)

export const ModalPopIn = createAnimation(
    'ModalPopIn',
    { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
    { type: 'spring', stiffness: 400, damping: 15 }
)

export const OverlayFade = createAnimation(
    'OverlayFade',
    { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    { duration: 0.2 }
)

export const OverlayBlurIn = createAnimation(
    'OverlayBlurIn',
    { hidden: { backdropFilter: 'blur(0px)', opacity: 0 }, visible: { backdropFilter: 'blur(8px)', opacity: 1 } },
    { duration: 0.3 }
)

export const SheetSlideUp = createAnimation(
    'SheetSlideUp',
    { hidden: { y: '100%' }, visible: { y: 0 } },
    { type: 'spring', stiffness: 300, damping: 30 }
)

export const SheetSlideDown = createAnimation(
    'SheetSlideDown',
    { visible: { y: 0 }, exit: { y: '100%' } },
    { duration: 0.3, ease: easings.accelerate }
)
