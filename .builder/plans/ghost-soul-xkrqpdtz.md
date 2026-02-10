# Skills Page Implementation Plan

## Overview
Implement the skills page design from Figma for `/app/skills/page.js` with both desktop and mobile responsive versions, reusing existing components.

## Design Analysis

### Desktop Design (from Figma)
- Black background (#000)
- "Skills" heading at top (48px Inter font, white)
- Background image with gradient effect (reuse HeroBackground)
- **Skills Section** with 4 skill cards:
  - HTML + CSS + JavaScript (85%)
  - MERN: MongoDB + Express.js + React.js + Node.js (95%)
  - Next.js (95%)
  - Tailwind CSS (75%)
- **Languages Section** with 2 language cards:
  - English (85%)
  - Chinese (95%)

### Card Design Pattern
Each skill/language card contains:
- Icon/logo on the left
- Skill name (28px Inter, white, semi-bold)
- Percentage on the right (28px Inter, white, semi-bold)
- Progress bar with two-tone design:
  - Background track: dark blue (#385682)
  - Filled portion: cyan (#7BE3F7 for skills, #56C5BB for languages)
- Rounded border (10px radius)
- Border color: #7BE3F7 (cyan) for skills, #56C5BB (teal) for languages
- Border width: 3px
- Transparent background with box shadow
- Dimensions: 900px width x 169px height (desktop)

### Responsive Considerations
- Mobile: Stack cards vertically, reduce widths to fit screen
- Desktop: Same as Figma design
- Breakpoint: 769px (matches existing codebase pattern)

## Implementation Strategy

### 1. Create SkillCard Component
**Location:** `components/ui/SkillCard.js`

**Props:**
- `icon` - React node (can be SVG or img)
- `name` - string
- `percentage` - number (0-100)
- `borderColor` - string (default: '#7BE3F7')
- `progressColor` - string (default: '#7BE3F7')

**Features:**
- Reuse styling patterns from ResumeCard component
- Responsive width (full width on mobile, 900px on desktop)
- Fixed height: 169px
- Progress bar calculation based on percentage prop
- Progress bar uses SVG rounded path for filled portion (as in Figma)
- Background track for progress bar

**Key Classes:**
- Border: `border-[3px] rounded-[10px]`
- Spacing: `px-[38px] py-[32px]`
- Shadow: `shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`
- Background: `bg-transparent`

### 2. Update Skills Page
**Location:** `/app/skills/page.js`

**Structure:**
```
<main> (with sidebar margin)
  <HeroBackground />
  <HeroContent>
    <HeroHeading title="Skills" />
    
    <Skills Section>
      - Section heading "Skills" (if not using HeroHeading)
      - 4x SkillCard components with skill data
    </Skills Section>
    
    <Languages Section>
      - Section heading "Languages"
      - 2x SkillCard components with language data
    </Languages Section>
  </HeroContent>
</main>
```

**Data Structure:**
```javascript
const skillsData = [
  {
    name: 'HTML + CSS + JavaScript',
    percentage: 85,
    icon: <HTMLIcon />, // SVG from Figma
    borderColor: '#7BE3F7',
    progressColor: '#7BE3F7'
  },
  // ... more skills
];

const languagesData = [
  {
    name: 'English',
    percentage: 85,
    icon: <EnglishIcon />, // SVG from Figma
    borderColor: '#56C5BB',
    progressColor: '#56C5BB'
  },
  // ... more languages
];
```

### 3. Icon Handling

**Approach:** Extract SVGs from Figma design and embed inline
- HTML5 logo SVG (from Figma)
- MERN stack image (use img tag with Figma URL)
- Next.js logo SVG (from Figma)
- Tailwind CSS logo SVG (from Figma)
- English icon SVG (from Figma)
- Chinese icon SVG (from Figma)

**Alternative:** Create separate icon components in `components/icons/` if reusability is needed

### 4. Layout & Spacing

**Main container:**
- Desktop: `ml-[397px] w-[calc(100%-397px)]`
- Mobile: `ml-0 w-full` or adjust based on mobile nav
- Min height: `min-h-screen`
- Background: `bg-black`
- Position: `relative overflow-hidden`

**Content positioning:**
- Follow HeroContent pattern for top padding and horizontal padding
- Skills section: positioned after hero area
- Gap between cards: 21px (use `space-y-[21px]` or `gap-[21px]`)

**Section headings:**
- "Skills": Already handled by HeroHeading
- "Languages": 48px Inter font, white, semi-bold, positioned at `top-[1030px]` relative (desktop)

### 5. Responsive Breakpoints

**Desktop (≥769px):**
- Cards: 900px width
- Background image: full size
- Sidebar visible: ml-[397px]

**Mobile (<769px):**
- Cards: full width with horizontal padding
- Icons: same size (maintain readability)
- Font sizes: maintain 28px for readability
- Sidebar: collapsed (handled by NavigationShell)

## Files to Create/Modify

### Create:
1. `components/ui/SkillCard.js` - New skill card component

### Modify:
1. `/app/skills/page.js` - Replace placeholder with full implementation

## Technical Considerations

### Progress Bar Implementation
- Use flexbox for layout
- Progress bar container: 824px width (desktop)
- Height: 16px
- Background track: `bg-[#385682]` with rounded corners
- Filled portion: SVG path with rounded ends (as in Figma) OR div with calculated width
- Calculate filled width: `(percentage / 100) * totalWidth`

### Color Consistency
- Reuse existing color patterns from codebase
- Skills border/progress: #7BE3F7 (matches --accent-cyan-light)
- Languages border/progress: #56C5BB (new color from design)
- May need to add #56C5BB to globals.css as a CSS variable

### Accessibility
- Ensure progress bars have proper ARIA labels
- Add alt text for icon images
- Semantic HTML (use `<section>` for Skills and Languages sections)

## Implementation Steps

1. **Create SkillCard component** with all styling and progress bar logic
2. **Extract icons** from Figma design HTML (SVGs and image URLs)
3. **Build skills page** using HeroBackground, HeroHeading, and SkillCard components
4. **Add data arrays** for skills and languages
5. **Test responsive behavior** at different breakpoints
6. **Fine-tune spacing** to match Figma pixel-perfect

## Expected Outcome

A fully responsive skills page that:
- Matches the Figma design pixel-perfectly on desktop
- Adapts gracefully to mobile screens
- Reuses existing HeroBackground and HeroHeading components
- Introduces a reusable SkillCard component
- Maintains consistency with the existing design system
