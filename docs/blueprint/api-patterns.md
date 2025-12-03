# API Patterns & Developer Experience

## Core API Philosophy

1. **Progressive Enhancement**: Start simple, add complexity as needed
2 **Composability**: Small pieces that work together
3. **Type Safety**: Full TypeScript support with inference
4. **Flexibility**: Multiple APIs for different use cases

## Variant API (Low-Level)

### Basic Variant Object
```typescript
import type { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}
```

### Usage with Framer Motion
```tsx
import { motion } from 'framer-motion'
import { fadeIn } from '@yourorg/motion'

function Component() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      Content
    </motion.div>
  )
}
```

### Customizable Variants
```typescript
// Variants can accept parameters
export const slideUp = (amount = 50): Variants => ({
  hidden: {
    opacity: 0,
    y: amount,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
})

// Usage
<motion.div variants={slideUp(100)} initial="hidden" animate="visible" />
```

### Combinable Variants
```typescript
import { fadeIn, slideUp } from '@yourorg/motion'
import { mergeVariants } from '@yourorg/motion/utils'

const fadeSlideUp = mergeVariants(fadeIn, slideUp())

<motion.div variants={fadeSlideUp} initial="hidden" animate="visible" />
```

## Component API (High-Level)

### Preset-Based Components

```tsx
import { Anim } from '@yourorg/motion'

// Simple preset usage
function Hero() {
  return (
    <Anim.Div preset="fadeIn">
      <h1>Welcome</h1>
    </Anim.Div>
  )
}

// With customization
function Card() {
  return (
    <Anim.Div
      preset="slideUp"
      delay={0.2}
      duration={0.8}
      inView
      once
    >
      <p>Card content</p>
    </Anim.Div>
  )
}
```

### Component Implementation

```typescript
// src/components/primitives/AnimDiv.tsx
'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from '../../hooks'
import { getPresetVariant } from '../../utils'
import type { AnimComponentProps } from '../../types'

export const AnimDiv = ({
  preset,
  variants,
  children,
  delay = 0,
  duration,
  inView = false,
  once = true,
  threshold = 0.1,
  className,
  ...props
}: AnimComponentProps<'div'>) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold, once })

  // Resolve variant from preset or use custom
  const resolvedVariants = variants ?? (preset ? getPresetVariant(preset, { duration }) : undefined)

  return (
    <motion.div
      ref={ref}
      variants={resolvedVariants}
      initial="hidden"
      animate={inView ? (isInView ? 'visible' : 'hidden') : 'visible'}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
```

### All Primitive Components

```typescript
// Export motion-wrapped HTML elements
export const Anim = {
  Div: AnimDiv,
  Section: AnimSection,
  Article: AnimArticle,
  Header: AnimHeader,
  Footer: AnimFooter,
  Main: AnimMain,
  Aside: AnimAside,
  Nav: AnimNav,
  Button: AnimButton,
  A: AnimA,
  Span: AnimSpan,
  P: AnimP,
  H1: AnimH1,
  H2: AnimH2,
  H3: AnimH3,
  Li: AnimLi,
  Ul: AnimUl,
}
```

## Preset System

### Preset Registry
```typescript
// src/presets/variants.ts
import type { Variants } from 'framer-motion'
import * as entranceVariants from '../variants/entrance'
import * as exitVariants from '../variants/exit'
import * as hoverVariants from '../variants/hover'

export const presetRegistry: Record<string, Variants> = {
  // Entrance
  fadeIn: entranceVariants.fadeIn,
  slideUp: entranceVariants.slideUp,
  slideDown: entranceVariants.slideDown,
  slideLeft: entranceVariants.slideLeft,
  slideRight: entranceVariants.slideRight,
  zoomIn: entranceVariants.zoomIn,
  bounceIn: entranceVariants.bounceIn,
  
  // Exit
  fadeOut: exitVariants.fadeOut,
  slideOutUp: exitVariants.slideOutUp,
  zoomOut: exitVariants.zoomOut,
  
  // Hover
  lift: hoverVariants.lift,
  glow: hoverVariants.glow,
  scale: hoverVariants.scale,
}

export type PresetName = keyof typeof presetRegistry
```

### Dynamic Preset Customization
```typescript
// src/utils/preset-helpers.ts
export const getPresetVariant = (
  presetName: PresetName,
  options: { duration?: number; ease?: number[] } = {}
): Variants => {
  const baseVariant = presetRegistry[presetName]
  
  if (!options.duration && !options.ease) return baseVariant
  
  // Clone and modify transition
  return {
    ...baseVariant,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...baseVariant.visible.transition,
        ...options,
      },
    },
  }
}
```

## List & Stagger API

### Stagger Container
```tsx
import { Anim } from '@yourorg/motion'

function List() {
  return (
    <Anim.List preset="staggerFade" staggerDelay={0.1}>
      <Anim.Li>Item 1</Anim.Li>
      <Anim.Li>Item 2</Anim.Li>
      <Anim.Li>Item 3</Anim.Li>
    </Anim.List>
  )
}
```

### Stagger Variant Pattern
```typescript
// src/variants/list/stagger-fade.ts
export const staggerFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerFadeChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}
```

### Stagger Component Implementation
```typescript
// src/components/primitives/AnimList.tsx
export const AnimList = ({
  preset = 'staggerFade',
  staggerDelay = 0.1,
  children,
  ...props
}: AnimListProps) => {
  const containerVariant = getStaggerContainerVariant(preset, staggerDelay)
  const childVariant = getStaggerChildVariant(preset)

  return (
    <motion.ul variants={containerVariant} initial="hidden" whileInView="visible" {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          variants: childVariant,
        })
      )}
    </motion.ul>
  )
}
```

## In-View Animation API

### Auto In-View Hook
```typescript
// src/hooks/use-in-view.ts
'use client'

import { useEffect, useRef, useState } from 'react'

export interface UseInViewOptions {
  threshold?: number
  once?: boolean
  rootMargin?: string
}

export const useInView = <T extends Element>(
  elementRef: React.RefObject<T>,
  options: UseInViewOptions = {}
) => {
  const [isInView, setIsInView] = useState(false)
  const { threshold = 0.1, once = true, rootMargin = '0px' } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return isInView
}
```

### Usage

```tsx
// Manual hook usage
import { useInView } from '@yourorg/motion/hooks'

function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.3, once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      Content
    </motion.div>
  )
}

// Or use component prop
import { Anim } from '@yourorg/motion'

function Component() {
  return (
    <Anim.Div preset="fadeIn" inView once threshold={0.3}>
      Content
    </Anim.Div>
  )
}
```

## Hover & Tap API

### Hover Variants
```typescript
// src/variants/hover/lift.ts
export const lift: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -8,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
```

### Usage
```tsx
<motion.div
  variants={lift}
  initial="initial"
  whileHover="hover"
>
  Hover me
</motion.div>

// Or with component
<Anim.Div preset="lift" hover>
  Hover me
</Anim.Div>
```

### Mobile-Safe Hover
```typescript
// src/hooks/use-hover.ts
export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window

  const hoverProps = isTouchDevice
    ? {} // No hover on touch devices
    : {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }

  return { isHovered, hoverProps }
}
```

## TypeScript Types

### Core Types
```typescript
// src/types/components.ts
import type { HTMLMotionProps, Variants } from 'framer-motion'
import type { PresetName } from '../presets'

export interface BaseAnimProps {
  preset?: PresetName
  variants?: Variants
  delay?: number
  duration?: number
  inView?: boolean
  once?: boolean
  threshold?: number
  staggerDelay?: number
}

export type AnimComponentProps<T extends keyof JSX.IntrinsicElements> = BaseAnimProps &
  Omit<HTMLMotionProps<T>, 'variants'>
```

### Variant Types
```typescript
// src/types/variants.ts
export type TransitionEase = number[] | string

export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: TransitionEase
  type?: 'tween' | 'spring'
}

export interface SpringConfig {
  stiffness?: number
  damping?: number
  mass?: number
}
```

## Usage Examples

### Basic Usage
```tsx
import { fadeIn } from '@yourorg/motion'
import { motion } from 'framer-motion'

<motion.div variants={fadeIn} initial="hidden" animate="visible">
  Content
</motion.div>
```

### High-Level Component
```tsx
import { Anim } from '@yourorg/motion'

<Anim.Div preset="slideUp" inView once>
  Content
</Anim.Div>
```

### Custom Variant
```tsx
import { slideUp } from '@yourorg/motion'

<motion.div variants={slideUp(100)} initial="hidden" animate="visible">
  Content
</motion.div>
```

### Stagger List
```tsx
import { Anim } from '@yourorg/motion'

<Anim.List preset="staggerFade" staggerDelay={0.15}>
  {items.map(item => (
    <Anim.Li key={item.id}>{item.name}</Anim.Li>
  ))}
</Anim.List>
```

### Combined Animations
```tsx
import { fadeIn, lift } from '@yourorg/motion'
import { motion } from 'framer-motion'

<motion.div
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  whileHover={lift.hover}
>
  Content
</motion.div>
```
