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
      </aside>
    );
  }

  return (
    <div className='max-h-[75vh] overflow-y-scroll customScrollbar'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {poems.map((poem) => (
          <PoemItem key={poem._id} poem={poem} />
        ))}
      </ul>
    </div>
  );
}

export default FilteredPoemsList;
