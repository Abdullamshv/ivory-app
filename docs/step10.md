# STEP 10: Mobile Adaptation & Responsiveness

## Task
Ensure the entire application is fully responsive using a mobile-first approach, adhering to Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`).

## Technical Details
- **File:** `src/components/layout/Header.tsx` (Add Mobile Menu)
- **Files:** All section components in `src/components/sections/`

## Implementation Instructions

1. **Header (Mobile Menu):**
   - The current `Header.tsx` hides navigation on mobile (`hidden md:flex`).
   - Implement a mobile hamburger menu (`Menu` and `X` icons from `lucide-react`).
   - When clicked, open a dropdown or a side drawer showing the navigation links (Home, About Us, Apply Now, Study Destinations).
   - Ensure the dropdown menu closes when a link is clicked.

2. **Typography Scaling:**
   - Use responsive text sizes. Example for H1: `text-4xl md:text-5xl lg:text-6xl`.
   - Ensure paragraphs are readable on small screens: `text-base md:text-lg`.

3. **Layout & Grids (Mobile-First):**
   - **WhyChooseSection / ServicesSection:** Use `grid-cols-1` for mobile, `sm:grid-cols-2`, and `lg:grid-cols-3`.
   - **StudyDestinationsSection:** Use `grid-cols-1` for mobile, `md:grid-cols-2`.
   - **ImpactSection:** Ensure counters wrap nicely (`grid-cols-2` on mobile, `md:grid-cols-4`).
   - **ContactSection:** Stack the contact info and form vertically on mobile (`flex-col`), and side-by-side on desktop (`md:flex-row` or `grid md:grid-cols-2`).

4. **Padding & Margins:**
   - Use smaller paddings for mobile sections (e.g., `py-12 px-4`) and larger for desktop (`md:py-24 md:px-8`).
   - Ensure there is no horizontal scrolling (no `overflow-x-hidden` hacks needed if widths are managed correctly with `w-full` and `max-w-*`).

5. **Images:**
   - Ensure all `next/image` components scale down properly (`object-cover`, appropriate `fill` or width/height ratios).