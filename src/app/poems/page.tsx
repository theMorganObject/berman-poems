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
    <main className='relative flex flex-col items-center'>
      <AllPoems poems={allPoems} />
      <Navigation />
    </main>
  );
}
