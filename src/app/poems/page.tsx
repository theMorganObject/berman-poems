import AllPoems from '@/components/poems/AllPoems';
import { getAllPoems } from '@/lib/poems-util';

async function getPoems() {
  const res = await getAllPoems();
  const allPoems = await res;

  return allPoems;
}

export default async function Home() {
  const allPoems = await getPoems();

  return (
    <main className='flex flex-col items-center'>
      <AllPoems poems={allPoems} />
    </main>
  );
}
