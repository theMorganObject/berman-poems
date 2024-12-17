'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getPoemUrlString,
  isValidPoemNumber,
  keypadButtons,
} from '@/lib/search-util';

const SearchByNumber: React.FC = () => {
  const [poemNumber, setPoemNumber] = useState<string>('');
  const [urlString, setUrlString] = useState<string>('');

  const sharedButtonClasses =
    'px-12 py-2 text-2xl tracking-wide font-bold rounded-md border-2 border-gray-9 focus:outline-none focus:ring-4 sm:py-3 sm:text-3xl';

  useEffect(() => {
    const updatedUrlString = getPoemUrlString(poemNumber);
    setUrlString(updatedUrlString);
  }, [poemNumber]);

  const appendDigit = (digit: string) => {
    setPoemNumber((current) => `${current}${digit}`);
  };

  const clearLastDigit = () => {
    setPoemNumber((current) => current.slice(0, -1));
  };

  return (
    <div className='flex flex-col min-h-screen justify-center gap-12 p-4 sm:w-96'>
      {/* Current Search Display */}
      <div className='bg-white text-black font-bold text-2xl shadow-md rounded-lg w-full p-4 text-center sm:text-3xl sm:py-6'>
        {poemNumber || 'Enter Poem Number'}
      </div>

      {/* Keypad UI */}
      <div className='grid grid-cols-3 gap-4'>
        {keypadButtons.map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === 'Delete') clearLastDigit();
              else if (button === 'Clear') setPoemNumber('');
              else appendDigit(button);
            }}
            className='px-4 py-2 font-bold text-xl bg-gray-0 border-2 border-gray-8 rounded-md shadow-md focus:outline-none focus:ring-4 hover:ring-4 sm:text-2xl'
          >
            {button}
          </button>
        ))}
      </div>

      {/* Search Button */}
      <div className='w-full flex justify-center'>
        {isValidPoemNumber(poemNumber) ? (
          <Link
            href={`/poems/poem-${urlString}`}
            className={`${sharedButtonClasses} bg-gray-0 text-gray-8 shadow-lg  hover:ring-4`}
          >
            Search
          </Link>
        ) : (
          <button
            disabled
            className={`${sharedButtonClasses} bg-gray-6 text-gray-0 shadow-md cursor-not-allowed`}
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchByNumber;
