export interface Category {
  /** Stable lowercase identifier, e.g. "family" or "natural-world". */
  slug: string;
  name: string;
  description?: string;
}
