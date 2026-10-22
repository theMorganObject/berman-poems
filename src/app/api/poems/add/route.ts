import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { parsePoemInput, PoemValidationError } from '@/lib/poem-model';
import type { Category } from '@/types/category';

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      throw new PoemValidationError('Request body must be valid JSON');
    }
    const db = await connectToDatabase();
    const categories = await db.collection<Category>('categories')
      .find({}, { projection: { slug: 1 } }).toArray();
    const poem = parsePoemInput(body, categories.map((category) => category.slug));
    const collection = db.collection('poems');

    const result = await collection.insertOne(poem);

    return new Response(
      JSON.stringify({
        message: 'Poem added successfully',
        id: result.insertedId,
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    if (error instanceof PoemValidationError) {
      return Response.json({ error: error.message }, { status: 400 });
    }
    console.error('Failed to insert poem:', error);
    return new Response(JSON.stringify({ error: 'Failed to add the poem' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
