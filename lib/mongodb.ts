import { MongoClient, ServerApiVersion } from 'mongodb';

const uri: string = process.env.MONGODB_URI || '';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToDatabase() {
  try {
    await client.connect();
    return client.db();
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}

export async function pingDatabase() {
  try {
    const db = await connectToDatabase();
    const result = await db.command({ ping: 1 });
    console.log('Pinged MongoDB:', result);
  } catch (error) {
    console.error('Failed to ping MongoDB:', error);
  }
}
