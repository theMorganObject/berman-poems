import Background from '@/components/UI/Background';
import AllPoems from '@/components/poems/AllPoems';
import { getAllPoems } from '../../../lib/poems-util';

async function getPoems() {
  const res = await getAllPoems();
  const allPoems = await res;

  return allPoems;
}

export default async function Home() {
  const allPoems = await getPoems();

  return (
    <main className='relative flex min-h-screen flex-col items-center p-2 pb-16'>
      <h1 className='text-4xl text-center font-tangerine mt-2 mb-4 xs:text-5xl sm:text-6xl'>
        The all-poems page
      </h1>
      <AllPoems poems={allPoems} />
      <Background />
    </main>
  );
}
