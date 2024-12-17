import PoemControls from './PoemControls';
import PoemText from './PoemText';
import { Poem } from '@/types/poem';

interface PoemStepperProps {
  poem: Poem;
  poemIds: string[];
}

function PoemStepper({ poem, poemIds }: PoemStepperProps) {
  return (
    <div>
      <PoemText poem={poem} />
      <PoemControls currentId={poem._id} poemIds={poemIds} />
    </div>
  );
}

export default PoemStepper;
