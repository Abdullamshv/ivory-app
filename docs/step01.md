# STEP 01: Styles and Mock Data

## Task
1. Update Tailwind v4 theme variables.
2. Create constants for mock data to be used across sections.

## Technical Details
- **File:** `src/app/globals.css`
- **File:** `src/data/index.ts` (or `src/constants/data.ts`)

## Implementation Instructions
1. In `globals.css`, update `@theme inline` with the new brand colors:
   - `--color-brand-primary: #2F8DD4;` (Logo Blue)
   - `--color-brand-accent: #1B3A6B;` (Navy Blue for headings/buttons)
   - `--color-brand-light: #F4F7FC;` (Light background)
   - Ensure existing `ivory-*` variables map to these brand colors for backward compatibility.

2. Create `src/data/index.ts` and export the following data structures:
   - `WHY_CHOOSE_ITEMS`: 3 items (Trusted Partnerships, End-to-End Support, Community-Driven).
   - `DESTINATIONS`: 2 main items (Qatar, Georgia) and full list of 6.
   - `SERVICES`: 3 items (Admissions, Visa, Scholarship).
   - `IMPACT_STATS`: 4 stats (Students, Partners, Acceptance, Visa).
   - `OFFICE_INFO`: Times, Phone, Email, Address.