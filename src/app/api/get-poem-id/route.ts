import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = 'poetry_db';
const COLLECTION_NAME = 'poems';

export async function GET(req: NextRequest) {
  const poemNumber = req.nextUrl.searchParams.get('number');

  if (!poemNumber) {
    return NextResponse.json(
      { error: 'Poem number is required' },
      { status: 400 }
    );
  }

  try {
    const client = new MongoClient(MONGODB_URI || '');
    await client.connect();
    const collection = client.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const poem = await collection.findOne({
      poemNumber: parseInt(poemNumber, 10),
    });

    await client.close();

    if (poem) {
      return NextResponse.json({ id: poem._id.toString() });
    } else {
      return NextResponse.json({ error: 'Poem not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching poem ID:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
