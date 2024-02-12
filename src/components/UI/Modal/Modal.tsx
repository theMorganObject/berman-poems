import Link from 'next/link';

function Modal() {
  const year: string = '2020';
  switch (year) {
    case '2021':
      console.log('2021 selected');
      break;
    case '2022':
      console.log('2022 selected');
      break;
  }
  const month = 'Jan'; // Please give 3-letter abbreviations for each month

  return (
    <div className='fixed inset-0 bg-gray-0 bg-opacity-100 overflow-y-auto h-full w-full flex items-center justify-center'>
      <div className='p-8 border w-96 shadow-lg rounded-md red-600'>
        <div className='text-center'>
          <div>
            <h3 className='text-2xl font-bold text-gray-9'>Year</h3>
            {/* Year selector buttons */}
          </div>
          <div>
            <h3 className='text-2xl font-bold text-gray-9'>Month</h3>
            {/* Month selector buttons */}
          </div>
          <div className='mt-2 px-7 py-3'>
            <p className='text-lg text-gray-5'>Modal Body</p>
          </div>
          <div className='flex justify-center mt-4 gap-6'>
            <Link
              href='/poems'
              className='px-4 py-2 bg-gray-5 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-4 focus:outline-none focus:ring-2 focus:ring-gray-3'
            >
              Close
            </Link>
            {/* instead of linking this way, please update the state values in AllPoems */}
            <Link
              href={`/poems/${year}/${month}`}
              className='px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-4 focus:outline-none focus:ring-2 focus:ring-gray-3'
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
