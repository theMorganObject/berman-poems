import AllPoems from '@/components/poems/AllPoems';
import { getAllPoems } from '../../../lib/poems-util';
import Modal from '@/components/UI/Modal/Modal';

async function getPoems() {
  const res = await getAllPoems();
  const allPoems = await res;

  return allPoems;
}

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const allPoems = await getPoems();
  const show = searchParams?.show;

  return (
    <main className='relative flex flex-col items-center'>
      <AllPoems poems={allPoems} />
      {show && <Modal />}
    </main>
  );
}
