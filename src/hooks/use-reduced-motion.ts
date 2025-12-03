'use client'

import { useEffect, useState } from 'react'

export interface UseReducedMotionOptions {
    /** Default value before client-side check */
    defaultValue?: boolean
}

/**
 * Hook to detect if user prefers reduced motion
 * Respects system accessibility settings
 * 
 * @example
 * ```tsx
 * const prefersReduced = useReducedMotion()
 * const duration = prefersReduced ? 0.01 : 0.5
 * ```
 */
export const useReducedMotion = (options: UseReducedMotionOptions = {}) => {
    const { defaultValue = false } = options
    const [prefersReduced, setPrefersReduced] = useState(defaultValue)

    useEffect(() => {
        // SSR safety check
        if (typeof window === 'undefined') return

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReduced(mediaQuery.matches)

        const handler = (event: MediaQueryListEvent) => {
            setPrefersReduced(event.matches)
        }

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handler)
            return () => mediaQuery.removeEventListener('change', handler)
        }

        // Fallback for older browsers
        mediaQuery.addListener(handler)
        return () => mediaQuery.removeListener(handler)
    }, [])

    return prefersReduced
}
