# Homepage hero overhaul

## Scope
- Enhance the existing hero background with restrained layered glows and the current technical grid.
- Refresh the availability badge and gradient-highlighted headline without changing CTA destinations.
- Replace the abstract right-side preview with a responsive performance/project card stack and two floating badges.
- Convert the existing service strip into a seamless, accessible marquee with edge fades.
- Preserve light/dark themes, reduced-motion behavior, navigation, routes, and all non-hero sections.

## Technical details
- Keep the work limited to `Hero.tsx` plus focused animation utilities in the global stylesheet.
- Use semantic project color tokens and existing responsive breakpoints.
- Duplicate the marquee items only for the visual loop and hide the duplicate set from assistive technology.
- Validate TypeScript, the current build status, and desktop/mobile rendering with no overflow.
