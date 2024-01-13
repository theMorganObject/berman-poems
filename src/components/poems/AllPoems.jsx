import PoemsList from './PoemsList';

function AllPoems(props) {
  return (
    <section>
      <h2>All Poems</h2>
      <PoemsList poems={props.poems} />
    </section>
  );
}

export default AllPoems;
