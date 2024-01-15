import Link from 'next/link';
import {
  IoArrowBackCircleSharp,
  IoCalendarNumberSharp,
  IoArrowForwardCircleSharp,
} from 'react-icons/io5';

function PoemControls() {
  return (
    <nav className='fixed bottom-0 left-1/2 transform -translate-x-1/2 pb-4 w-64 xs:w-80 xs:px-2 sm:w-96 sm:px-4'>
      <ul className='flex justify-between items-center text-4xl text-gray-8/80'>
        <li className='hover:text-gray-6/90 transition-colors duration-150'>
          <IoArrowBackCircleSharp />
        </li>
        <Link href='/poems'>
          <li className='hover:text-gray-6/90 transition-colors duration-150'>
            <IoCalendarNumberSharp />
          </li>
        </Link>
        <li className='hover:text-gray-6/90 transition-colors duration-150'>
          <IoArrowForwardCircleSharp />
        </li>
      </ul>
    </nav>
  );
}

export default PoemControls;
