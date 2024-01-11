import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const poemsDirectory = path.join(process.cwd(), 'poems');

export function getPoemData(poemIdentifier) {
  const poemSlug = poemIdentifier.replace(/\.md$/, ''); // Strip the .md extension
  const filePath = path.join(poemsDirectory, `${poemSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent); // Parse the Markdown file

  const poemData = {
    slug: poemSlug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    content: content,
  };

  return poemData;
}

// currently unused

/*
export function getPoemsFiles() {
  return fs.readdirSync(poemsDirectory);
}
*/
