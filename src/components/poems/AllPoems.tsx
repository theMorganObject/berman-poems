'use client';

import { useState, useEffect } from 'react';
import Navigation from '../UI/Navigation';
import FilteredPoemsList from './FilteredPoemsList';
import Modal from '../UI/Modal/Modal';
import { monthNumberToFullMonthName } from '../../../lib/date-utils';

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
      const poemMonth = (poemDate.getMonth() + 1).toString().padStart(2, '0');

      return poemYear === year && poemMonth === month;
    })
    .sort((poemA, poemB) => poemA.date.localeCompare(poemB.date));
}

function AllPoems({ poems }: AllPoemsProps) {
  const [year, setYear] = useState<string>('2020');
  const [month, setMonth] = useState<string>('08');
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const filtered = poems
      .filter((poem) => {
        const poemDate = new Date(poem.date);
        const poemYear = poemDate.getFullYear().toString();
        const poemMonth = (poemDate.getMonth() + 1).toString().padStart(2, '0');
        return poemYear === year && poemMonth === month;
      })
      .sort((poemA, poemB) => poemA.date.localeCompare(poemB.date));
    setFilteredPoems(filtered);
  }, [poems, year, month]);
  const monthName = monthNumberToFullMonthName(month);

  return (
    <section className='h-screen p-2 pb-16'>
      <h2 className='text-6xl text-center font-tangerine mt-2 mb-8 xs:text-6xl sm:text-7xl'>
        {monthName}, {year}
      </h2>
      <FilteredPoemsList poems={filteredPoems} />
      <Navigation setShowModal={setShowModal} />
      {showModal && (
        <Modal
          setYear={setYear}
          setMonth={setMonth}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
}

export default AllPoems;
