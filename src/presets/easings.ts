/**
 * Custom easing curves for consistent animation feel
 */
export const easings = {
    /** Smooth, professional default - [0.25, 0.4, 0.25, 1] */
    smooth: [0.25, 0.4, 0.25, 1] as const,

    /** Subtle overshoot for playful feel - [0.34, 1.3, 0.64, 1] */
    softOvershoot: [0.34, 1.3, 0.64, 1] as const,

    /** Elastic bounce for emphasis - [0.68, -0.55, 0.265, 1.55] */
    bounce: [0.68, -0.55, 0.265, 1.55] as const,

    /** Quick snap for interactions - [0.4, 0, 0.2, 1] */
    snap: [0.4, 0, 0.2, 1] as const,

    /** Gentle deceleration - [0, 0, 0.2, 1] */
    decelerate: [0, 0, 0.2, 1] as const,

    /** Quick acceleration - [0.4, 0, 1, 1] */
    accelerate: [0.4, 0, 1, 1] as const,

    /** Balanced curve - [0.4, 0, 0.2, 1] */
    standard: [0.4, 0, 0.2, 1] as const,
} as const

export type EasingName = keyof typeof easings
export type Easing = (typeof easings)[EasingName]
