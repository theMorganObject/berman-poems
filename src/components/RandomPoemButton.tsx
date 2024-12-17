'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function RandomPoemButton() {
  const [randomPoemId, setRandomPoemId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRandomPoem() {
      try {
        const res = await fetch('/api/random-poem');
        const data = await res.json();

        if (res.ok) {
          setRandomPoemId(data.id);
        } else {
          console.error('Error fetching random poem:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch random poem ID:', error);
      }
    }

    fetchRandomPoem();
  }, []);

  const buttonClasses =
    'bg-transparent text-center border-2 border-gray-8 text-black hover:bg-gray-8 hover:text-gray-0 active:bg-gray-8 active:text-gray-1 px-4 py-2 transition duration-200 ease-in xs:text-lg block w-full h-full';
  return (
    <div className='w-full h-12'>
      {randomPoemId ? (
        <Link href={`/poems/${randomPoemId}`} className={buttonClasses}>
          Immerse in Poetry
        </Link>
      ) : (
        <span className={buttonClasses}>Loading...</span>
      )}
    </div>
  );
}

export default RandomPoemButton;
