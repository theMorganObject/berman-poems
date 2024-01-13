import PoemItem from './PoemItem';

function PoemsList(props) {
  const { poems } = props;

  return (
    <ul>
      {poems.map((poem) => (
        <PoemItem key={poem.slug} poem={poem} />
      ))}
    </ul>
  );
}

export default PoemsList;
