import Markdown from 'react-markdown';
import { getPoemData } from '../../../../lib/poems-util';
import classes from './poem-text.module.css';

interface PoemProps {
  poemId: string;
}

function PoemText({ poemId }: PoemProps) {
  const poemData = getPoemData(poemId);
  const { title, date, poemNumber, content } = poemData;

  return (
    <article className='min-w-[250px] s:min-w-xs md:min-w-[400px]'>
      <h2 className='text-4xl text-center font-tangerine mt-2 mb-4 xs:text-5xl sm:text-6xl'>
        {title}
      </h2>
      <div className='flex font-bold justify-between mb-1'>
        <p>{date}</p>
        <p>&#8470; {poemNumber}</p>
      </div>
      <div
        className={`customScrollbar max-h-[75vh] min-w-[250px] ${classes.fixParagraph}`}
      >
        <Markdown className='text-base xs:text-base sm:text-lg max-h-[70vh]'>
          {content}
        </Markdown>
      </div>
    </article>
  );
}

export default PoemText;
