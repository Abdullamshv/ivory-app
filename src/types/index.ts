export interface KeyFacts {
  language: string;
  currency: string;
  tuitionRange: string;
  livingCost: string;
  intakes: string[];
  popularCities: string[];
}

export interface Destination {
  id: string;
  name: string;
  /** Short blurb used on cards */
  description: string;
  /** Hero / card image (Unsplash) */
  image: string;
  /** Short hero subtitle on the detail page */
  tagline?: string;
  /** Multi-paragraph overview for the detail page */
  overviewParagraphs?: string[];
  /** "Why study here" bullet points */
  highlights?: string[];
  /** Key facts grid */
  keyFacts?: KeyFacts;
  /** Notable universities */
  topUniversities?: string[];
  /** Popular fields of study (rendered as chips) */
  popularPrograms?: string[];
  /** Optional extra gallery image URLs */
  gallery?: string[];
}
