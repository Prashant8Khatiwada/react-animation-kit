'use client'

import { createAnimation } from '../../../utils/create-animation'
import { easings } from '../../../presets/easings'

export const FadeOut = createAnimation(
    'FadeOut',
    { visible: { opacity: 1 }, exit: { opacity: 0 } },
    { duration: 0.3, ease: easings.decelerate }
)

export const FadeOutFast = createAnimation(
    'FadeOutFast',
    { visible: { opacity: 1 }, exit: { opacity: 0 } },
    { duration: 0.15, ease: easings.decelerate }
)

export const ZoomOut = createAnimation(
    'ZoomOut',
    { visible: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 } },
    { duration: 0.3, ease: easings.decelerate }
)

export const ScaleDown = createAnimation(
    'ScaleDown',
    { visible: { scale: 1, opacity: 1 }, exit: { scale: 0.95, opacity: 0 } },
    { duration: 0.4, ease: easings.decelerate }
)

export const SlideOutLeft = createAnimation(
    'SlideOutLeft',
    { visible: { x: 0, opacity: 1 }, exit: { x: -100, opacity: 0 } },
    { duration: 0.4, ease: easings.accelerate }
)

export const SlideOutRight = createAnimation(
    'SlideOutRight',
    { visible: { x: 0, opacity: 1 }, exit: { x: 100, opacity: 0 } },
    { duration: 0.4, ease: easings.accelerate }
)

export const SlideOutUp = createAnimation(
    'SlideOutUp',
    { visible: { y: 0, opacity: 1 }, exit: { y: -50, opacity: 0 } },
    { duration: 0.3, ease: easings.decelerate }
)

export const SlideOutDown = createAnimation(
    'SlideOutDown',
    { visible: { y: 0, opacity: 1 }, exit: { y: 50, opacity: 0 } },
    { duration: 0.4, ease: easings.accelerate }
)

export const RotateOut = createAnimation(
    'RotateOut',
    { visible: { rotate: 0, opacity: 1 }, exit: { rotate: 10, opacity: 0 } },
    { duration: 0.3, ease: easings.decelerate }
)

export const FlipOutX = createAnimation(
    'FlipOutX',
    { visible: { rotateX: 0, opacity: 1 }, exit: { rotateX: 90, opacity: 0 } },
    { duration: 0.4, ease: easings.accelerate }
)

export const CollapseOut = createAnimation(
    'CollapseOut',
    { visible: { scaleY: 1, opacity: 1 }, exit: { scaleY: 0, opacity: 0 } },
    { duration: 0.3, ease: easings.decelerate }
)
