import PoemItem from './PoemItem';

function PoemsList(props) {
  const { poems } = props;

  return (
    <ul className='max-h-[70vh] overflow-y-scroll transparent-scrollbar'>
      {poems.map((poem) => (
        <PoemItem key={poem.slug} poem={poem} />
      ))}
    </ul>
  );
}

export default PoemsList;
