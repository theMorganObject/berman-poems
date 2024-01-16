import Markdown from 'react-markdown';
import { getPoemData } from '../../../../lib/poems-util';
import PoemControls from '@/components/poems/poem-stepper/PoemControls';
import classes from './PoemText.module.css';

interface PoemProps {
  poemId: string;
}

function PoemText({ poemId }: PoemProps) {
  const poemData = getPoemData(poemId);
  const { title, date, content } = poemData;

  return (
    <article>
      <h2 className='text-4xl text-center font-tangerine mt-2 mb-4 xs:text-5xl sm:text-6xl'>
        {title}
      </h2>
      <p className='font-bold mb-1'>{date}</p>
      <div className={classes.customScrollbar}>
        <Markdown className='text-sm xs:text-base sm:text-lg max-h-[70vh] overflow-y-scroll transparent-scrollbar'>
          {content}
        </Markdown>
      </div>
      <PoemControls />
    </article>
  );
}

export default PoemText;
