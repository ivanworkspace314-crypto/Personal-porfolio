# Resume Page Implementation Plan

## Overview
Implement a resume page that displays three resume/experience cards with a decorative background gradient, matching the Figma design provided.

## Design Analysis
The Figma design shows:
- **Page Title**: "Resume" (48px, white, Inter font, semibold)
- **Background**: Gradient wave effect (reuse `<HeroBackground/>`)
- **Three Resume Cards** (stacked vertically):
  1. **2019-2023** - College Education
  2. **2023-2024** - Dropshipping Business
  3. **2024-Current** - Full Stack Developer

Each card contains:
- Year/date range (18px, white, Inter, semibold)
- Title (24px, white, Inter, semibold)
- Description (16px, white, Inter, normal)
- Styling: 3px solid cyan border (#7BE3F7), 4px border radius, transparent/dark background

## Technical Approach

### 1. Components to Create
**New Component: `ResumeCard.js`**
- Location: `components/ui/ResumeCard.js`
- Props: `{ year, title, description }`
- Styling:
  - Border: `border-[3px] border-[#7BE3F7]` (matching Figma's cyan border)
  - Background: Transparent or subtle dark (`bg-transparent` or `bg-black/10`)
  - Border radius: `rounded-[4px]`
  - Padding: Internal spacing for year, title, description
  - **Hover Effects**: Subtle interactions
    - Border glow effect or color shift
    - Slight scale transform or shadow enhancement
    - Smooth transition animations
  - Responsive: Adjust width and padding for mobile/tablet/desktop

### 2. Page Structure (`app/resume/page.js`)
```
<main> (with sidebar offset layout matching home page)
  <HeroBackground /> (existing component for gradient)
  <div> (content container with proper z-index and positioning)
    <h1>Resume</h1> (48px title, can adapt HeroHeading or create simple h1)
    <div> (cards container with vertical stack and spacing)
      <ResumeCard year="2019-2023" title="College Education" ... />
      <ResumeCard year="2023-2024" title="Dropshipping Businesss" ... />
      <ResumeCard year="2024-Current" title="Full Stack Developer" ... />
    </div>
  </div>
</main>
```

### 3. Layout & Responsive Design
**Fully responsive implementation matching both Figma frames:**

- **Desktop** (>768px):
  - Left margin: `ml-[397px]` (account for fixed sidebar)
  - Content max-width: ~775px (matching Figma card width)
  - Cards: Full width with proper spacing between (~20px gap)
  - Background: Full gradient visible
  - Padding: 128px left, 33px horizontal
  - Title: 48px font size

- **Tablet** (max-width: 1024px):
  - Left margin: `ml-[280px]` (smaller sidebar)
  - Adjust card widths proportionally
  - Reduce padding slightly

- **Mobile** (max-width: 768px) - **Matches Mobile Figma Frame**:
  - No left margin: `ml-0`
  - Top padding: `pt-[57px]` (mobile nav header)
  - Cards: Full width with mobile padding (16-24px horizontal)
  - Title: Smaller font size (34-36px)
  - Card padding: Reduced for mobile screens
  - Background: Scaled appropriately for mobile viewport

### 4. Reusing Existing Components

**HeroBackground**: 
- Use as-is for the gradient wave background
- Already has proper responsive sizing

**HeroHeading**: 
- Option A: Use only the title portion (modify to accept single prop)
- Option B: Create a simple `<h1>` styled similarly for "Resume" title
- **Recommendation**: Create simple styled h1 to keep HeroHeading focused on its current use case

### 5. Styling Details
- **Typography**:
  - Font family: `font-['Inter']` (consistent with codebase)
  - Weights: semibold (600) for year/title, normal (400) for description
  - Sizes: Match Figma exactly (48px, 24px, 18px, 16px)

- **Colors**:
  - Text: white (`text-white`)
  - Border: `#7BE3F7` (from CSS variable `--accent-cyan-light`)
  - Background: Black (`bg-black` on main)

- **Spacing**:
  - Gap between cards: ~20-30px
  - Card internal padding: ~45px top, ~51px left, ~55px bottom (from Figma)
  - Responsive adjustments for mobile

- **Hover Effects** (subtle and professional):
  - Border: Enhance glow or shift to lighter cyan (`#61D3ED` to `#7BE3F7` or add shadow)
  - Transform: Slight scale (`scale-[1.02]`) or subtle lift with shadow
  - Background: Fade to subtle dark overlay (`bg-[#0C1B28]/20` or similar)
  - Transition: Smooth animation (`transition-all duration-300 ease-in-out`)
  - Cursor: `cursor-pointer` if cards are clickable (optional)

### 6. Content from Figma
```
Card 1:
- Year: "2019-2023"
- Title: "College Education"
- Description: "Completed Bachelor Degree in Computer Engineering from University in 2023"

Card 2:
- Year: "2023-2024"
- Title: "Dropshipping Business" (corrected from Figma typo)
- Description: "Owned Dropshipping Business on Shopify"

Card 3:
- Year: "2024-Current"
- Title: "Full Stack Developer"
- Description: "Engaged in full-stack courses for 6 months from online resources, currently working as a freelance Web Developer primarily with MERN Stack."
```

## Implementation Steps

1. **Create ResumeCard Component**
   - File: `components/ui/ResumeCard.js`
   - Implement with proper props and Tailwind styling
   - Include responsive classes matching project patterns
   - Use exact spacing and typography from Figma

2. **Implement Resume Page**
   - File: `app/resume/page.js`
   - Add main container with sidebar offset layout
   - Include HeroBackground for gradient
   - Add "Resume" title
   - Render three ResumeCard instances with content from Figma

3. **Ensure Responsive Behavior**
   - Test layout with sidebar offsets at all breakpoints
   - Verify background positioning
   - Check card stacking and spacing on mobile

4. **Match Design Pixel-Perfect**
   - Verify all font sizes, weights, and colors
   - Check border width (3px) and color (#7BE3F7)
   - Ensure spacing matches Figma measurements
   - Validate border-radius (4px)

## Key Decisions

- **Card Background**: Using transparent or subtle dark background (not solid) to match Figma's "rgba(63, 50, 50, 0.00)" transparent background
- **Title Component**: Create simple styled h1 instead of modifying HeroHeading
- **Card Layout**: Vertical stack with consistent gap (not grid) as shown in Figma
- **Typography Fix**: Correcting "Dropshipping Businesss" to "Dropshipping Business" (fixing Figma typo)
- **Hover Effects**: Add subtle interactive states including border glow, smooth transitions, and visual feedback
- **Responsive Design**: Fully responsive implementation adapting smoothly from mobile (320px+) to desktop (1440px+), matching both Figma frames

## Files to Modify/Create
- **Create**: `components/ui/ResumeCard.js` (new component)
- **Create/Edit**: `app/resume/page.js` (currently empty, will implement full page)
