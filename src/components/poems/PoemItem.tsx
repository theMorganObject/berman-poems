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
        <div className='flex flex-col items-center justify-between bg-gray-0 bg-opacity-80 border border-gray-8 py-4 px-8 rounded shadow-md transform transition-transform hover:scale-105'>
          {/* title and exceprt */}
          {/* ChatGPT: text-ellipsis is not applying to the title. Why? */}
          <h3 className='font-tangerine font-bold text-4xl tracking-wide mb-2'>
            {title}
          </h3>
          <p className='italic text-lg mb-2'>&quot;{excerpt}...&quot;</p>

          {/* poem number + date*/}
          <div className='flex text-xl gap-28'>
            <p>
              &#8470; <span className='font-bold'>{poemNumber}</span>
            </p>
            <div className='flex'>
              <p className='font-bold'>
                {date.slice(-2).startsWith('0')
                  ? date.slice(-1)
                  : date.slice(-2)}
              </p>
              <p className='font-tangerine leading-4'>
                {createDateSuffix(date.slice(-2))}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PoemItem;
