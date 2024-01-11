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
      <h2>{title}</h2>
      <p>{date}</p>
      <Markdown>{content}</Markdown>
    </article>
  );
}

export default Poem;
