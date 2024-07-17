import Link from 'next/link';
import { GiQuillInk } from 'react-icons/gi';

function Hero() {
  return (
    <div className='flex flex-col justify-around items-center h-full p-4'>
      <h1 className='text-6xl text-center font-tangerine pt-4 xs:text-7xl'>
        Collected Poems
      </h1>
      <p className='text-2xl font-tangerine mt-4 xs:text-3xl'>
        Stephen Harlow Berman
      </p>
      <div className='text-6xl text-gray-9/80 mt-6 xs:text-7xl'>
        <GiQuillInk />
      </div>
      <p className='max-w-72 text-center mt-6 italic xs:text-lg'>
        A living and ongoing collection
        <br />
        Over 7 poems, one per day
        <br />
        since August 21st, 2020.
      </p>
      <div className='flex flex-col gap-4 mt-8 px-9 w-full max-w-md'>
        <Link
          href='/poems/poem-0001'
          className='bg-transparent text-center border-2 border-gray-8 text-black hover:bg-gray-8 hover:text-gray-0 active:bg-gray-9 active:text-gray-1 px-4 py-2 transition duration-200 ease-in xs:text-lg'
        >
          Read Today&apos;s Poem
        </Link>
        <Link
          href='/poems'
          className='bg-transparent text-center border-2 border-gray-8 text-black hover:bg-gray-8 hover:text-gray-0 active:bg-gray-8 active:text-gray-1 px-4 py-2 transition duration-200 ease-in xs:text-lg'
        >
          Browse All Poems
        </Link>
      </div>
    </div>
  );
}

export default Hero;
