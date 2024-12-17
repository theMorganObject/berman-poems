import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || '';
const DATABASE_NAME = 'poetry_db';
const COLLECTION_NAME = 'poems';

async function connectToDatabase() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  return client.db(DATABASE_NAME).collection(COLLECTION_NAME);
}

export async function GET() {
  try {
    const collection = await connectToDatabase();

    // Get a random poem ID
    const [randomPoem] = await collection
      .aggregate([{ $sample: { size: 1 } }, { $project: { _id: 1 } }])
      .toArray();

    if (!randomPoem) {
      return NextResponse.json({ error: 'No poems found' }, { status: 404 });
    }

    return NextResponse.json({ id: randomPoem._id.toString() });
  } catch (error) {
    console.error('Error fetching random poem ID:', error);
    return NextResponse.json(
      { error: 'Failed to fetch random poem ID' },
      { status: 500 }
    );
  }
}
