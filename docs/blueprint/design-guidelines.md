# Design Guidelines & Animation Identity

## Motion Philosophy

Create animations that feel:
- **Smooth & Natural**: Inspired by real-world physics
- **Purposeful**: Every animation serves the user experience
- **Delightful**: Subtle micro-interactions that surprise and engage
- **Accessible**: Never sacrificing usability for aesthetics

## Custom Easing Curves

### Primary Easing System

```typescript
// src/presets/easings.ts

export const easings = {
  // Smooth, professional default
  smooth: [0.25, 0.4, 0.25, 1],
  
  // Subtle overshoot for playful feel
  softOvershoot: [0.34, 1.3, 0.64, 1],
  
  // Elastic bounce for emphasis
  bounce: [0.68, -0.55, 0.265, 1.55],
  
  // Quick snap for interactions
  snap: [0.4, 0, 0.2, 1],
  
  // Gentle deceleration
  decelerate: [0, 0, 0.2, 1],
  
  // Quick acceleration
  accelerate: [0.4, 0, 1, 1],
  
  // Balanced curve
  standard: [0.4, 0, 0.2, 1],
} as const

export type EasingName = keyof typeof easings
```

### When to Use Each Easing

| Easing | Use Case | Examples |
|--------|----------|----------|
| `smooth` | Default for most animations | Fades, slides, general transitions |
| `softOvershoot` | Entry animations, exciting moments | Hero sections, modals opening |
| `bounce` | Playful interactions | Button clicks, icon animations |
| `snap` | Quick feedback | Hover effects, tab switching |
| `decelerate` | Exit animations | Modals closing, elements leaving |
| `accelerate` | Urgent actions | Error states, alerts |

## Spring Configurations

### Spring Presets

```typescript
// src/presets/spring-configs.ts

export const springs = {
  // Gentle, smooth spring
  gentle: {
    type: 'spring',
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  
  // Bouncy, playful spring
  bouncy: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
    mass: 0.5,
  },
  
  // Snappy, responsive spring
  snappy: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  },
  
  // Slow, dramatic spring
  slow: {
    type: 'spring',
    stiffness: 50,
    damping: 20,
    mass: 1.2,
  },
} as const
```

## Timing Standards

### Duration Guidelines

```typescript
// src/presets/transitions.ts

export const durations = {
  instant: 0.1,    // Immediate feedback
  fast: 0.2,       // Quick transitions
  normal: 0.3,     // Default duration
  moderate: 0.5,   // Noticeable animations
  slow: 0.8,       // Dramatic effects
  slower: 1.2,     // Hero sections, special moments
} as const
```

### Animation Duration Rules

- **Micro-interactions**: 100-200ms (hover, tap)
- **Small elements**: 200-300ms (buttons, cards)
- **Medium elements**: 300-500ms (modals, drawers)
- **Large sections**: 500-800ms (page transitions, heroes)
- **Special moments**: 800-1200ms (onboarding, celebrations)

### Delay & Stagger

```typescript
export const delays = {
  none: 0,
  tiny: 0.05,
  small: 0.1,
  medium: 0.15,
  large: 0.2,
  huge: 0.3,
} as const

// Stagger pattern
export const staggerDelays = {
  tight: 0.05,   // Rapid succession
  normal: 0.1,   // Default stagger
  relaxed: 0.15, // Slower reveal
  dramatic: 0.2, // Emphasized stagger
} as const
```

## Animation Signatures

### Entrance Signature

**Philosophy**: Welcoming, optimistic, confident

```typescript
// Characteristic: Slight upward movement + fade
export const entranceSignature = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.softOvershoot,
    },
  },
}
```

**Common patterns**:
- Fade in from below (y: 20-50px)
- Slight scale up (0.95 → 1)
- Soft overshoot easing
- Medium duration (400-600ms)

### Exit Signature

**Philosophy**: Graceful, non-disruptive, smooth

```typescript
// Characteristic: Quick fade with slight downward movement
export const exitSignature = {
  visible: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: easings.decelerate,
    },
  },
}
```

**Common patterns**:
- Faster than entrance (200-400ms)
- Deceleration easing
- Minimal movement
- Clear exit direction

### Hover Signature

**Philosophy**: Responsive, subtle, inviting

```typescript
// Characteristic: Lift + shadow + slight scale
export const hoverSignature = {
  initial: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -4,
    scale: 1.02,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    transition: {
      duration: 0.2,
      ease: easings.snap,
    },
  },
}
```

**Common patterns**:
- Vertical lift (4-8px)
- Minimal scale (1.02-1.05)
- Enhanced shadow
- Fast feedback (150-250ms)

### Tap/Press Signature

**Philosophy**: Tactile, immediate, satisfying

```typescript
// Characteristic: Slight press down + scale reduction
export const tapSignature = {
  tap: {
    scale: 0.95,
    y: 2,
    transition: {
      duration: 0.1,
      ease: easings.snap,
    },
  },
}
```

**Common patterns**:
- Scale down (0.95-0.97)
- Instant response (100ms)
- Snap easing
- Optional haptic-like bounce back

### Loop Signature

**Philosophy**: Subtle, non-distracting, purposeful

```typescript
// Characteristic: Gentle oscillation
export const loopSignature = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}
```

**Common patterns**:
- Slow, gentle motion
- Small amplitude
- Smooth oscillation
- Infinite but subtle

## Micro-Interaction Principles

### Button Interactions

```typescript
export const buttonInteraction: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: easings.snap },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
}
```

### Icon Animations

```typescript
// Subtle bounce on appearance
export const iconBounce: Variants = {
  hidden: { scale: 0, opacity: 0 },
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

### Input Focus

```typescript
export const inputFocus: Variants = {
  unfocused: {
    boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)',
  },
  focused: {
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.3)',
    transition: { duration: 0.2 },
  },
}
```

## Consistency Rules

### Rule 1: Directional Consistency
- **Enter from bottom**: Use `y: 20-50` (upward movement)
- **Exit to top**: Use `y: -10-20` (upward movement)
- **Modals**: Grow from center (`scale: 0.9 → 1`)
- **Drawers**: Slide from edge matching position

### Rule 2: Duration Hierarchy
```
Micro < Small < Medium < Large
100ms   200ms   300ms    500ms+
```

### Rule 3: Easing Matching
- **Entry**: Use `softOvershoot` or `smooth`
- **Exit**: Use `decelerate`
- **Hover**: Use `snap`
- **Tap**: Use `snap` or linear
- **Loop**: Use `easeInOut`

### Rule 4: Opacity Transitions
- Always pair opacity with movement
- Never animate opacity alone (feels flat)
- Target: `opacity: 0 → 1` or `opacity: 1 → 0`

### Rule 5: Scale Constraints
- **Entrance**: 0.95-0.98 → 1
- **Hover**: 1 → 1.02-1.05
- **Tap**: 1 → 0.95-0.97
- **Exit**: 1 → 0.95-0.98

## Accessibility Guidelines

### Reduced Motion Support

```typescript
// All animations must support reduced motion
export const createAccessibleVariant = (variant: Variants): Variants => ({
  ...variant,
  visible: {
    ...variant.visible,
    transition: {
      ...variant.visible.transition,
      // Override in reduced motion context
    },
  },
})

// Usage with hook
const prefersReducedMotion = useReducedMotion()
const transition = prefersReducedMotion
  ? { duration: 0.01 }
  : { duration: 0.5, ease: easings.smooth }
```

### Accessibility Checklist
- [ ] Animation respects `prefers-reduced-motion`
- [ ] Animation doesn't block interaction
- [ ] Animation doesn't cause layout shift
- [ ] Animation has clear purpose (not decorative)
- [ ] Animation duration < 5 seconds (WCAG guideline)
- [ ] No flashing/strobing effects

## Performance Guidelines

### GPU-Accelerated Only

```typescript
// ✅ GOOD: Transform, opacity
export const goodVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

// ❌ BAD: Width, position, margin
export const badVariant: Variants = {
  hidden: { width: 0, top: 100 },
  visible: { width: '100%', top: 0 },
}
```

### Animation Complexity Budget

- **Low**: Opacity + 1 transform (fade + slide)
- **Medium**: Opacity + 2 transforms (fade + slide + scale)
- **High**: Opacity + 3 transforms + filter (special effects)

Use "High" complexity sparingly (hero sections, special moments only).

## Visual Identity Checklist

Every animation should:
- [ ] Use custom easings (not CSS defaults)
- [ ] Include subtle scale OR movement (not just opacity)
- [ ] Match duration hierarchy
- [ ] Feel cohesive with library signature
- [ ] Support reduced motion
- [ ] Use GPU-accelerated properties only

## Naming Conventions

### Variant Names
- **Descriptive**: `fadeIn`, `slideUp`, `bounceIn`
- **Direction included**: `slideLeft`, `slideRight`, `slideOutDown`
- **Purpose clear**: `hoverLift`, `tapPress`, `loaderSpin`

### Avoid Generic Names
- ❌ `animation1`, `effect`, `cool`
- ✅ `fadeIn`, `glowHover`, `pulseLoop`

## Example Animation Audit

When creating new animations, ask:

1. **Does it serve the UX?** Not just decoration
2. **Is it consistent?** Matches library signature
3. **Is it accessible?** Respects reduced motion
4. **Is it performant?** GPU-accelerated only
5. **Is it unique?** Adds value to the library
