'use client';

import { useState, useEffect } from 'react';
import FilteredPoemsList from './FilteredPoemsList';
import Modal from '../UI/Modal/Modal';
import { monthNumberToFullMonthName } from '@/lib/date-utils';

export interface Poem {
  _id: string; // MongoDB ID
  title: string;
  date: string;
  excerpt: string;
  isFeatured: boolean | string;
  poemNumber: number;
  content: string;
}

interface AllPoemsProps {
  poems: Poem[];
}

function AllPoems({ poems }: AllPoemsProps) {
  const [selectedYear, setSelectedYear] = useState<string>('2020');
  const [selectedMonth, setSelectedMonth] = useState<string>('08');
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);
  const [showModal, setShowModal] = useState<boolean>(true);

  useEffect(() => {
    const handleToggleModal = () => {
      setShowModal((prev) => !prev);
    };

    const searchIcon = document.getElementById('search-icon');
    if (searchIcon) {
      searchIcon.addEventListener('click', handleToggleModal);
    }

    return () => {
      if (searchIcon) {
        searchIcon.removeEventListener('click', handleToggleModal);
      }
    };
  }, []);

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
    <section className='h-screen'>
      <h2 className='text-6xl text-center font-tangerine mt-2 mb-5 xs:text-6xl sm:text-7xl'>
        {monthName}, {selectedYear}
      </h2>
      <FilteredPoemsList poems={filteredPoems} />
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
