import PoemItem from './PoemItem';
import { Poem } from './AllPoems';

interface FilteredPoemsListProps {
  poems: Poem[];
}

function FilteredPoemsList({ poems }: FilteredPoemsListProps) {
  if (poems.length === 0) {
    return (
      <aside className='px-4 max-w-96'>
        <p className='mb-4'>
          Sorry, but there are currently no poems available for the selected
          time frame.
        </p>
        <p>
          Please limit your search to August-November of 2020. New poems are
          being made available on an ongoing basis.
        </p>
      </aside>
    );
  }

  return (
    <ul>
      {poems.map((poem) => (
        <PoemItem key={poem.slug} poem={poem} />
      ))}
    </ul>
  );
}

export default FilteredPoemsList;
