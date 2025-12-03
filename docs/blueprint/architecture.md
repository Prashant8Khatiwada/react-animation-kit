# Core System Architecture

## Build System

### Technology Stack
- **Bundler**: `tsup` (fast, zero-config TypeScript bundler)
- **Output**: ESM (tree-shakeable) + CJS (legacy compatibility)
- **TypeScript**: Bundled `.d.ts` files for full type safety

### tsup Configuration

```typescript
// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  external: ['react', 'react-dom', 'framer-motion'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    }
  },
})
```

### Package.json Configuration

```json
{
  "name": "@yourorg/motion",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./variants": {
      "types": "./dist/variants/index.d.ts",
      "import": "./dist/variants/index.js",
      "require": "./dist/variants/index.cjs"
    },
    "./components": {
      "types": "./dist/components/index.d.ts",
      "import": "./dist/components/index.js",
      "require": "./dist/components/index.cjs"
    }
  },
  "sideEffects": false,
  "peerDependencies": {
    "framer-motion": ">=10.0.0",
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  }
}
```

## Dependency Strategy

### Peer Dependencies
- **framer-motion**: Core animation engine (peer dependency, not bundled)
- **react**: Required for components
- **react-dom**: Required for DOM operations

### Dev Dependencies
- TypeScript, tsup, React types
- Testing: Vitest, @testing-library/react
- Linting: ESLint, Prettier

### Zero Runtime Dependencies
All code is self-contained; only peer dependencies required.

## Tree-Shaking Strategy

### Module Structure
```typescript
// ✅ Each variant is a separate export
export { fadeIn } from './entrance/fade-in'
export { slideUp } from './entrance/slide-up'

// ✅ Category barrel exports
export * from './entrance'
export * from './exit'

// ❌ Avoid default exports (harder to tree-shake)
// ❌ Avoid side effects in module scope
```

### Import Patterns
```typescript
// ✅ Tree-shakeable: only imports fadeIn
import { fadeIn } from '@yourorg/motion'

// ✅ Direct category import
import { fadeIn, slideUp } from '@yourorg/motion/variants/entrance'

// ❌ Avoid namespace imports (imports everything)
import * as motion from '@yourorg/motion'
```

## SSR Safety

### Server-Safe Code
```typescript
// ✅ No window/document access at module level
// ✅ Lazy access to browser APIs

export const useReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = React.useState(false)
  
  React.useEffect(() => {
    // Safe: only runs on client
    if (typeof window === 'undefined') return
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])
  
  return prefersReduced
}
```

### Next.js Compatibility
- All components marked with `"use client"` directive
- No server-side rendering issues
- Compatible with App Router and Pages Router

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.test.tsx"]
}
```

## Performance Principles

### GPU-Accelerated Properties
- **Always use**: `transform`, `opacity`, `scale`, `rotate`, `translateX/Y`
- **Avoid**: `width`, `height`, `top`, `left`, `margin`, `padding`

### Animation Guidelines
- Prefer `transform` over position changes
- Use `will-change` sparingly (automatic in Framer Motion)
- Avoid heavy filters unless opt-in
- Keep animations under 400ms for responsiveness

## Accessibility Foundation

### Reduced Motion Support
```typescript
// Built into every variant
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

// Consumed with accessibility helper
export const useMotionConfig = () => {
  const prefersReduced = useReducedMotion()
  return prefersReduced ? { duration: 0.01 } : {}
}
```

### Focus Management
- All interactive animations preserve focus order
- Keyboard navigation unaffected by animations
- Screen reader announcements not disrupted

## Testing Strategy

### Unit Tests
- Variant object structure validation
- TypeScript type tests
- SSR rendering tests

### Integration Tests
- Component rendering with variants
- Reduced motion behavior
- Intersection Observer integration

### Visual Regression
- Storybook for visual testing (optional)
- Playwright for E2E animation testing

## Version Management

### Semantic Versioning
- **Major**: Breaking API changes
- **Minor**: New animations, features (backwards compatible)
- **Patch**: Bug fixes, performance improvements

### Changelog
- Keep detailed CHANGELOG.md
- Document breaking changes clearly
- Provide migration guides for major versions

## Bundle Size Targets

- **Minimal import**: < 5KB gzipped (single variant)
- **Full library**: < 50KB gzipped (all variants)
- **With components**: < 70KB gzipped

### Size Monitoring
```json
{
  "scripts": {
    "build": "tsup",
    "size": "size-limit",
    "analyze": "npx vite-bundle-visualizer"
  },
  "size-limit": [
    {
      "path": "dist/index.js",
      "limit": "50 KB"
    }
  ]
}
```
