import Markdown from 'react-markdown';
import { getPoemData } from '../../lib/poems-util';

interface PoemProps {
  poemId: string;
}

function Poem({ poemId }: PoemProps) {
  const poemData = getPoemData(poemId);
  const { title, date, content } = poemData;

  return (
    <article>
      <h2 className='text-4xl text-center font-tangerine mt-2 mb-4 xs:text-5xl sm:text-6xl'>
        {title}
      </h2>
      <p className='font-bold mb-1'>{date}</p>
      <Markdown className='text-sm xs:text-base sm:text-lg'>{content}</Markdown>
    </article>
  );
}

export default Poem;
