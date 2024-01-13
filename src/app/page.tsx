import Background from '@/components/UI/Background';

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center p-2 pb-16'>
      <h1 className='text-4xl text-center font-tangerine mt-2 mb-4 xs:text-5xl sm:text-6xl'>
        A poem a day
      </h1>
      <Background />
    </main>
  );
}
