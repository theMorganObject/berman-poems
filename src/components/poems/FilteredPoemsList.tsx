import PoemItem from './PoemItem';
import { Poem } from './AllPoems';

interface FilteredPoemsListProps {
  poems: Poem[];
}

function FilteredPoemsList({ poems }: FilteredPoemsListProps) {
  return (
    <ul>
      {poems.map((poem) => (
        <PoemItem key={poem.slug} poem={poem} />
      ))}
    </ul>
  );
}

export default FilteredPoemsList;
