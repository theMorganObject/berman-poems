'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from 'react-icons/io5';

interface PoemControlsProps {
  poemIds: string[];
  currentId: string;
}

function PoemControls({ poemIds, currentId }: PoemControlsProps) {
  const currentIndex = poemIds.findIndex((id) => id === currentId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < poemIds.length - 1;

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
    <>
      {hasPrevious && (
        <Link
          href={`/poems/${poemIds[currentIndex - 1]}`}
          className={`fixed top-1/2 left-4 transform -translate-y-1/2 text-4xl text-gray-8/80 transition-opacity duration-500 ${
            visible ? 'opacity-90' : 'opacity-0'
          } hover:text-gray-6/90 transition-colors duration-150 cursor-pointer`}
        >
          <IoArrowBackCircleSharp />
        </Link>
      )}
      {hasNext && (
        <Link
          href={`/poems/${poemIds[currentIndex + 1]}`}
          className={`fixed top-1/2 right-4 transform -translate-y-1/2 text-4xl text-gray-8/80 transition-opacity duration-500 ${
            visible ? 'opacity-90' : 'opacity-0'
          } hover:text-gray-6/90 transition-colors duration-150 cursor-pointer`}
        >
          <IoArrowForwardCircleSharp />
        </Link>
      )}
    </>
  );
}

export default PoemControls;
