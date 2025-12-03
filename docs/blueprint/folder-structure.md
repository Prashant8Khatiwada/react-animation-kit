# Folder Structure & Organization

## Complete Directory Structure

```
animation-library/
├── src/
│   ├── variants/                # Core animation variants
│   │   ├── entrance/
│   │   │   ├── fade-in.ts
│   │   │   ├── slide-up.ts
│   │   │   ├── slide-down.ts
│   │   │   ├── slide-left.ts
│   │   │   ├── slide-right.ts
│   │   │   ├── zoom-in.ts
│   │   │   ├── bounce-in.ts
│   │   │   └── index.ts       # Barrel export
│   │   ├── exit/
│   │   │   ├── fade-out.ts
│   │   │   ├── slide-out-up.ts
│   │   │   ├── zoom-out.ts
│   │   │   └── index.ts
│   │   ├── hover/
│   │   │   ├── lift.ts
│   │   │   ├── glow.ts
│   │   │   ├── scale.ts
│   │   │   └── index.ts
│   │   ├── tap/
│   │   │   ├── press.ts
│   │   │   ├── bounce.ts
│   │   │   └── index.ts
│   │   ├── loop/
│   │   │   ├── pulse.ts
│   │   │   ├── float.ts
│   │   │   ├── spin.ts
│   │   │   └── index.ts
│   │   ├── list/               # Stagger animations
│   │   │   ├── stagger-fade.ts
│   │   │   ├── stagger-slide.ts
│   │   │   └── index.ts
│   │   └── index.ts            # Main variants export
│   │
│   ├── components/             # High-level animated components
│   │   ├── primitives/
│   │   │   ├── AnimDiv.tsx
│   │   │   ├── AnimSection.tsx
│   │   │   ├── AnimButton.tsx
│   │   │   ├── AnimList.tsx
│   │   │   └── index.ts
│   │   ├── composed/           # Complex pre-built components
│   │   │   ├── AnimatedCard.tsx
│   │   │   ├── AnimatedModal.tsx
│   │   │   ├── AnimatedHero.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── hooks/                  # Utility hooks
│   │   ├── use-reduced-motion.ts
│   │   ├── use-in-view.ts
│   │   ├── use-scroll-progress.ts
│   │   ├── use-stagger-children.ts
│   │   └── index.ts
│   │
│   ├── presets/                # Preset configurations
│   │   ├── transitions.ts      # Reusable transition configs
│   │   ├── easings.ts          # Custom easing curves
│   │   ├── spring-configs.ts   # Spring presets
│   │   └── index.ts
│   │
│   ├── utils/                  # Utility functions
│   │   ├── variant-helpers.ts
│   │   ├── merge-variants.ts
│   │   ├── accessibility.ts
│   │   └── index.ts
│   │
│   ├── types/                  # TypeScript types
│   │   ├── variants.ts
│   │   ├── components.ts
│   │   ├── presets.ts
│   │   └── index.ts
│   │
│   └── index.ts                # Main library export
│
├── examples/                   # Usage examples
│   ├── next-app/               # Next.js App Router example
│   ├── next-pages/             # Next.js Pages Router example
│   ├── vite-react/             # Vite + React example
│   └── README.md
│
├── docs/                       # Documentation source
│   ├── getting-started.md
│   ├── api-reference.md
│   ├── animations/             # Per-animation docs
│   │   ├── entrance.md
│   │   ├── exit.md
│   │   └── ...
│   └── guides/
│       ├── custom-variants.md
│       ├── accessibility.md
│       └── performance.md
│
├── playground/                 # Interactive playground
│   ├── app/                   # Next.js app for playground
│   ├── components/
│   └── package.json
│
├── tests/
│   ├── unit/
│   │   ├── variants/
│   │   ├── components/
│   │   └── hooks/
│   ├── integration/
│   └── e2e/
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── release.yml
│   │   └── size-check.yml
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
└── .npmignore
```

## File Naming Conventions

### Variants
- **Format**: `kebab-case.ts`
- **Examples**: `fade-in.ts`, `slide-up.ts`, `bounce-in.ts`
- **Export**: Named export matching filename in camelCase
  ```typescript
  // fade-in.ts
  export const fadeIn: Variants = { ... }
  ```

### Components
- **Format**: `PascalCase.tsx`
- **Examples**: `AnimDiv.tsx`, `AnimatedCard.tsx`
- **Export**: Named export matching filename
  ```typescript
  // AnimDiv.tsx
  export const AnimDiv = ({ ... }) => { ... }
  ```

### Hooks
- **Format**: `use-kebab-case.ts`
- **Examples**: `use-in-view.ts`, `use-reduced-motion.ts`
- **Export**: Named export in camelCase
  ```typescript
  // use-in-view.ts
  export const useInView = () => { ... }
  ```

### Utilities
- **Format**: `kebab-case.ts`
- **Examples**: `merge-variants.ts`, `variant-helpers.ts`

### Barrel Exports
- **File**: `index.ts` in each directory
- **Purpose**: Re-export all items from directory
  ```typescript
  // variants/entrance/index.ts
  export { fadeIn } from './fade-in'
  export { slideUp } from './slide-up'
  export { slideDown } from './slide-down'
  // ...
  ```

## Module Organization Strategy

### Variant Categories

Each category gets its own directory under `src/variants/`:

```typescript
// src/variants/entrance/index.ts
export { fadeIn } from './fade-in'
export { fadeOut } from './fade-out'
export { slideUp } from './slide-up'
// ... all entrance animations

// src/variants/index.ts
export * from './entrance'
export * from './exit'
export * from './hover'
// ... all categories
```

### Component Layers

**Primitives**: Direct wrappers around motion components
```typescript
// primitives/AnimDiv.tsx
import { motion, type MotionProps } from 'framer-motion'

export const AnimDiv = motion.div
```

**Composed**: Pre-configured complex components
```typescript
// composed/AnimatedCard.tsx
import { AnimDiv } from '../primitives'
import { fadeIn } from '../../variants'

export const AnimatedCard = () => (
  <AnimDiv variants={fadeIn} initial="hidden" whileInView="visible">
    {/* card content */}
  </AnimDiv>
)
```

### Scalability Pattern

As animations grow to 100+, maintain organization:

```
variants/
├── entrance/           # 15-20 animations
├── exit/               # 15-20 animations
├── hover/              # 10-15 animations
├── tap/                # 5-10 animations
├── loop/               # 10-15 animations
├── list/               # 8-12 stagger patterns
├── cards/              # 10-15 card-specific
├── buttons/            # 8-12 button interactions
├── modals/             # 6-10 modal transitions
├── pages/              # 6-10 page transitions
├── heroes/             # 5-8 hero animations
├── icons/              # 10-15 icon interactions
├── images/             # 8-12 image reveals
├── forms/              # 8-12 form interactions
└── loaders/            # 8-12 loading animations
```

## Import/Export Strategy

### Main Entry Point
```typescript
// src/index.ts
export * from './variants'
export * from './components'
export * from './hooks'
export * from './presets'
export * from './utils'
export type * from './types'
```

### Category-Specific Exports
```typescript
// Allows sub-path imports
// import { fadeIn } from '@yourorg/motion/variants/entrance'
```

### Tree-Shaking Optimization
```typescript
// Each variant in separate file
// Enables dead code elimination
// Only imported variants are bundled
```

## File Templates

### Variant Template
```typescript
// src/variants/entrance/fade-in.ts
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

### Component Template
```typescript
// src/components/primitives/AnimDiv.tsx
'use client'

import { motion, type MotionProps, type Variants } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'

export interface AnimDivProps extends ComponentPropsWithoutRef<'div'> {
  preset?: string
  variants?: Variants
  motionProps?: MotionProps
}

export const AnimDiv = ({ preset, variants, motionProps, ...props }: AnimDivProps) => {
  // Implementation
}
```

### Hook Template
```typescript
// src/hooks/use-in-view.ts
'use client'

import { useEffect, useRef, useState } from 'react'

export interface UseInViewOptions {
  threshold?: number
  once?: boolean
}

export const useInView = (options: UseInViewOptions = {}) => {
  // Implementation
}
```

## Documentation Structure

Each animation should have:
1. **Code file**: The variant implementation
2. **Test file**: Unit tests (co-located or in tests/)
3. **Example**: Usage example in docs/animations/
4. **Playground entry**: Interactive preview

## Maintenance Guidelines

### Adding New Animation
1. Create variant file in appropriate category
2. Add to category barrel export
3. Update main index.ts if new category
4. Add tests
5. Add to documentation
6. Add to playground
7. Update CHANGELOG.md

### Deprecating Animation
1. Mark as `@deprecated` in JSDoc
2. Add warning in documentation
3. Keep for 1+ major version
4. Remove in next major version
