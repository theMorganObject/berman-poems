'use client';

import { useState, useEffect } from 'react';
import Navigation from '../UI/Navigation';
import FilteredPoemsList from './FilteredPoemsList';

export interface Poem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  isFeatured: boolean | string;
  poemNumber: string;
  content: string;
}

export interface AllPoemsProps {
  poems: Poem[];
}

function filterPoemsByYearAndMonth(
  poems: Poem[],
  year: string,
  month: string
): Poem[] {
  return poems
    .filter((poem) => {
      const poemDate = new Date(poem.date);
      const poemYear = poemDate.getFullYear().toString();
      // Adjust the month to match the input format (assuming '01'-'12')
      const poemMonth = (poemDate.getMonth() + 1).toString().padStart(2, '0');

      return poemYear === year && poemMonth === month;
    })
    .sort((poemA, poemB) => poemA.date.localeCompare(poemB.date));
}

function AllPoems({ poems }: AllPoemsProps) {
  const [year, setYear] = useState<string>('2020');
  const [month, setMonth] = useState<string>('08');
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);

  useEffect(() => {
    const filtered = filterPoemsByYearAndMonth(poems, year, month);
    setFilteredPoems(filtered);
  }, [poems, year, month]);

  return (
    <section className='max-h-screen overflow-y-scroll p-2 pb-16'>
      <h2 className='text-6xl text-center font-tangerine mt-2 mb-2 xs:text-6xl sm:text-7xl'>
        All Poems
      </h2>
      <h3 className='text-center text-lg tracking-wide font-bold mb-9 xs:text-lg sm:text-xl'>
        ~ {month} | {year} ~
      </h3>
      <FilteredPoemsList poems={filteredPoems} />
      <Navigation />
    </section>
  );
}

export default AllPoems;
