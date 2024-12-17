import { MongoClient } from 'mongodb';
import { Poem } from '@/types/poem';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = 'poetry_db';
const COLLECTION_NAME = 'poems';

async function connectToDatabase() {
  const client = new MongoClient(MONGODB_URI || '');
  await client.connect();
  return client.db(DATABASE_NAME).collection(COLLECTION_NAME);
}

export async function getAllPoems(): Promise<Poem[]> {
  try {
    const collection = await connectToDatabase();

    const poems = await collection.find({}).sort({ date: 1 }).toArray();

    return poems.map((poem) => ({
      _id: poem._id.toString(), // Convert MongoDB ObjectId to string
      title: poem.title || 'Untitled',
      date: poem.date || '',
      excerpt: poem.excerpt || '',
      isFeatured: poem.isFeatured || false,
      poemNumber: poem.poemNumber || 0,
      location: poem.location || 'Unknown',
      content: poem.content || '',
    }));
  } catch (error) {
    console.error('Error fetching poems:', error);
    throw new Error('Failed to fetch poems');
  }
}

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const poemsDirectory = path.join(process.cwd(), 'poems');

// export function getPoemsFiles() {
//   return fs.readdirSync(poemsDirectory);
// }

// export function getPoemData(poemIdentifier) {
//   const poemSlug = poemIdentifier.replace(/\.md$/, ''); // Strip the .md extension
//   const filePath = path.join(poemsDirectory, `${poemSlug}.md`);
//   const fileContent = fs.readFileSync(filePath, 'utf-8');
//   const { data, content } = matter(fileContent); // Parse the Markdown file

//   const poemData = {
//     slug: poemSlug, // NOTE: just use "...data" here?
//     title: data.title,
//     date: data.date,
//     excerpt: data.excerpt,
//     isFeatured: data.isFeatured,
//     poemNumber: data.poemNumber,
//     content: content,
//   };

//   return poemData;
// }

// NOTE(1): this used to be -1 : 1, but that returned the data in reverse chronological order, which was harder to work with.

// export function getSortedPoemSlugs() {
//   const poemsFiles = getPoemsFiles();
//   const poemSlugs = poemsFiles.map((poemFile) => {
//     return poemFile.replace(/\.md$/, '');
//   });

//   const sortedPoemSlugs = poemSlugs.sort();

//   return sortedPoemSlugs;
// }
