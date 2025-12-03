'use client'

import { motion, HTMLMotionProps, Variants, Transition } from 'framer-motion'
import React, { forwardRef } from 'react'

export interface AnimationOptions {
    duration?: number
    delay?: number
    ease?: string | number[] | readonly number[] | ((t: number) => number)
    stiffness?: number
    damping?: number
    mass?: number
    type?: 'spring' | 'tween' | 'inertia' | 'keyframes' | 'just'
    staggerChildren?: number
    delayChildren?: number
    repeat?: number
    repeatDelay?: number
    repeatType?: 'loop' | 'reverse' | 'mirror'
    // Allow other transition props
    [key: string]: unknown
}

export interface AnimationProps extends Omit<HTMLMotionProps<"div">, "transition"> {
    children?: React.ReactNode
    className?: string
    as?: React.ElementType
    options?: AnimationOptions
}

export function createAnimation(
    name: string,
    baseVariants: Variants,
    defaultOptions: AnimationOptions = {}
) {
    const Component = forwardRef<HTMLElement, AnimationProps>(({
        children,
        className,
        as: Tag = "div",
        options,
        initial = "hidden",
        animate = "visible",
        exit = "exit",
        whileHover = "hover",
        whileTap = "tap",
        ...props
    }, ref) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const MotionTag = motion(Tag as any) as any

        // Merge default options with user options
        const config = { ...defaultOptions, ...options }

        // Deep clone and merge transition into variants
        // This allows options to override variant-specific transitions
        const variants = React.useMemo(() => {
            // Construct transition inside useMemo to avoid recreating on every render
            const globalTransition: Transition = {
                duration: config.duration,
                delay: config.delay,
                ease: config.ease,
                type: config.type || (config.stiffness ? "spring" : "tween"),
                stiffness: config.stiffness,
                damping: config.damping,
                mass: config.mass,
                ...config
            }

            const newVariants: Variants = { ...baseVariants }
            for (const key in newVariants) {
                const variant = newVariants[key]
                if (typeof variant === 'object' && variant !== null && !Array.isArray(variant)) {
                    newVariants[key] = {
                        ...variant,
                        transition: {
                            ...(typeof variant === 'object' && 'transition' in variant ? (variant as { transition?: object }).transition : {}),
                            ...globalTransition
                        }
                    }
                }
            }
            return newVariants
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [baseVariants])

        return (
            <MotionTag
                {...props}
                ref={ref}
                className={className}
                initial={initial}
                animate={animate}
                exit={exit}
                whileHover={whileHover}
                whileTap={whileTap}
                variants={variants}
            >
                {children}
            </MotionTag>
        )
    })

    Component.displayName = name
    return Component
}
