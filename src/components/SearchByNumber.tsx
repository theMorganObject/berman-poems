'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const SearchByNumber: React.FC = () => {
  const [poemNumber, setPoemNumber] = useState<string>('');
  const [urlString, setUrlString] = useState<string>('0001');

  const specialBaseNumbers = [
    '6',
    '44',
    '90',
    '94',
    '115',
    '241',
    '718',
    '726',
    '735',
  ]; // Base numbers without suffixes, as the user would input them, without any padStart

  // hook to handle poem routes that have an '-a" after them
  useEffect(() => {
    let suffix = '';

    if (specialBaseNumbers.some((base) => poemNumber.startsWith(base))) {
      suffix = 'a';
    }
    const updatedUrlString = poemNumber.padStart(4, '0') + suffix;
    setUrlString(updatedUrlString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poemNumber]);

  const appendDigit = (digit: string) => {
    setPoemNumber((current) => `${current}${digit}`);
  };

  const clearLastDigit = () => {
    setPoemNumber((current) => current.slice(0, -1));
  };

  const isValidPoemNumber = () => {
    const number = parseInt(poemNumber, 10);
    return number >= 1 && number <= 754;
  };

  const keypadButtons: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Clear',
    '0',
    'Delete',
  ];

  return (
    <div className='flex justify-center items-center'>
      <div className='max-w-96 flex flex-col items-center justify-center pt-16'>
        <div className='bg-white text-black font-bold text-xl shadow-md rounded-lg min-w-52 p-4 mb-4'>
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
              className='px-2 py-1 font-bold bg-gray-0 border-2 border-gray-8 rounded-md shadow-md focus:outline-none focus:ring-4 hover:ring-4'
            >
              {button}
            </button>
          ))}
        </div>

        {/* Search Button */}
        {isValidPoemNumber() ? (
          <Link
            href={`/poems/poem-${urlString}`}
            className='px-8 py-2 bg-gray-0 text-gray-8 text-2xl tracking-wide font-bold rounded-md shadow-lg border-2 border-gray-9 focus:outline-none focus:ring-4 hover:ring-4 mt-4'
          >
            Search
          </Link>
        ) : (
          <button
            disabled
            className='px-8 py-2 bg-gray-6 text-gray-0 text-2xl tracking-wide font-bold rounded-md shadow-md border-2 border-gray-9 focus:outline-none focus:ring-4 cursor-not-allowed mt-4'
          >
            Search
          </button>
        )}

        {/* Poem Number Error Handling */}
        {poemNumber && !isValidPoemNumber() && (
          <div className='mt-4 text-red-500'>{`Please select a value between 1 and 754`}</div>
        )}
      </div>
    </div>
  );
};

export default SearchByNumber;