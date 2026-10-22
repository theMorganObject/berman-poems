export interface Poem {
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  isFeatured: boolean;
  poemNumber: number;
  /** Where the poem was written, rather than its subject. */
  location?: string;
  dedication?: string;
  /** Stable slugs referencing entries in the categories collection. */
  categories: string[];
  content: string;
}

export type PoemInput = Omit<Poem, '_id'>;

export const POEM_LOCATION_SUGGESTIONS = [
  'Grants Pass',
  'Corvallis',
  'Morgantown',
] as const;
