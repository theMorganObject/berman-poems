import Link from 'next/link';
import { Poem } from './AllPoems';
import { createDateSuffix } from '../../../lib/style-util';

interface PoemItemProps {
  poem: Poem;
}

function PoemItem({ poem }: PoemItemProps) {
  const { title, date, excerpt, poemNumber, slug } = poem;
  const linkPath = `/poems/${slug.replace(/\.md$/, '')}`;

  return (
    <li className='mb-6 mx-4 mt-4'>
      <Link href={linkPath}>
        <div className='relative flex items-start bg-gray-0 bg-opacity-80 border border-gray-8 p-4 rounded shadow-md transform transition-transform hover:scale-105'>
          <div className='flex flex-col justify-between'>
            <div className='flex'>
              <p className='text-2xl font-bold'>
                {date.slice(-2).startsWith('0')
                  ? date.slice(-1)
                  : date.slice(-2)}
              </p>
              <p className='font-tangerine text-lg leading-[2.45rem] mr-6'>
                {createDateSuffix(date.slice(-2))}
              </p>
            </div>
            <p className='absolute bottom-2 right-4 text-base'>
              &#8470; <span className='font-bold'>{poemNumber}</span>
            </p>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-tangerine text-2xl'>{title}</h3>
            <p className='italic ml-4 mb-4'>&quot;{excerpt}...&quot;</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PoemItem;
