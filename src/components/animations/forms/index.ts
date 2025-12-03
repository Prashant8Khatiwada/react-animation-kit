'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const InputFocusGlow = createAnimation(
    'InputFocusGlow',
    { unfocused: { boxShadow: '0 0 0 rgba(102, 126, 234, 0)' }, focused: { boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.3)' } },
    { duration: 0.2, ease: easings.snap }
)

export const InputSlideIn = createAnimation(
    'InputSlideIn',
    { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    { duration: 0.4, ease: easings.smooth }
)

export const InputErrorShake = createAnimation(
    'InputErrorShake',
    { animate: { x: [-5, 5, -5, 5, 0] } },
    { duration: 0.4 }
)

export const LabelFloat = createAnimation(
    'LabelFloat',
    { default: { y: 0, fontSize: '1rem', opacity: 0.7 }, float: { y: -24, fontSize: '0.75rem', opacity: 1 } },
    { duration: 0.2, ease: easings.snap }
)

export const CheckboxScale = createAnimation(
    'CheckboxScale',
    { unchecked: { scale: 0, opacity: 0 }, checked: { scale: 1, opacity: 1 } },
    { type: 'spring', stiffness: 400, damping: 10 }
)

export const ToggleSlide = createAnimation(
    'ToggleSlide',
    { off: { x: 0 }, on: { x: 20 } },
    { type: 'spring', stiffness: 400, damping: 25 }
)
