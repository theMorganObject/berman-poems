'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Helper function to generate a random poem number
function getRandomPoemNumber() {
  const maxPoems = 754;
  const randomNumber = Math.floor(Math.random() * maxPoems) + 1;
  return String(randomNumber).padStart(4, '0');
}

// Array of possible button texts
const buttonTexts = [
  "Dive into Today's Poem",
  'Discover a Random Poem',
  "Explore Today's Featured Poem",
  'Begin Your Journey',
  'Read a Poem Now',
  'Experience a Poem',
  'Uncover a Poem',
  'Immerse in Poetry',
  'Find Inspiration',
];

function getRandomButtonText() {
  const randomIndex = Math.floor(Math.random() * buttonTexts.length);
  return buttonTexts[randomIndex];
}

function RandomPoemButton() {
  const [randomPoemNumber, setRandomPoemNumber] = useState('');
  const [randomButtonText, setRandomButtonText] = useState('');

  useEffect(() => {
    setRandomPoemNumber(getRandomPoemNumber());
    setRandomButtonText(getRandomButtonText());
  }, []);

  return (
    <div className='w-full h-12'>
      {randomPoemNumber ? (
        <Link
          href={`/poems/poem-${randomPoemNumber}`}
          className='bg-transparent text-center border-2 border-gray-8 text-black hover:bg-gray-8 hover:text-gray-0 active:bg-gray-8 active:text-gray-1 px-4 py-2 transition duration-200 ease-in xs:text-lg block w-full h-full'
        >
          {randomButtonText}
        </Link>
      ) : (
        <div className='bg-transparent text-center border-2 border-gray-8 text-black hover:bg-gray-8 hover:text-gray-0 active:bg-gray-8 active:text-gray-1 px-4 py-2 transition duration-200 ease-in xs:text-lg block w-full h-full'>
          Loading...
        </div>
      )}
    </div>
  );
}

export default RandomPoemButton;
