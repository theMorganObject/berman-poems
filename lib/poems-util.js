import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const poemsDirectory = path.join(process.cwd(), 'poems');

export function getPoemsFiles() {
  return fs.readdirSync(poemsDirectory);
}

export function getPoemData(poemIdentifier) {
  const poemSlug = poemIdentifier.replace(/\.md$/, ''); // Strip the .md extension
  const filePath = path.join(poemsDirectory, `${poemSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent); // Parse the Markdown file

  const poemData = {
    slug: poemSlug, // NOTE: just use "...data" here?
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    content: content,
  };

  return poemData;
}

export function getAllPoems() {
  const poemsFiles = getPoemsFiles();

  const allPoems = poemsFiles.map((poemFile) => {
    return getPoemData(poemFile);
  });

  const sortedPoems = allPoems.sort((poemA, poemB) =>
    poemA.date > poemB.date ? 1 : -1
  ); // NOTE(1): see below

  return sortedPoems;
  // return JSON.stringify(sortedPoems);
}

// NOTE(1): this used to be -1 : 1, but that returned the data in reverse chronological order, which was harder to work with.

export function getSortedPoemSlugs() {
  const poemsFiles = getPoemsFiles();
  const poemSlugs = poemsFiles.map((poemFile) => {
    return poemFile.replace(/\.md$/, '');
  });

  const sortedPoemSlugs = poemSlugs.sort();

  return sortedPoemSlugs;
}
