# @yourorg/motion

A lightweight, modular, and production-ready React/Next.js animation library built on Framer Motion.

## Features

🪶 **Lightweight** - Tree-shakeable, only bundle what you use  
🧩 **Modular** - Clean architecture with separated concerns  
⚡ **SSR-Safe** - Full Next.js App Router compatibility  
🎨 **Unique Identity** - Custom easing curves and motion signatures  
♿ **Accessible** - Built-in reduced motion support  
📦 **Zero Dependencies** - Only peer dependencies (Framer Motion)  
🔒 **TypeScript** - Full type safety and inference  

## Installation

```bash
npm install @yourorg/motion framer-motion
# or
yarn add @yourorg/motion framer-motion
# or
pnpm add @yourorg/motion framer-motion
```

## Quick Start

### Basic Usage (Low-Level API)

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
      Hello World
    </motion.div>
  )
}
```

### Available Animations

**Entrance Animations**
- `fadeIn` - Simple fade in
- `fadeInUp` - Fade in with upward slide
- `slideUp` - Slide up entrance
- `slideDown` - Slide down entrance
- `slideLeft` - Slide from left
- `slideRight` - Slide from right
- `zoomIn` - Scale up entrance

**Exit Animations**
- `fadeOut` - Simple fade out
- `fadeOutUp` - Fade out with upward movement
- `slideOutUp` - Slide out upward
- `zoomOut` - Scale down exit

## Accessibility

All animations respect `prefers-reduced-motion`:

```tsx
import { useReducedMotion } from '@yourorg/motion'

function Component() {
  const prefersReduced = useReducedMotion()
  const duration = prefersReduced ? 0.01 : 0.5
  
  return <motion.div animate={{ opacity: 1 }} transition={{ duration }} />
}
```

## Scroll-Triggered Animations

```tsx
import { useInView } from '@yourorg/motion'
import { useRef } from 'react'

function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.5, once: true })
  
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
```

## Custom Easings

Use our curated easing curves:

```tsx
import { easings } from '@yourorg/motion/presets'

const customVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.softOvershoot, // or smooth, bounce, snap, etc.
    },
  },
}
```

## TypeScript

Full TypeScript support with type inference:

```tsx
import type { Variants } from '@yourorg/motion'

const myVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
```

## Requirements

- React 18+
- Framer Motion 10+
- TypeScript 5+ (optional but recommended)

## Documentation

Coming soon: Full documentation site with interactive playground.

## License

MIT

## Contributing

Contributions welcome! Please read our contributing guidelines.

---

Built with ❤️ using Framer Motion
