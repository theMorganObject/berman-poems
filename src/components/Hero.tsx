import Link from 'next/link';
import { GiQuillInk } from 'react-icons/gi';

function Hero() {
  return (
    <>
      <h1 className='text-6xl text-center font-tangerine pt-12 mb-2 xs:text-7xl'>
        Daily Poems
      </h1>
      <p className='text-2xl font-tangerine mb-12 xs:text-3xl'>
        Stephen Harlow Berman
      </p>
      <div className='text-6xl text-gray-9/80 ml-2 mb-16 xs:text-7xl'>
        <GiQuillInk />
      </div>
      <p className='max-w-72 text-center mb-24 italic xs:text-lg'>
        A living and ongoing collection
        <br />
        Over 700 poems, one per day
        <br />
        since August 21st, 2020.
      </p>
      <div className='flex flex-col gap-6'>
        <Link
          href='/poems/poem-0001'
          className='bg-gray-8 text-center border-2 border-gray-8 text-gray-1 hover:bg-gray-7 hover:text-gray-9 hover:bg-transparent active:bg-gray-9 active:text-gray-0 px-4 py-1 transition duration-200 ease-in xs:text-lg'
        >
          <button>Read Today&apos;s Poem</button>
        </Link>
        <Link
          href='/poems'
          className='bg-transparent text-center border-2 border-gray-8 text-black hover:bg-gray-8 hover:text-gray-0 active:bg-gray-8 active:text-gray-1 px-2 py-1 transition duration-200 ease-in'
        >
          <button>Browse All Poems</button>
        </Link>
      </div>
    </>
  );
}

export default Hero;
