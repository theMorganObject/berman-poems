'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from 'react-icons/io5';

interface PoemControlsProps {
  slugsArr: string[];
  currentSlug: string;
}
function PoemControls({ slugsArr, currentSlug }: PoemControlsProps) {
  const currentIndex = slugsArr.findIndex((slug) => slug === currentSlug);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < slugsArr.length - 1;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideNav = () => setVisible(false);
    const showNav = () => {
      setVisible(true);
      clearTimeout(timerId);
      timerId = setTimeout(hideNav, 1500);
    };

    let timerId = setTimeout(hideNav, 1500);

    document.addEventListener('mousemove', showNav);
    document.addEventListener('scroll', showNav);

    return () => {
      clearTimeout(timerId);
      document.removeEventListener('mousemove', showNav);
      document.removeEventListener('scroll', showNav);
    };
  }, []);

  return (
    <nav
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 w-64 xs:w-80 xs:px-2 sm:w-96 sm:px-4 md:w-1/2 transition-opacity duration-500 ${
        visible ? 'opacity-90' : 'opacity-0'
      }`}
    >
      <ul className='flex justify-between items-center text-4xl text-gray-800'>
        {hasPrevious ? (
          <Link href={`/poems/${slugsArr[currentIndex - 1]}`}>
            <li className='hover:text-gray-6/90 transition-colors duration-150 cursor-pointer'>
              <IoArrowBackCircleSharp />
            </li>
          </Link>
        ) : (
          <li className='opacity-50'>
            <IoArrowBackCircleSharp />
          </li>
        )}
        {hasNext ? (
          <Link href={`/poems/${slugsArr[currentIndex + 1]}`}>
            <li className='hover:text-gray-6/90 transition-colors duration-150 cursor-pointer'>
              <IoArrowForwardCircleSharp />
            </li>
          </Link>
        ) : (
          <li className='opacity-50'>
            <IoArrowForwardCircleSharp />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PoemControls;
