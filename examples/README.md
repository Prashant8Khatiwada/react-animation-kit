# Examples

This directory contains usage examples for @yourorg/motion.

## Basic Example

See `basic-example.tsx` for a complete demonstration of:
- Entrance animations (fadeIn, fadeInUp, slideUp, zoomIn)
- Scroll-triggered animations using `useInView`
- Reduced motion support with `useReducedMotion`
- Interactive hover and tap animations

## Running Examples

To see the examples in action:

1. Create a Next.js or Vite React project
2. Install the library (or link it locally during development)
3. Import and use the example component

### With Next.js

```tsx
// app/page.tsx
import Example from '@yourorg/motion/examples/basic-example'

export default function Page() {
  return <Example />
}
```

### With Vite

```tsx
// src/App.tsx
import Example from '@yourorg/motion/examples/basic-example'

function App() {
  return <Example />
}

export default App
```

## More Examples Coming Soon

- Card grid with stagger animations
- Modal transitions
- Page transitions
- Form interactions
- Loading states
