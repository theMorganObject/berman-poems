import {
  IoMenu,
  IoHome,
  IoSearchSharp,
  IoInformationCircle,
} from 'react-icons/io5';
import Link from 'next/link';

function Navigation() {
  return (
    <nav className='fixed bottom-0 left-1/2 transform -translate-x-1/2 pb-4 w-64 xs:w-80 xs:px-2 sm:w-96 sm:px-4'>
      <ul className='flex justify-between items-center text-4xl text-gray-8/80'>
        <li
          // TODO: build nav overlay on this burger menu
          className='hover:text-gray-6/90 cursor-pointer transition-colors duration-150'
        >
          <IoMenu />
        </li>
        <Link href='/'>
          <li className='hover:text-gray-6/90 transition-colors duration-150'>
            <IoHome />
          </li>
        </Link>
        <Link href='/poems'>
          <li
            id='search-icon'
            className='hover:text-gray-6/90 transition-colors duration-150'
          >
            <IoSearchSharp />
          </li>
        </Link>
        <Link href='/info'>
          <li className='hover:text-gray-6/90 transition-colors duration-150'>
            <IoInformationCircle />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
