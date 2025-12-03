# Animation Catalog

Complete catalog of 100+ animations organized by category. Each animation includes a brief description and key characteristics.

## 1. Entrance Animations (18)

Welcoming animations for content appearing on screen.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `fadeIn` | Simple opacity fade | Opacity 0→1, 500ms |
| `fadeInUp` | Fade with upward slide | Opacity + Y transform, soft overshoot |
| `fadeInDown` | Fade with downward slide | Opacity + Y transform from top |
| `fadeInLeft` | Fade with slide from left | Opacity + X transform |
| `fadeInRight` | Fade with slide from right | Opacity + X transform |
| `slideUp` | Slide up entrance | Y transform, smooth ease |
| `slideDown` | Slide down entrance | Y transform from top |
| `slideLeft` | Slide from right to left | X transform |
| `slideRight` | Slide from left to right | X transform |
| `zoomIn` | Scale up entrance | Scale 0.9→1, opacity |
| `zoomInUp` | Zoom with upward movement | Scale + Y transform |
| `zoomInDown` | Zoom with downward movement | Scale + Y transform from top |
| `bounceIn` | Bouncy scale entrance | Spring animation, playful |
| `flipIn` | 3D flip entrance | RotateY transform |
| `rotateIn` | Rotate entrance | Rotate transform + opacity |
| `rollIn` | Roll in from side | Rotate + X transform |
| `expandIn` | Expand from center | Scale both axes separately |
| `unfold` | Unfolding effect | ScaleY + transformOrigin |

## 2. Exit Animations (15)

Graceful animations for content leaving the screen.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `fadeOut` | Simple opacity fade out | Opacity 1→0, 300ms |
| `fadeOutUp` | Fade with upward exit | Opacity + Y transform up |
| `fadeOutDown` | Fade with downward exit | Opacity + Y transform down |
| `fadeOutLeft` | Fade with left exit | Opacity + X transform left |
| `fadeOutRight` | Fade with right exit | Opacity + X transform right |
| `slideOutUp` | Slide up exit | Y transform upward |
| `slideOutDown` | Slide down exit | Y transform downward |
| `slideOutLeft` | Slide left exit | X transform left |
| `slideOutRight` | Slide right exit | X transform right |
| `zoomOut` | Scale down exit | Scale 1→0.9, opacity |
| `bounceOut` | Bouncy exit | Spring with overshoot |
| `flipOut` | 3D flip exit | RotateY transform |
| `rotateOut` | Rotate exit | Rotate + opacity |
| `collapse` | Collapse to nothing | ScaleY + transformOrigin |
| `shrink` | Shrink to center | Scale to 0 |

## 3. Hover Animations (12)

Interactive hover effects for desktop users.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `lift` | Elevate with shadow | Y transform + box-shadow |
| `liftLarge` | Pronounced elevation | Larger Y + dramatic shadow |
| `scale` | Simple scale up | Scale 1→1.05 |
| `scaleDown` | Scale down on hover | Scale 1→0.95 |
| `glow` | Glowing effect | Box-shadow glow |
| `shine` | Shine sweep effect | Gradient overlay animation |
| `tilt` | 3D tilt effect | RotateX/Y subtle |
| `rotate` | Rotation on hover | Rotate transform |
| `wiggle` | Playful wiggle | Rotate oscillation |
| `borderGrow` | Border expansion | Border-width transition |
| `underline` | Underline sweep | Width animation on pseudo |
| `colorShift` | Color transition | Background/color change |

## 4. Tap/Press Animations (8)

Tactile feedback for touch interactions.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `press` | Button press down | Scale + Y transform |
| `pressScale` | Scale press | Scale 1→0.95 |
| `bounce` | Bounce feedback | Spring rebound |
| `ripple` | Ripple effect | Expanding circle overlay |
| `punch` | Punch forward | Scale up then down |
| `squish` | Squish effect | ScaleY compression |
| `shake` | Shake on tap | X oscillation |
| `flash` | Flash highlight | Opacity pulse |

## 5. Loop Animations (14)

Continuous animations for ambient motion.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `pulse` | Pulsing scale | Scale oscillation |
| `pulseGlow` | Pulsing glow | Box-shadow pulse |
| `float` | Floating motion | Y oscillation |
| `floatRotate` | Float with rotation | Y + rotate |
| `spin` | Continuous spin | Rotate 360° |
| `spinSlow` | Slow rotation | Rotate 360° slow |
| `swing` | Pendulum swing | Rotate oscillation |
| `bounce` | Bouncing motion | Y with bounce ease |
| `wave` | Wave motion | Y sine wave |
| `breathe` | Breathing scale | Gentle scale pulse |
| `shimmer` | Shimmer effect | Gradient animation |
| `flicker` | Flicker effect | Opacity variation |
| `glitch` | Glitch effect | Multi-transform chaos |
| `heartbeat` | Heartbeat pulse | Scale with rhythm |

## 6. List/Stagger Animations (10)

Stagger patterns for lists and grids.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `staggerFade` | Staggered fade in | Opacity stagger |
| `staggerSlideUp` | Staggered slide up | Y transform stagger |
| `staggerSlideLeft` | Staggered slide left | X transform stagger |
| `staggerZoom` | Staggered zoom in | Scale stagger |
| `staggerBounce` | Staggered bounce | Spring stagger |
| `staggerRotate` | Staggered rotation | Rotate stagger |
| `waveStagger` | Wave-like stagger | Increasing delays |
| `gridStagger` | Grid-based stagger | 2D stagger pattern |
| `spiralStagger` | Spiral stagger | Radial delay pattern |
| `randomStagger` | Random order stagger | Randomized delays |

## 7. Card Animations (12)

Animations specific to card components.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `cardFlip` | Flip to reveal back | RotateY 3D flip |
| `cardSlide` | Slide reveal | X/Y slide transition |
| `cardExpand` | Expand to full view | Scale + position |
| `cardLift` | Card elevation | Lift + shadow + scale |
| `cardTilt` | 3D tilt hover | Perspective tilt |
| `cardShine` | Shine overlay | Gradient sweep |
| `cardPeek` | Peek preview | Partial reveal |
| `cardStack` | Stack shuffle | Z-index + offset |
| `cardFan` | Fan out effect | Rotate + offset |
| `cardDismiss` | Swipe dismiss | X transform + opacity |
| `cardReveal` | Content reveal | ScaleY unveil |
| `cardGlow` | Glowing border | Border glow effect |

## 8. Button Animations (10)

Micro-interactions for buttons.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `buttonPress` | Press effect | Scale + shadow |
| `buttonLift` | Lift on hover | Y + shadow |
| `buttonShine` | Shine sweep | Gradient overlay |
| `buttonPulse` | Pulsing CTA | Scale pulse loop |
| `buttonRipple` | Ripple on click | Expanding circle |
| `buttonSlide` | Slide background | Background-position |
| `buttonExpand` | Expand width | Width animation |
| `buttonBounce` | Bouncy hover | Spring scale |
| `buttonGlow` | Loading glow | Box-shadow pulse |
| `buttonShake` | Error shake | X oscillation |

## 9. Modal/Overlay Animations (10)

Transitions for modals and overlays.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `modalFade` | Fade in modal | Opacity + backdrop |
| `modalSlideUp` | Slide from bottom | Y transform |
| `modalSlideDown` | Slide from top | Y transform from top |
| `modalZoom` | Zoom from center | Scale entrance |
| `modalFlip` | Flip entrance | RotateY 3D |
| `modalExpand` | Expand from point | Scale + origin |
| `modalPush` | Push content | Parent scale + translate |
| `modalReveal` | Reveal effect | Clip-path animation |
| `drawerSlideLeft` | Drawer from left | X transform |
| `drawerSlideRight` | Drawer from right | X transform |

## 10. Page/Section Transitions (8)

Full-page and section transitions.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `pageFade` | Crossfade pages | Opacity transition |
| `pageSlide` | Slide pages | X transform |
| `pageZoom` | Zoom transition | Scale transition |
| `pageReveal` | Reveal next page | Clip-path wipe |
| `sectionParallax` | Parallax scroll | Multi-layer movement |
| `sectionReveal` | Section reveal | Slide up in view |
| `sectionExpand` | Expand section | Height animation |
| `sectionFold` | Fold/unfold | 3D transform |

## 11. Hero/Banner Animations (8)

Dramatic animations for hero sections.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `heroSlideUp` | Majestic slide up | Large Y + slow duration |
| `heroZoom` | Zoom entrance | Scale + opacity, dramatic |
| `heroReveal` | Text reveal | Clip-path or mask |
| `heroGlitch` | Glitch entrance | Multi-layer distortion |
| `heroParallax` | Parallax layers | Multi-element movement |
| `heroTypewriter` | Typewriter effect | Letter-by-letter reveal |
| `heroSplit` | Split text entrance | Word/char stagger |
| `heroFloat` | Floating elements | Multi-element float |

## 12. Icon Animations (12)

Micro-animations for icons.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `iconBounce` | Bounce in | Spring entrance |
| `iconSpin` | Spin icon | Rotate 360° |
| `iconPulse` | Pulsing icon | Scale pulse |
| `iconShake` | Shake icon | X oscillation |
| `iconFlip` | Flip icon | RotateY flip |
| `iconGlow` | Glowing icon | Filter glow |
| `iconMorph` | Shape morph | Path animation |
| `iconDraw` | Line draw | Stroke-dashoffset |
| `iconFill` | Fill animation | Stroke + fill transition |
| `iconWiggle` | Wiggle motion | Rotate slight |
| `iconHeart` | Heartbeat | Scale rhythm |
| `iconBell` | Bell ring | Rotate swing |

## 13. Image Animations (10)

Animations for image reveals and effects.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `imageReveal` | Reveal from edge | Clip-path slide |
| `imageZoom` | Zoom in image | Scale on load |
| `imageFade` | Fade in image | Opacity transition |
| `imageBlur` | Blur to focus | Filter blur |
| `imageSlide` | Slide in image | X/Y transform |
| `imageParallax` | Parallax scroll | Transform on scroll |
| `imageFlip` | Flip image | RotateY 3D |
| `imageExpand` | Expand image | Scale from corner |
| `imageOverlay` | Overlay fade | Pseudo-element |
| `imagePulse` | Pulsing highlight | Opacity pulse |

## 14. Form/Input Animations (8)

Interactions for form elements.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `inputFocus` | Focus ring | Box-shadow transition |
| `inputShake` | Error shake | X oscillation |
| `inputSuccess` | Success checkmark | Scale + rotate icon |
| `inputError` | Error highlight | Border + shake |
| `labelFloat` | Floating label | Y transform to top |
| `checkboxCheck` | Checkbox check | Scale + opacity icon |
| `radioSelect` | Radio selection | Scale + opacity dot |
| `switchToggle` | Switch transition | X transform handle |

## 15. Loader Animations (8)

Loading indicators and spinners.

| Name | Description | Characteristics |
|------|-------------|-----------------|
| `spinnerRotate` | Rotating spinner | Rotate 360° |
| `spinnerPulse` | Pulsing dots | Scale sequence |
| `spinnerBounce` | Bouncing dots | Y bounce sequence |
| `spinnerWave` | Wave loader | Y wave pattern |
| `spinnerGrow` | Growing bars | ScaleY sequence |
| `spinnerFade` | Fading dots | Opacity sequence |
| `progressSlide` | Progress bar | Width animation |
| `skeletonShimmer` | Skeleton shimmer | Gradient animation |

---

## Total Count: 173 Animations

- **Entrance**: 18
- **Exit**: 15
- **Hover**: 12
- **Tap**: 8
- **Loop**: 14
- **List/Stagger**: 10
- **Cards**: 12
- **Buttons**: 10
- **Modals**: 10
- **Pages**: 8
- **Heroes**: 8
- **Icons**: 12
- **Images**: 10
- **Forms**: 8
- **Loaders**: 8

## Priority Tiers

### Tier 1: Core Essentials (v0.1.0) - 25 animations
Most commonly used, must-have animations:
- **Entrance**: fadeIn, fadeInUp, slideUp, zoomIn
- **Exit**: fadeOut, fadeOutUp, slideOutUp, zoomOut
- **Hover**: lift, scale, glow
- **Tap**: press, bounce
- **Loop**: pulse, float, spin
- **List**: staggerFade, staggerSlideUp
- **Cards**: cardLift, cardFlip
- **Buttons**: buttonPress, buttonLift
- **Modals**: modalFade, modalSlideUp
- **Icons**: iconBounce, iconSpin

### Tier 2: Common Use Cases (v0.2.0) - 40 animations
Frequently needed, high-value additions

### Tier 3: Specialized (v0.3.0+) - Remaining animations
Nice-to-have, specialized use cases
