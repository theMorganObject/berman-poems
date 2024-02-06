import PoemControls from './PoemControls';
import PoemText from './PoemText';

interface PoemProps {
  poemId: string;
  slugsArr: string[];
}

function PoemStepper({ poemId, slugsArr }: PoemProps) {
  return (
    <div>
      <PoemText poemId={poemId} />
      <PoemControls currentSlug={poemId} slugsArr={slugsArr} />
    </div>
  );
}

export default PoemStepper;
