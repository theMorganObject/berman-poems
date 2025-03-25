import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params; // Get the `id` from the URL
    const db = await connectToDatabase();
    const collection = db.collection('poems');

    // Fetch the poem by its ObjectId
    const poem = await collection.findOne({ _id: new ObjectId(id) });

    if (!poem) {
      return new Response(JSON.stringify({ message: 'Poem not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(poem), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching poem:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch poem' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
