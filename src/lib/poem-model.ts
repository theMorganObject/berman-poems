import type { Poem, PoemInput } from '../types/poem';

const CATEGORY_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function optionalText(value: unknown): string | undefined {
  return typeof value === 'string' ? value.trim() || undefined : undefined;
}

function locationText(value: unknown): string | undefined {
  const location = optionalText(value);
  return location?.toLowerCase() === 'unknown' ? undefined : location;
}

/** Read legacy records without rewriting the stored documents. */
export function normalizePoem(
  record: Record<string, unknown> & { _id: { toString(): string } }
): Poem {
  const location = locationText(record.location);
  const dedication = optionalText(record.dedication);
  return {
    _id: record._id.toString(),
    title: optionalText(record.title) || 'Untitled',
    date: typeof record.date === 'string' ? record.date : '',
    excerpt: typeof record.excerpt === 'string' ? record.excerpt : '',
    isFeatured: record.isFeatured === true || record.isFeatured === 'true',
    poemNumber: typeof record.poemNumber === 'number' ? record.poemNumber : 0,
    content: typeof record.content === 'string' ? record.content : '',
    ...(location ? { location } : {}),
    ...(dedication ? { dedication } : {}),
    categories: Array.isArray(record.categories)
      ? [...new Set(record.categories.filter(
          (slug): slug is string => typeof slug === 'string' && CATEGORY_SLUG.test(slug)
        ))]
      : [],
  };
}

export class PoemValidationError extends Error {}

/** Validate writes separately from the forgiving legacy reader. */
export function parsePoemInput(value: unknown, knownCategorySlugs: readonly string[]): PoemInput {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new PoemValidationError('Poem must be an object');
  }
  const input = value as Record<string, unknown>;
  for (const field of ['title', 'date', 'content'] as const) {
    if (!optionalText(input[field])) {
      throw new PoemValidationError(`${field} is required`);
    }
  }
  if (!Number.isFinite(Date.parse(input.date as string))) {
    throw new PoemValidationError('date must be a valid date');
  }
  if (!Number.isSafeInteger(input.poemNumber) || (input.poemNumber as number) < 1) {
    throw new PoemValidationError('poemNumber must be a positive integer');
  }
  for (const field of ['location', 'dedication', 'excerpt'] as const) {
    if (input[field] !== undefined && typeof input[field] !== 'string') {
      throw new PoemValidationError(`${field} must be text`);
    }
  }
  if (input.isFeatured !== undefined && typeof input.isFeatured !== 'boolean') {
    throw new PoemValidationError('isFeatured must be a boolean');
  }
  const categories = input.categories === undefined ? [] : input.categories;
  if (!Array.isArray(categories) || categories.some(
    (slug) => typeof slug !== 'string' || !CATEGORY_SLUG.test(slug)
  )) {
    throw new PoemValidationError('categories must be an array of lowercase category slugs');
  }
  if (categories.some((slug: string) => !knownCategorySlugs.includes(slug))) {
    throw new PoemValidationError('categories contains an unknown category');
  }
  const location = locationText(input.location);
  const dedication = optionalText(input.dedication);
  return {
    title: (input.title as string).trim(),
    date: (input.date as string).trim(),
    // Preserve meaningful Markdown whitespace and line breaks.
    content: input.content as string,
    excerpt: optionalText(input.excerpt) || '',
    poemNumber: input.poemNumber as number,
    isFeatured: input.isFeatured === true,
    ...(location ? { location } : {}),
    ...(dedication ? { dedication } : {}),
    categories: [...new Set(categories as string[])],
  };
}
