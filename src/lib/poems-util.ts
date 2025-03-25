import { MongoClient, ObjectId } from 'mongodb';
import { Poem } from '@/types/poem';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = 'poetry_db';
const COLLECTION_NAME = 'poems';

async function connectToDatabase() {
  const client = new MongoClient(MONGODB_URI || '', {
    tls: true,
    serverSelectionTimeoutMS: 5000,
  });
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

export async function getAllPoemIds(): Promise<string[]> {
  try {
    const collection = await connectToDatabase();

    const poems = await collection
      .find({}, { projection: { _id: 1 } })
      .sort({ date: 1 })
      .toArray();

    return poems.map((poem) => poem._id.toString());
  } catch (error) {
    console.error('Error fetching poem IDs:', error);
    throw new Error('Failed to fetch poem IDs');
  }
}

export async function getPoemById(poemId: string): Promise<Poem | null> {
  try {
    const collection = await connectToDatabase();

    const poem = await collection.findOne({ _id: new ObjectId(poemId) });

    if (!poem) return null;

    return {
      _id: poem._id.toString(),
      title: poem.title || 'Untitled',
      date: poem.date || '',
      excerpt: poem.excerpt || '',
      isFeatured: poem.isFeatured || false,
      poemNumber: poem.poemNumber || 0,
      location: poem.location || 'Unknown',
      content: poem.content || '',
    };
  } catch (error) {
    console.error('Error fetching poem:', error);
    throw new Error('Failed to fetch poem');
  }
}
