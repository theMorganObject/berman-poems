import { HiHome } from 'react-icons/hi2';
import { BsFillCalendarMonthFill } from 'react-icons/bs';
import Link from 'next/link';

interface NavigationProps {
  setShowModal: (show: boolean) => void;
}

function Navigation({ setShowModal }: NavigationProps) {
  return (
    <nav className='fixed bottom-0 left-1/2 transform -translate-x-1/2 pb-4 w-64 xs:w-80 xs:px-2 sm:w-96 sm:px-4'>
      <ul className='flex justify-between items-center text-4xl text-gray-8/80'>
        <Link href='/'>
          <li className='hover:text-gray-6/90 transition-colors duration-150'>
            <HiHome />
          </li>
        </Link>
        <li
          onClick={() => setShowModal(true)}
          className='hover:text-gray-6/90 cursor-pointer transition-colors duration-150'
        >
          <BsFillCalendarMonthFill />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
