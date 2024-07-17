import Hero from '@/components/Hero';

export default function Home() {
  return (
    // TODO: remove flex box
    <main className='relative flex flex-col items-center h-screen p-2'>
      <Hero />
    </main>
  );
}
