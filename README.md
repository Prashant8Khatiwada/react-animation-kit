# @yourorg/motion

A lightweight, modular, and production-ready React/Next.js animation library built on Framer Motion.

## ✨ Features

🪶 **Lightweight** - Tree-shakeable, only bundle what you use  
🎨 **132 Animations** - Comprehensive collection across 14 categories  
🧩 **Modular** - Clean architecture with separated concerns  
⚡ **SSR-Safe** - Full Next.js App Router compatibility  
🎯 **Unique Identity** - Custom easing curves and motion signatures  
♿ **Accessible** - Built-in reduced motion support  
📦 **Zero Dependencies** - Only peer dependencies (Framer Motion)  
🔒 **TypeScript** - Full type safety and inference  

## 📦 Installation

```bash
npm install @yourorg/motion framer-motion
# or
yarn add @yourorg/motion framer-motion
# or
pnpm add @yourorg/motion framer-motion
```

## 🚀 Quick Start

```tsx
import { motion } from 'framer-motion'
import { fadeInUp, hoverLift, tapShrink } from '@yourorg/motion'

function Component() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      Animated Content
    </motion.div>
  )
}
```

## 🎯 Animation Categories

### 1. Entrance Animations (20)
Perfect for content appearing on screen with smooth, welcoming transitions.

```tsx
import { 
  fadeIn, fadeInSoft, fadeInSharp,
  slideUp, slideDown, slideLeft, slideRight,
  slideUpSoft, slideRightLong,
  scaleIn, scaleInSoft, zoomIn,
  blurIn, rotateIn, flipInX, flipInY,
  popIn, dropIn, growIn, revealClip 
} from '@yourorg/motion'
```

### 2. Exit Animations (11)
Graceful exits for content leaving the viewport.

```tsx
import {
  fadeOut, fadeOutFast, zoomOut, scaleDown,
  slideOutLeft, slideOutRight, slideOutUp, slideOutDown,
  rotateOut, flipOutX, collapseOut
} from '@yourorg/motion'
```

### 3. Hover & Tap Animations (13)
Interactive animations for user engagement.

```tsx
import {
  hoverLift, hoverDip, hoverScale, hoverScaleSoft,
  hoverTilt, hoverRotate, hoverGlow, hoverShadow,
  hoverPulse, hoverFloat,
  tapShrink, tapBounce, tapRotate
} from '@yourorg/motion'

// Usage
<motion.button
  variants={hoverLift}
  initial="initial"
  whileHover="hover"
  whileTap={tapShrink.tap}
>
  Click Me
</motion.button>
```

### 4. Loop Animations (11)
Continuous animations for ambient motion.

```tsx
import {
  float, floatWide, floatSlow,
  breath, breathSlow,
  wiggle, shake, bounceLoop,
  pulseGlow, oscillateX, oscillateY
} from '@yourorg/motion'

// Usage
<motion.div variants={float} animate="animate">
  Floating Element
</motion.div>
```

### 5. List & Stagger Animations (11)
Sequential reveals for lists and grids.

```tsx
import {
  staggerContainer, staggerFast, staggerSlow,
  fadeItem, slideItemUp, slideItemRight,
  clipItemReveal, scaleItem, springItem,
  cascadeFade, cascadeSlide
} from '@yourorg/motion'

// Usage
<motion.ul variants={staggerContainer} initial="hidden" animate="visible">
  <motion.li variants={slideItemUp}>Item 1</motion.li>
  <motion.li variants={slideItemUp}>Item 2</motion.li>
  <motion.li variants={slideItemUp}>Item 3</motion.li>
</motion.ul>
```

### 6. Card Animations (10)
Specialized animations for card components.

```tsx
import {
  cardPop, cardFloat, cardHoverGlow, cardHoverLift,
  cardFlip, cardRevealUp, cardSwipeIn, cardSwipeOut,
  cardPress, cardPulse
} from '@yourorg/motion'
```

### 7. Button Animations (8)
Micro-interactions for buttons.

```tsx
import {
  buttonTap, buttonHoverPop, buttonHoverArrow,
  buttonSlideBg, buttonGlow, buttonShake,
  buttonRipple, buttonExpand
} from '@yourorg/motion'
```

### 8. Modal & Overlay Animations (8)
Transitions for modals, sheets, and overlays.

```tsx
import {
  modalFadeIn, modalScaleIn, modalSlideUp, modalPopIn,
  overlayFade, overlayBlurIn,
  sheetSlideUp, sheetSlideDown
} from '@yourorg/motion'
```

### 9. Page Transitions (8)
Full-page and section transitions.

```tsx
import {
  pageFade, pageSlideLeft, pageSlideRight,
  pageScaleIn, pageReveal, pageBlurIn,
  pageSwap, pagePush
} from '@yourorg/motion'
```

### 10. Hero & Banner Animations (7)
Dramatic animations for hero sections.

```tsx
import {
  heroFade, heroRise, heroTextReveal,
  heroImageFloat, heroScaleIn,
  heroStagger, heroShine
} from '@yourorg/motion'
```

### 11. Icon Animations (8)
Micro-interactions for icons.

```tsx
import {
  iconSpin, iconPop, iconShake, iconBlink,
  iconHoverColor, iconPulse, iconBounce,
  iconRotateHover
} from '@yourorg/motion'
```

### 12. Form & Input Animations (6)
Interactions for form elements.

```tsx
import {
  inputFocusGlow, inputSlideIn, inputErrorShake,
  labelFloat, checkboxScale, toggleSlide
} from '@yourorg/motion'
```

### 13. Image Animations (6)
Effects for image reveals and interactions.

```tsx
import {
  imageFadeIn, imageZoomOnHover, imageParallaxFloat,
  imageTilt, imageRevealMask, imageLift
} from '@yourorg/motion'
```

### 14. Loader Animations (5)
Loading indicators and spinners.

```tsx
import {
  loaderPulse, loaderSpin, loaderBounce,
  loaderStretch, loaderWave
} from '@yourorg/motion'
```

## 🎨 Custom Easings

Use our curated easing curves for consistent motion feel:

```tsx
import { easings } from '@yourorg/motion/presets'

const customVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.softOvershoot, // smooth, bounce, snap, decelerate, etc.
    },
  },
}
```

**Available easings**: `smooth`, `softOvershoot`, `bounce`, `snap`, `decelerate`, `accelerate`, `standard`

## ♿ Accessibility

All animations respect `prefers-reduced-motion`:

```tsx
import { useReducedMotion } from '@yourorg/motion'

function Component() {
  const prefersReduced = useReducedMotion()
  const duration = prefersReduced ? 0.01 : 0.5
  
  return <motion.div animate={{ opacity: 1 }} transition={{ duration }} />
}
```

## 🎯 Scroll-Triggered Animations

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

## 📖 Advanced Usage

### Combining Animations

```tsx
import { slideUp, hoverLift } from '@yourorg/motion'

<motion.div
  variants={slideUp}
  initial="hidden"
  whileInView="visible"
  whileHover={hoverLift.hover}
>
  Content
</motion.div>
```

### Custom Timing

```tsx
import { fadeIn, durations } from '@yourorg/motion/presets'

<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ duration: durations.slow }}
/>
```

### Spring Physics

```tsx
import { springs } from '@yourorg/motion/presets'

<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={springs.bouncy}
/>
```

## 📊 Bundle Size

- **Single animation**: ~0.5-1KB
- **Full library**: ~14KB gzipped
- **With hooks & presets**: ~16KB gzipped

All animations are tree-shakeable - only import what you use!

## 🔧 TypeScript

Full TypeScript support with type inference:

```tsx
import type { Variants } from '@yourorg/motion'

const myVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
```

## 🌐 SSR & Next.js

Works seamlessly with Next.js App Router and Pages Router. All client-side hooks are SSR-safe.

```tsx
'use client'  // Add this if using App Router

import { fadeIn } from '@yourorg/motion'
```

## 📚 Requirements

- React 18+
- Framer Motion 10+
- TypeScript 5+ (optional but recommended)

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT © [Your Name]

## 🙏 Credits

Built with ❤️ using [Framer Motion](https://www.framer.com/motion/)

---

**Total Animations**: 132 across 14 categories  
**Bundle Size**: ~14KB gzipped (full library)  
**TypeScript**: 100% type-safe  
**SSR-Safe**: ✅  
**Accessibility**: Built-in reduced motion support
