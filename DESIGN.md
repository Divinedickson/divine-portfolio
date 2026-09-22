---
name: Precision Engineering Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes an intelligent, rigorous, and refined visual language tailored for high-caliber computer science, AI, and machine learning presentation. It bridges academic precision with production-grade engineering standards, conveying clarity, technical maturity, and intentional restraint.

The style operates at the intersection of Modern Corporate Tech and High-Functionality Minimalism. Rather than relying on gratuitous neon glows, decorative 3D elements, or clichés of terminal hacker aesthetics, the interface communicates credibility through precise hairline borders, calculated negative space, disciplined hierarchy, and surgical cobalt accents. Every layout choice serves to emphasize project impact, algorithmic depth, and system architecture.

## Colors

The color system is calibrated for bright, crisp white canvas surfaces with deep slate typography and deliberate electric blue accents.

- **Primary (`#2563EB` / `#1D4ED8`)**: Represents dynamic computation and active states. Used exclusively for primary call-to-actions, active links, focused input rings, and active timeline indicators.
- **Secondary (`#4F46E5` / `#6366F1`)**: Represents machine learning metadata, AI inference models, and technical categorization tags. Provides depth without competing with the primary blue.
- **Neutrals (`#0A0F1D`, `#0F172A`, `#334155`, `#64748B`)**: Deliver high-contrast, razor-sharp legibility across technical prose and structural diagrams.
- **Borders & Dividers (`#E2E8F0`, `#CBD5E1`)**: Low-opacity hairline borders provide structural containment without visual clutter.
- **Canvas (`#FFFFFF`, `#F8FAFC`)**: Crisp primary and secondary backdrops that maintain maximum clarity and brightness.

## Typography

Typography prioritizes functional hierarchy and reading efficiency across technical evaluations.

- **Headlines & Display**: Set in Inter with tight negative tracking (`-0.02em` to `-0.03em`) and heavy weights (600–800) to create assertive visual anchoring.
- **Body**: Regular weights with optimized leading (1.5x to 1.6x font size) guarantee effortless scanning of project narratives, research abstracts, and benchmarks.
- **Technical Badges & Code**: Scaled to compact sizes with uppercase transformations or structural weight shifts for parameters, metrics, model weights, and stack classifications.

## Layout & Spacing

The layout is built around a structured 12-column grid capped at a maximum width of 1280px to preserve comfortable line lengths and structured alignment.

- **Breakpoints**:
  - `Desktop (>= 1024px)`: 12-column grid, 48px canvas margin, 24px gutters.
  - `Tablet (768px - 1023px)`: 8-column grid, 32px canvas margin, 20px gutters.
  - `Mobile (< 768px)`: 4-column fluid layout, 20px canvas margin, 16px gutters.
- **Rhythm**: Internal spacing relies on an 8pt base grid. Component cards, metric modules, and code blocks apply generous inner breathing room (`space-lg` to `space-xl`) to establish an open, editorial tempo.

## Elevation & Depth

This system avoids dramatic dark shadows and faux skeuomorphic extrusions. Visual depth relies on hairline borders coupled with soft, ultra-diffused atmospheric shadows.

- **Tier 0 (Canvas Base)**: Pure `#FFFFFF` and `#F8FAFC`. Zero elevation.
- **Tier 1 (Surface Cards & Blocks)**: Surface color `#FFFFFF` bounded by a 1px solid border in `#E2E8F0`. Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Tier 2 (Interactive Hover & Elevated Modules)**: Lifted surface bounded by `#CBD5E1`. Shadow: `0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.
- **Tier 3 (Floating Drawers & AI Modals)**: Backdrop blur (`backdrop-blur-md` with `rgba(255, 255, 255, 0.8)` or dark overlay `rgba(15, 23, 42, 0.4)`), contained by 1px solid `#E2E8F0`, finished with an expansive low-density shadow: `0 25px 50px -12px rgba(15, 23, 42, 0.16)`.

## Shapes

The design system enforces structured, geometric discipline:

- Corner radius token `roundedness: 2` translates to base `8px` (`0.5rem`) for compact UI elements, `12px` (`0.75rem`) for standard cards, and `16px` (`1rem`) for larger hero cards, architecture diagrams, and application drawers.
- Pill-shaped "bubble" corners are prohibited across standard controls and cards to reinforce technical precision and avoid toy-like visual metaphors.
- Inner elements nested inside cards must maintain an offset radius (typically `outer radius - padding`) to preserve geometric concentricity.

## Components

### Buttons
- **Primary**: Solid `#2563EB` fill, white text, 8px radius, subtle transition to `#1D4ED8` on hover. Focus state utilizes a 2px offset ring in `#2563EB`. Never pill-shaped.
- **Secondary / Outline**: 1px border in `#CBD5E1`, neutral `#0F172A` text, transparent background. Transitions to `#F8FAFC` background with `#94A3B8` border on hover.
- **Ghost**: Transparent fill, slate text, subtle background tint `#F1F5F9` on hover. Used for navigation and icon buttons.

### Chips & Badges
- **Technical Spec Chips**: Minimal containers with 1px border in `#E2E8F0`, light background `#F8FAFC`, slate text `#334155`. Used for tools (e.g., `PyTorch`, `Next.js`, `CUDA`).
- **Accent Badges**: Soft `#EFF6FF` fill with crisp `#1D4ED8` text for primary tags; soft `#EEF2FF` fill with `#4338CA` text for AI/ML markers.

### Project & Case Study Cards
- Bounded by 1px `#E2E8F0`, white surface, 12px or 16px corner radius.
- Includes header section for domain categorization, body for architecture and problem space, and footer for metric impact tags (e.g., `99.2% Accuracy`, `14ms Latency`) and external code links.

### System Architecture Diagrams
- Clean vector layout canvases using `#F8FAFC` container surfaces.
- Directional connectors styled with 1px `#94A3B8` dashed or solid lines.
- Node boxes enclosed in 1px `#E2E8F0` with subtle elevation and uppercase metadata labels.

### Timeline Items
- Chronological engineering trajectory utilizing a solid vertical 2px spine in `#E2E8F0`.
- Milestone nodes denoted by `#2563EB` precision circular indicators, with role title, organization, and technical contributions anchored to the right.

### AI Copilot Drawer / Modal
- Elevated Tier 3 component sliding from the right or anchored centrally.
- Acrylic-frosted translucent navigation bar, 1px `#E2E8F0` border, and an integrated prompt input with an active `#2563EB` focus boundary.