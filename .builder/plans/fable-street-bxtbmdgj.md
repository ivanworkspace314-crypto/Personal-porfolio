# Implementation Plan: Projects Page

## Overview
Implement a responsive `/projects` page based on Figma designs showing a grid of project cards with:
- Desktop: 3-column grid layout (2 rows = 6 cards)
- Mobile: Single-column stacked layout
- Interactive, clickable cards that link to project URLs
- Support for project images, names, descriptions, and URLs

## Design Analysis

### Desktop Layout (figma-design-frame-1-Main-Content.html)
- **Page title**: "Projects" centered at top (using existing HeroHeading component)
- **Background**: Dark theme with gradient background image (similar to other pages)
- **Grid**: 3 columns × 2 rows with 24px column gap, 20px row gap
- **Card dimensions**: 300px width × 340px height
- **Card styling**:
  - Border: 3px solid #7BE3F7 (cyan/blue)
  - Border radius: 8px
  - Image area: 302px × 163px with gray (#918E8E) placeholder background
  - Text section: black background with white text
  - Internal gaps: 13px between elements

### Mobile Layout (figma-design-frame-2-Projects-mobile.html)
- **Layout**: Single column, vertically stacked
- **Card dimensions**: ~366px width (responsive) × ~410px height
- **Spacing**: 20px gap between cards
- **Card styling**: Same border color and radius, slightly larger fonts and padding
- **Container**: 20px side padding from viewport edges

### Card Structure
Each card contains (top to bottom):
1. **Project Image** - gray placeholder background, full-width at top
2. **URL Label** - "URL: " + actual project URL, small font (14px desktop, 17px mobile), font-weight 300
3. **Project Name** - Bold heading (24px desktop, 29px mobile), font-weight 600
4. **Project Description** - Multi-line text (16px desktop, 19px mobile), font-weight 300, line-height 120%

All text uses Inter font family, white color on black background.

## Implementation Approach

### Files to Create

#### 1. `app/projects/page.js`
**Purpose**: Main projects page route

**Structure**:
- Use existing `HeroContent` component wrapper (with `pt-[70px]` padding similar to other pages)
- Use existing `HeroHeading` component with title "Projects"
- Define placeholder `projectsData` array with 6 sample projects:
  - Each project: `{ id, name, description, url, imageUrl }`
  - Use placeholder images from builder.io or similar service
  - Use realistic placeholder URLs (e.g., "https://example-project-1.com")
  - Descriptions should be truncated versions of the design placeholder text
- Render responsive grid container:
  - Desktop: CSS Grid with 3 columns, auto rows
  - Mobile: Single column (flex or grid with 1 column)
  - Gaps: 24px column, 20px row on desktop; 20px gap on mobile
- Map over `projectsData` to render `ProjectCard` components

**Styling approach**:
- Use Tailwind utility classes following existing patterns in the codebase
- Responsive breakpoints: `[@media(min-width:769px)]` for desktop styles
- Container max-width and centering as needed
- Follow the spacing conventions from Resume/Skills pages

#### 2. `components/ui/ProjectCard.js`
**Purpose**: Reusable project card component

**Props**:
- `name` (string) - Project title
- `description` (string) - Project description text
- `url` (string) - Project URL for linking and display
- `imageUrl` (string) - Project image source

**Structure**:
- Wrapper: Either `<a>` tag (if entire card is clickable) or `<div>` with nested link
- Card container with border, border-radius, overflow hidden
- Image section at top (using `<img>` tag)
- Content section with black background:
  - URL display (small, light font)
  - Project name (large, bold)
  - Project description (medium, light font, multi-line with line-clamp if needed)

**Styling**:
- Border: `border-[3px] border-[#7BE3F7]`
- Border radius: `rounded-[8px]`
- Use flexbox column layout
- Image: `w-full` with fixed aspect ratio or height
- Background gray for image: `bg-[#918E8E]` as placeholder background
- Text section: `bg-black` with appropriate padding
- Typography:
  - URL: `text-[14px] font-light` (300 weight) on desktop, `text-[17px]` on mobile
  - Name: `text-[24px] font-semibold` (600 weight) on desktop, `text-[29px]` on mobile
  - Description: `text-[16px] font-light leading-[120%]` on desktop, `text-[19px]` on mobile
- All text: `text-white font-['Inter']`
- Internal spacing: gaps between URL, name, description (~13px desktop, ~15px mobile)
- Hover effect (optional enhancement): subtle shadow or border glow using `hover:shadow-[...]`

**Accessibility**:
- Proper alt text for images
- Semantic link elements
- ARIA labels if needed for screen readers

### Responsive Strategy

**Desktop (≥769px)**:
- Use CSS Grid with `grid-template-columns: repeat(3, 1fr)` or `repeat(3, 300px)`
- Column gap: 24px
- Row gap: 20px
- Cards: fixed width (300px) or flexible with max-width
- Container: centered with padding, similar to other pages using HeroContent
- Background image visible as per design

**Mobile (<769px)**:
- Single column layout: `flex flex-col` or `grid-cols-1`
- Gap: 20px between cards
- Cards: full-width with side padding (20px from viewport edges)
- Slightly larger fonts as per mobile design
- Same background treatment

**Breakpoint handling**:
- Use Tailwind's responsive prefixes: `md:`, `lg:`, or custom `[@media(min-width:769px)]` to match existing code
- Font sizes, padding, and gap sizes adjust at breakpoint
- Grid columns: 1 on mobile, 3 on desktop

### Design Consistency

**Following existing patterns**:
- Page structure matches `/resume` and `/skills` pages:
  - HeroContent wrapper with padding
  - HeroHeading for title
  - Data array defined in page file
  - Map over data to render cards
- Component structure matches `ResumeCard` and `SkillCard`:
  - Simple functional component
  - Tailwind utility classes for styling
  - Props for dynamic content
  - Inline styles only if absolutely necessary (avoid in this case)
- Color palette:
  - Background: `bg-black`
  - Text: `text-white`
  - Accent border: `#7BE3F7` (cyan, used in navigation and other UI elements)
  - Image placeholder: `bg-[#918E8E]` (gray)
- Typography:
  - Font family: Inter (already loaded globally)
  - Font weights: 300 (light), 600 (semibold)
  - Specific pixel sizes as per design

**Background treatment**:
- The `HeroBackground` component (already included via `PageShell`) provides the gradient background
- Background image from design is decorative and handled by existing layout
- No additional background work needed in projects page

### Sample Data Structure

```javascript
const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, checkout, and payment integration built with Next.js and Stripe.",
    url: "https://example-ecommerce.com",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder1?width=600"
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Modern portfolio website with animations, dark mode support, and responsive design using React and Tailwind CSS.",
    url: "https://portfolio-example.com",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder2?width=600"
  },
  // ... 4 more projects to total 6
];
```

### Interactivity Details

**Clickable cards**:
- Wrap entire card in `<a>` tag with `href={url}`
- Add `target="_blank"` and `rel="noopener noreferrer"` for external links
- Or use Next.js `<Link>` component if URLs are internal (unlikely for project showcases)
- Hover state: subtle visual feedback (e.g., border glow, slight scale transform, shadow)

**URL display**:
- Show full URL or truncated version if too long
- Format: "URL: https://example.com"
- Consider truncating long URLs with ellipsis using `truncate` class or `text-overflow: ellipsis`

## Implementation Steps

1. **Create ProjectCard component** (`components/ui/ProjectCard.js`)
   - Define component with props for name, description, url, imageUrl
   - Implement card structure with image, URL, name, description
   - Apply Tailwind styling for border, colors, typography
   - Make card clickable with proper link handling
   - Add responsive font sizes and spacing
   - Test with sample data

2. **Create projects page** (`app/projects/page.js`)
   - Set up page with HeroContent and HeroHeading
   - Define projectsData array with 6 placeholder projects
   - Create responsive grid container (3 cols desktop, 1 col mobile)
   - Map over projectsData to render ProjectCard components
   - Apply appropriate spacing and layout styles

3. **Verify responsive behavior**
   - Test on mobile viewport (320px - 768px)
   - Test on tablet viewport (769px - 1024px)
   - Test on desktop viewport (1025px+)
   - Ensure grid switches from 3 columns to 1 column at correct breakpoint
   - Verify font sizes, spacing, and card dimensions match design

4. **Polish and refine**
   - Ensure pixel-perfect match to Figma design
   - Add hover effects for better UX
   - Verify accessibility (alt text, proper link semantics)
   - Check that navigation links to /projects work correctly
   - Test with different description lengths and URL lengths

## Key Design Specifications

### Colors
- Card border: `#7BE3F7` (cyan blue)
- Background: `#000000` (black)
- Text: `#FFFFFF` (white)
- Image placeholder: `#918E8E` (gray)

### Typography (Desktop / Mobile)
- URL: Inter 14px / 17px, weight 300
- Project Name: Inter 24px / 29px, weight 600
- Description: Inter 16px / 19px, weight 300, line-height 120%

### Spacing (Desktop / Mobile)
- Grid column gap: 24px / N/A (single column)
- Grid row gap: 20px / 20px
- Card width: 300px / ~366px (full-width with padding)
- Card height: 340px / ~410px
- Image height: 163px / ~197px
- Internal card gaps: ~13px / ~15px

### Border & Radius
- Border width: 3px
- Border radius: 8px
- Border color: #7BE3F7

## Expected Outcome

A fully functional and responsive `/projects` page that:
- Matches the Figma design pixel-perfectly for both desktop and mobile
- Uses the existing HeroHeading component for the page title
- Displays 6 project cards in a responsive grid (3 columns on desktop, 1 column on mobile)
- Each card is clickable and navigates to the project URL
- Shows project image, URL, name, and description
- Follows the existing codebase patterns and design system
- Uses Tailwind CSS for styling, consistent with the rest of the application
- Works seamlessly with the existing layout (PageShell, NavigationShell, HeroBackground)

## Files Modified/Created

**New files**:
- `app/projects/page.js` - Projects page route
- `components/ui/ProjectCard.js` - Reusable project card component

**No modifications needed** to existing files (navigation already includes /projects links).
