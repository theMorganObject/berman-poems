import AllPoems from '@/components/poems/AllPoems';
import Navigation from '@/components/UI/Navigation';
import { getAllPoems } from '../../../lib/poems-util';

async function getPoems() {
  const res = await getAllPoems();
  const allPoems = await res;

  return allPoems;
}

export default async function Home() {
  const allPoems = await getPoems();

  return (
    <main className='relative flex min-h-screen flex-col items-center p-2'>
      <Navigation />
      <AllPoems poems={allPoems} />
    </main>
  );
}
