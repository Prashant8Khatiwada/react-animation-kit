/**
 * Standard duration presets for consistent timing
 */
export const durations = {
    /** Immediate feedback - 0.1s */
    instant: 0.1,

    /** Quick transitions - 0.2s */
    fast: 0.2,

    /** Default duration - 0.3s */
    normal: 0.3,

    /** Noticeable animations - 0.5s */
    moderate: 0.5,

    /** Dramatic effects - 0.8s */
    slow: 0.8,

    /** Hero sections, special moments - 1.2s */
    slower: 1.2,
} as const

/**
 * Delay presets for animation timing
 */
export const delays = {
    none: 0,
    tiny: 0.05,
    small: 0.1,
    medium: 0.15,
    large: 0.2,
    huge: 0.3,
} as const

/**
 * Stagger delay presets for list animations
 */
export const staggerDelays = {
    /** Rapid succession - 0.05s */
    tight: 0.05,

    /** Default stagger - 0.1s */
    normal: 0.1,

    /** Slower reveal - 0.15s */
    relaxed: 0.15,

    /** Emphasized stagger - 0.2s */
    dramatic: 0.2,
} as const

export type DurationName = keyof typeof durations
export type DelayName = keyof typeof delays
export type StaggerDelayName = keyof typeof staggerDelays
