import Poem from '@/components/Poem';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* <Image src='' alt={} width={} height={} /> */}
      <Poem poemId={'poem-1'} />
    </main>
  );
}
