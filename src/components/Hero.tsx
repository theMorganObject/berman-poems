import Link from 'next/link';
import { GiQuillInk } from 'react-icons/gi';
import RandomPoemButton from './RandomPoemButton';

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
        Over 700 poems, one per day
        <br />
        since August 21st, 2020.
      </p>
      <div className='mb-8 px-9 w-full max-w-md'>
        <RandomPoemButton />
      </div>
    </div>
  );
}

export default Hero;
