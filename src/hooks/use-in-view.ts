'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'

export interface UseInViewOptions {
    /** Threshold for intersection (0-1) */
    threshold?: number

    /** Only trigger once */
    once?: boolean

    /** Root margin for early/late trigger */
    rootMargin?: string

    /** Root element for intersection */
    root?: Element | null
}

/**
 * Hook to detect when an element enters the viewport
 * Uses Intersection Observer API
 * 
 * @example
 * ```tsx
 * const ref = useRef(null)
 * const isInView = useInView(ref, { threshold: 0.5, once: true })
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     animate={isInView ? 'visible' : 'hidden'}
 *   />
 * )
 * ```
 */
export const useInView = <T extends Element = Element>(
    elementRef: RefObject<T>,
    options: UseInViewOptions = {}
): boolean => {
    const { threshold = 0.1, once = true, rootMargin = '0px', root = null } = options
    const [isInView, setIsInView] = useState(false)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        // SSR safety
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            setIsInView(true) // Fallback: show content
            return
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries

            if (entry.isIntersecting) {
                setIsInView(true)
                if (once && observerRef.current) {
                    observerRef.current.disconnect()
                }
            } else if (!once) {
                setIsInView(false)
            }
        }

        observerRef.current = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin,
            root,
        })

        observerRef.current.observe(element)

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [elementRef, threshold, once, rootMargin, root])

    return isInView
}
