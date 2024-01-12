import Background from '@/components/UI/Background';
import Poem from '@/components/Poem';

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center p-2 pb-16'>
      <Background />
      <Poem poemId={'poem-1'} />
    </main>
  );
}
