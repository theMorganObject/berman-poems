'use client';

// NOTE: Working commit: the rendering logic is good here, but the state logic is left over from a previous paradigm, and needs to be heavily refactored or flat out removed. _tMO

import { useState } from 'react';
import {
  IoArrowBackCircleSharp,
  IoCalendarNumberSharp,
  IoArrowForwardCircleSharp,
} from 'react-icons/io5';

function PoemControls() {
  const [poemIndex, setPoemIndex] = useState(1);
  const totalPoems = 3;

  const handleNavigation = (direction: string) => {
    setPoemIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex === totalPoems ? 1 : prevIndex + 1;
      } else {
        return prevIndex === 1 ? totalPoems : prevIndex - 1;
      }
    });
  };
  return (
    <nav className='fixed bottom-0 left-1/2 transform -translate-x-1/2 pb-4 w-64 xs:w-80 xs:px-2 sm:w-96 sm:px-4'>
      <ul className='flex justify-between items-center text-4xl text-gray-8/80'>
        {/* TODO make each of these a clickable link to handle navigation */}
        <li className='hover:text-gray-6/90 transition-colors duration-150'>
          <IoArrowBackCircleSharp />
        </li>
        <li className='hover:text-gray-6/90 transition-colors duration-150'>
          <IoCalendarNumberSharp />
        </li>
        <li className='hover:text-gray-6/90 transition-colors duration-150'>
          <IoArrowForwardCircleSharp />
        </li>
      </ul>
    </nav>
  );
}

export default PoemControls;
