# Getting Started with Development

This animation library is now initialized and ready for development! 🎉

## Quick Start

### 1. Dependencies
Already installed! If you need to reinstall:
```bash
npm install
```

### 2. Development
```bash
npm run dev    # Watch mode - rebuilds on file changes
```

### 3. Build
```bash
npm run build  # Production build
```

### 4. Type Check
```bash
npm run typecheck
```

## Current Status

✅ **Foundation Complete**
- Build system configured (tsup + TypeScript)
- 11 core animations implemented
- 2 essential hooks (useInView, useReducedMotion)
- Custom easing curves and presets
- Full TypeScript support
- SSR-safe implementation

## What's Implemented

**Entrance Animations (7)**:
- fadeIn, fadeInUp, slideUp, slideDown, slideLeft, slideRight, zoomIn

**Exit Animations (4)**:
- fadeOut, fadeOutUp, slideOutUp, zoomOut

**Hooks (2)**:
- useReducedMotion - Accessibility support
- useInView - Scroll-triggered animations

**Presets**:
- Custom easing curves (smooth, softOvershoot, bounce, snap, etc.)
- Spring configurations  (gentle, bouncy, snappy, slow)
- Timing presets (durations, delays, stagger delays)

## Next Development Steps

### Phase 1: Core Animations (Weeks 1-2)
1. **Add More Entrance Animations**
   - bounceIn, flipIn, rotateIn, rollIn, expandIn, unfold
   - Complete remaining entrance animations from catalog

2. **Add More Exit Animations**
   - Complete remaining exit animations from catalog
   - bounceOut, flipOut, rotateOut, collapse, shrink

3. **Add Hover Animations**
   - lift, liftLarge, scale, glow, shine, tilt, rotate
   - See `design-guidelines.md` for hover signature

4. **Add Loop Animations**
   - pulse, float, spin, swing, breathe, shimmer
   - Follow loop signature patterns

### Phase 2: Component API (Weeks 3-4)
1. **Create Primitive Components**
   - AnimDiv, AnimSection, AnimButton, etc.
   - High-level API with preset support
   - See `api-patterns.md` for implementation

2. **Build Preset System**
   - Preset registry connecting names to variants
   - Dynamic customization helpers

3. **Add Stagger Components**
   - AnimList for stagger animations
   - Automatic child variant distribution

### Phase 3: Documentation (Weeks 5-6)
1. **Build Documentation Website**
   - Next.js site with MDX
   - See `documentation-plan.md`

2. **Create Interactive Playground**
   - Live animation previews
   - Real-time customization

3. **Write Guides**
   - Installation, usage, patterns
   - Accessibility best practices

## File Structure

```
src/
├── variants/        # Animation variants by category
│   ├── entrance/   # 7 animations implemented
│   ├── exit/       # 4 animations implemented
│   └── index.ts
├── hooks/          # React hooks
│   ├── use-reduced-motion.ts  ✅
│   ├── use-in-view.ts         ✅
│   └── index.ts
├── presets/        # Reusable configurations
│   ├── easings.ts             ✅
│   ├── spring-configs.ts      ✅
│   ├── transitions.ts         ✅
│   └── index.ts
├── components/     # High-level components (TODO)
├── utils/          # Helper functions (TODO)
└── index.ts        # Main entry point
```

## Reference Documents

All architectural blueprints are in `.gemini/antigravity/brain/`:

1. **architecture.md** - Build system, TypeScript, SSR, performance
2. **folder-structure.md** - File organization and naming
3. **api-patterns.md** - Component APIs and usage patterns
4. **design-guidelines.md** - Animation identity and consistency rules
5. **animation-catalog.md** - Complete list of 173 planned animations
6. **documentation-plan.md** - Docs website and distribution strategy

## Adding a New Animation

1. Create variant file in appropriate category:
   ```typescript
   // src/variants/entrance/bounce-in.ts
   import type { Variants } from 'framer-motion'
   import { easings } from '../../presets/easings'

   export const bounceIn: Variants = {
     hidden: {
       scale: 0,
       opacity: 0,
     },
     visible: {
       scale: 1,
       opacity: 1,
       transition: {
         type: 'spring',
         stiffness: 400,
         damping: 10,
       },
     },
   }
   ```

2. Export from category index:
   ```typescript
   // src/variants/entrance/index.ts
   export { fadeIn } from './fade-in'
   export { bounceIn } from './bounce-in'  // Add this
   // ...
   ```

3. Build and test:
   ```bash
   npm run build
   ```

## Testing Your Animations

Use the example file to test:
```tsx
// examples/test-animation.tsx
import { motion } from 'framer-motion'
import { yourNewAnimation } from '../src'

export default function Test() {
  return (
    <motion.div
      variants={yourNewAnimation}
      initial="hidden"
      animate="visible"
    >
      Test Content
    </motion.div>
  )
}
```

## Bundle Size Monitoring

Check bundle size after adding animations:
```bash
npm run size
```

**Limits**:
- Single animation: < 5KB
- Full library: < 50KB

## Questions?

Refer to the blueprint documents in `.gemini/antigravity/brain/` for detailed guidance on:
- Animation design principles
- API patterns
- Performance optimization
- Accessibility requirements

---

**Happy coding! Let's build an amazing animation library!** 🚀✨
