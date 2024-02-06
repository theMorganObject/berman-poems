import Link from 'next/link';
import {
  IoArrowBackCircleSharp,
  IoCalendarNumberSharp,
  IoArrowForwardCircleSharp,
} from 'react-icons/io5';

interface PoemControlsProps {
  slugsArr: string[];
  currentSlug: string;
}
function PoemControls({ slugsArr, currentSlug }: PoemControlsProps) {
  const currentIndex = slugsArr.findIndex((slug) => slug === currentSlug);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < slugsArr.length - 1;

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 pb-4 w-64 xs:w-80 xs:px-2 sm:w-96 sm:px-4">
      <ul className="flex justify-between items-center text-4xl text-gray-8/80">
        {hasPrevious ? (
          <Link href={`/poems/${slugsArr[currentIndex - 1]}`}>
            <li className="hover:text-gray-6/90 transition-colors duration-150">
              <IoArrowBackCircleSharp />
            </li>
          </Link>
        ) : (
          <li className="opacity-50">
            <IoArrowBackCircleSharp />
          </li>
        )}
        <Link href="/poems">
          <li className="hover:text-gray-6/90 transition-colors duration-150">
            <IoCalendarNumberSharp />
          </li>
        </Link>
        {hasNext ? (
          <Link href={`/poems/${slugsArr[currentIndex + 1]}`}>
            <li className="hover:text-gray-6/90 transition-colors duration-150">
              <IoArrowForwardCircleSharp />
            </li>
          </Link>
        ) : (
          <li className="opacity-50">
            <IoArrowForwardCircleSharp />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PoemControls;
