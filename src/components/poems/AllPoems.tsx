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

function AllPoems({ poems }: AllPoemsProps) {
  const [selectedYear, setSelectedYear] = useState<string>('2020');
  const [selectedMonth, setSelectedMonth] = useState<string>('08');
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // Filter poems based on selectedYear and selectedMonth
    const filteredResults = poems
      .filter((poem) => {
        const poemDate = new Date(poem.date);
        const poemYear = poemDate.getFullYear().toString();
        const poemMonth = (poemDate.getMonth() + 1).toString().padStart(2, '0');
        return poemYear === selectedYear && poemMonth === selectedMonth;
      })
      // Sort the filtered poems by date
      .sort((poemA, poemB) => poemA.date.localeCompare(poemB.date));

    // Update the state with filtered results
    setFilteredPoems(filteredResults);
  }, [poems, selectedYear, selectedMonth]); // Dependencies: re-run when poems, selectedYear, or selectedMonth change

  const monthName = monthNumberToFullMonthName(selectedMonth);

  return (
    <section className='h-screen p-2 pb-16'>
      <h2 className='text-6xl text-center font-tangerine mt-2 mb-8 xs:text-6xl sm:text-7xl'>
        {monthName}, {selectedYear}
      </h2>
      <FilteredPoemsList poems={filteredPoems} />
      <Navigation setShowModal={setShowModal} />
      {showModal && (
        <Modal
          initialYear={selectedYear}
          initialMonth={selectedMonth}
          setYear={setSelectedYear}
          setMonth={setSelectedMonth}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
}

export default AllPoems;
