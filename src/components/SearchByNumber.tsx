'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { keypadButtons } from '@/lib/search-util';

const SearchByNumber: React.FC = () => {
  const [poemNumber, setPoemNumber] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const sharedButtonClasses =
    'px-12 py-2 text-2xl tracking-wide font-bold rounded-md border-2 border-gray-9 focus:outline-none focus:ring-4 sm:py-3 sm:text-3xl';

  const appendDigit = (digit: string) => {
    setPoemNumber((current) => `${current}${digit}`);
    setError(null);
  };

  const clearLastDigit = () => {
    setPoemNumber((current) => current.slice(0, -1));
    setError(null);
  };

  const clearInput = () => {
    setPoemNumber('');
    setError(null);
  };

  const fetchPoemIdAndNavigate = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/get-poem-id?number=${poemNumber}`);
      const data = await response.json();

      if (response.ok && data.id) {
        router.push(`/poems/${data.id}`);
      } else {
        setError('Poem not found');
      }
    } catch (err) {
      console.error('Error fetching poem:', err);
      setError('Failed to fetch poem');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col min-h-screen justify-center gap-12 p-4 sm:w-96'>
      {/* Current Search Display */}
      <div className='bg-white text-black font-bold text-2xl shadow-md rounded-lg w-full p-4 text-center sm:text-3xl sm:py-6'>
        {poemNumber || 'Enter Poem Number'}
      </div>

      {/* Keypad UI */}
      <div className='grid grid-cols-3 gap-4'>
        {keypadButtons.map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === 'Delete') clearLastDigit();
              else if (button === 'Clear') clearInput();
              else appendDigit(button);
            }}
            className='px-4 py-2 font-bold text-xl bg-gray-0 border-2 border-gray-8 rounded-md shadow-md focus:outline-none focus:ring-4 hover:ring-4 sm:text-2xl'
          >
            {button}
          </button>
        ))}
      </div>

      {/* Search Button */}
      <div className='w-full flex justify-center'>
        <button
          onClick={fetchPoemIdAndNavigate}
          disabled={!poemNumber || loading}
          className={`${sharedButtonClasses} ${
            loading || !poemNumber
              ? 'bg-gray-6 text-gray-0 shadow-md cursor-not-allowed'
              : 'bg-gray-0 text-gray-8 shadow-lg hover:ring-4'
          }`}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Error */}
      {error && <p className='text-red-500 text-center'>{error}</p>}
    </div>
  );
};

export default SearchByNumber;
