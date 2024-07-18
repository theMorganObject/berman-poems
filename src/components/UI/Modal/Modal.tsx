'use client';

import { useState, useEffect } from 'react';
import { monthNumberToShortMonthName } from '../../../../lib/date-utils';

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

  const isMonthInactive = (month: string) => {
    if (activeYear === '2020' && Number(month) <= 7) {
      return true;
    } else if (
      activeYear === currentYear &&
      Number(month) > Number(currentMonth)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className='fixed inset-0 bg-gray-9 bg-opacity-90 overflow-y-auto h-full w-full flex items-center justify-center'>
      <div className='w-60 bg-gray-0 shadow-lg rounded-md px-4 py-6 xs:w-72 xs:p-8 sm:w-96'>
        <div className='text-center'>
          {/* YEAR SECTION */}
          <div>
            <h3 className='text-5xl font-tangerine font-bold text-gray-9 mb-4'>
              Year
            </h3>
            <div className='grid grid-cols-3 gap-4 mb-10'>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className={`px-2 py-1 font-bold rounded-md shadow-sm focus:outline-none focus:ring-4 hover:ring-4 ${
                    activeYear === year
                      ? 'border-2 border-gray-8 ring-4 ring-gray-8'
                      : 'bg-gray-0 text-gray-8 border-2 border-gray-8'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* MONTH SECTION */}
          <div>
            <h3 className='text-5xl font-tangerine font-bold text-gray-9 mb-4'>
              Month
            </h3>
            <div className='grid grid-cols-3 gap-4 mb-8'>
              {allMonths.map((month) => {
                const shortMonthName = monthNumberToShortMonthName(month);
                const isInactive = isMonthInactive(month);

                return (
                  <button
                    key={month}
                    onClick={() => !isInactive && handleMonthClick(month)}
                    disabled={isInactive}
                    className={`px-2 py-1 font-bold rounded-md shadow-sm focus:outline-none ${
                      isInactive
                        ? 'bg-gray-2 text-gray-6 cursor-not-allowed'
                        : activeMonth === month
                        ? 'border-2 border-gray-8 ring-4 ring-gray-8'
                        : 'bg-gray-0 text-gray-8 border-2 border-gray-8 hover:ring-4'
                    }`}
                  >
                    {shortMonthName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className='flex justify-center mt-4 gap-6'>
            <button
              onClick={() => setShowModal(false)}
              className='px-8 py-2 bg-gray-0 text-gray-8 text-2xl tracking-wide font-bold rounded-md shadow-sm border-2 border-gray-9 focus:outline-none focus:ring-4 hover:ring-4'
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
