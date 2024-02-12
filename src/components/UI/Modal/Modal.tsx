'use client';

import { useState, useEffect } from 'react';

interface ModalProps {
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
  setShowModal: (show: boolean) => void;
}

function Modal({ setYear, setMonth, setShowModal }: ModalProps) {
  const years = ['2020', '2021', '2022', '2023', '2024'];
  const allMonths = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  const currentYear = new Date().getFullYear().toString();
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
  const [activeYear, setActiveYear] = useState<string>(currentYear);
  const [activeMonth, setActiveMonth] = useState<string>(currentMonth);

  useEffect(() => {
    if (activeYear === currentYear) {
      setActiveMonth(currentMonth);
      setMonth(currentMonth);
    }
  }, [activeYear, currentMonth, currentYear, setMonth]);

  const monthsToShow = (() => {
    if (activeYear === '2020') {
      return ['08', '09', '10', '11', '12'];
    } else if (activeYear === currentYear) {
      return allMonths.slice(0, Number(currentMonth));
    }
    return allMonths;
  })();

  const handleYearClick = (year: string) => {
    setYear(year);
    setActiveYear(year);
    // Reset month to January or current month if the current year is selected
    if (year === currentYear && Number(activeMonth) > Number(currentMonth)) {
      setMonth(currentMonth);
      setActiveMonth(currentMonth);
    }
  };

  const handleMonthClick = (month: string) => {
    setMonth(month);
    setActiveMonth(month);
  };

  return (
    <div className='fixed inset-0 bg-gray-9 bg-opacity-90 overflow-y-auto h-full w-full flex items-center justify-center'>
      <div className='p-8 border w-96 bg-gray-2 shadow-lg rounded-md'>
        <div className='text-center'>
          <div>
            <h3 className='text-2xl font-bold text-gray-9 mb-4'>Year</h3>
            <div className='grid grid-cols-3 gap-4 mb-6'>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className={`px-4 py-2 text-gray-9 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    activeYear === year
                      ? 'bg-gray-5'
                      : 'bg-gray-2 hover:bg-gray-5'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-gray-9 mb-4'>Month</h3>
            <div className='grid grid-cols-4 gap-4 mb-6'>
              {monthsToShow.map((month) => (
                <button
                  key={month}
                  onClick={() => handleMonthClick(month)}
                  className={`px-4 py-2 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    activeMonth === month
                      ? 'bg-blue-600'
                      : 'bg-blue-500 hover:bg-blue-400'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
          <div className='flex justify-center mt-4 gap-6'>
            <button
              onClick={() => setShowModal(false)}
              className='px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-4 focus:outline-none focus:ring-2 focus:ring-gray-3'
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
