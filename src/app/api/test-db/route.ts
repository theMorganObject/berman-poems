import { NextRequest } from 'next/server';
import { pingDatabase } from '../../../../lib/mongodb';

export async function GET(req: NextRequest) {
  try {
    await pingDatabase();
    return new Response(
      JSON.stringify({ message: 'Successfully connected to MongoDB' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to connect to MongoDB' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
