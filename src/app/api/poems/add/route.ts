import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

interface Poem {
  title: string;
  date: string;
  excerpt: string;
  isFeatured: boolean;
  poemNumber: number;
  id: string;
  location: string;
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: Poem = await req.json();
    const db = await connectToDatabase();
    const collection = db.collection('poems');

    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({
        message: 'Poem added successfully',
        id: result.insertedId,
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Failed to insert poem:', error);
    return new Response(JSON.stringify({ error: 'Failed to add the poem' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
