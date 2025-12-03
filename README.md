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
import { FadeInUp } from '@yourorg/motion/animations'

function Component() {
  return (
    <FadeInUp
      whileHover="hover"
      whileTap="tap"
    >
      Animated Content
    </FadeInUp>
  )
}
```

## 🎯 Animation Categories

### 1. Entrance Animations (20)
Perfect for content appearing on screen with smooth, welcoming transitions.

```tsx
import { 
  FadeIn, FadeInSoft, FadeInSharp,
  SlideUp, SlideDown, SlideLeft, SlideRight,
  SlideUpSoft, SlideRightLong,
  ScaleIn, ScaleInSoft, ZoomIn,
  BlurIn, RotateIn, FlipInX, FlipInY,
  PopIn, DropIn, GrowIn, RevealClip 
} from '@yourorg/motion/animations'

// Usage
<SlideUp>
  <h1>Welcome!</h1>
</SlideUp>
```

### 2. Exit Animations (11)
Graceful exits for content leaving the viewport.

```tsx
import {
  FadeOut, FadeOutFast, ZoomOut, ScaleDown,
  SlideOutLeft, SlideOutRight, SlideOutUp, SlideOutDown,
  RotateOut, FlipOutX, CollapseOut
} from '@yourorg/motion/animations'
```

### 3. Hover & Tap Animations (13)
Interactive animations for user engagement.

```tsx
import {
  HoverLift, HoverDip, HoverScale, HoverScaleSoft,
  HoverTilt, HoverRotate, HoverGlow, HoverShadow,
  HoverPulse, HoverFloat,
  TapShrink, TapBounce, TapRotate
} from '@yourorg/motion/animations'

// Usage
<HoverLift>
  <button>Click Me</button>
</HoverLift>
```

### 4. Loop Animations (11)
Continuous animations for ambient motion.

```tsx
import {
  Float, FloatWide, FloatSlow,
  Breath, BreathSlow,
  Wiggle, ShakeLoop, BounceLoop,
  PulseGlow, OscillateX, OscillateY
} from '@yourorg/motion/animations'

// Usage
<Float>
  <div>Floating Element</div>
</Float>
```

### 5. List & Stagger Animations (11)
Sequential reveals for lists and grids.

```tsx
import {
  StaggerContainer, StaggerFast, StaggerSlow,
  FadeItem, SlideItemUp, SlideItemRight,
  ClipItemReveal, ScaleItem, SpringItem,
  CascadeFade, CascadeSlide
} from '@yourorg/motion/animations'

// Usage
<StaggerContainer>
  <SlideItemUp>Item 1</SlideItemUp>
  <SlideItemUp>Item 2</SlideItemUp>
  <SlideItemUp>Item 3</SlideItemUp>
</StaggerContainer>
```

### 6. Card Animations (10)
Specialized animations for card components.

```tsx
import {
  CardPop, CardFloat, CardHoverGlow, CardHoverLift,
  CardFlip, CardRevealUp, CardSwipeIn, CardSwipeOut,
  CardPress, CardPulse
} from '@yourorg/motion/animations'
```

### 7. Button Animations (8)
Micro-interactions for buttons.

```tsx
import {
  ButtonTap, ButtonHoverPop, ButtonHoverArrow,
  ButtonSlideBg, ButtonGlow, ButtonShake,
  ButtonRipple, ButtonExpand
} from '@yourorg/motion/animations'
```

### 8. Modal & Overlay Animations (8)
Transitions for modals, sheets, and overlays.

```tsx
import {
  ModalFadeIn, ModalScaleIn, ModalSlideUp, ModalPopIn,
  OverlayFade, OverlayBlurIn,
  SheetSlideUp, SheetSlideDown
} from '@yourorg/motion/animations'
```

### 9. Page Transitions (8)
Full-page and section transitions.

```tsx
import {
  PageFade, PageSlideLeft, PageSlideRight,
  PageScaleIn, PageReveal, PageBlurIn,
  PageSwap, PagePush
} from '@yourorg/motion/animations'
```

### 10. Hero & Banner Animations (7)
Dramatic animations for hero sections.

```tsx
import {
  HeroFade, HeroRise, HeroTextReveal,
  HeroImageFloat, HeroScaleIn,
  HeroStagger, HeroShine
} from '@yourorg/motion/animations'
```

### 11. Icon Animations (8)
Micro-interactions for icons.

```tsx
import {
  IconSpin, IconPop, IconShake, IconBlink,
  IconHoverColor, IconPulse, IconBounce,
  IconRotateHover
} from '@yourorg/motion/animations'
```

### 12. Form & Input Animations (6)
Interactions for form elements.

```tsx
import {
  InputFocusGlow, InputSlideIn, InputErrorShake,
  LabelFloat, CheckboxScale, ToggleSlide
} from '@yourorg/motion/animations'
```

### 13. Image Animations (6)
Effects for image reveals and interactions.

```tsx
import {
  ImageFadeIn, ImageZoomOnHover, ImageParallaxFloat,
  ImageTilt, ImageRevealMask, ImageLift
} from '@yourorg/motion/animations'
```

### 14. Loader Animations (5)
Loading indicators and spinners.

```tsx
import {
  LoaderPulse, LoaderSpin, LoaderBounce,
  LoaderStretch, LoaderWave
} from '@yourorg/motion/animations'
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
import { SlideUp } from '@yourorg/motion/animations'

<SlideUp
  whileInView="visible"
  options={{ duration: 0.8 }}
>
  Content
</SlideUp>
```

### Custom Timing with Options

```tsx
import { FadeIn } from '@yourorg/motion/animations'

<FadeIn options={{ duration: 1.5, delay: 0.2 }}>
  <div>Custom timed content</div>
</FadeIn>
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

Works seamlessly with Next.js App Router and Pages Router. All components are marked with `'use client'`.

```tsx
import { FadeIn } from '@yourorg/motion/animations'

function Page() {
  return <FadeIn><h1>Next.js Page</h1></FadeIn>
}
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
