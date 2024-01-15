import PoemControls from './PoemControls';
import PoemText from './PoemText';

interface PoemProps {
  poemId: string;
}

function PoemStepper({ poemId }: PoemProps) {
  return (
    <div>
      <PoemText poemId={poemId} />
      <PoemControls />
    </div>
  );
}

export default PoemStepper;
