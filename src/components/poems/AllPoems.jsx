import PoemsList from './PoemsList';

function AllPoems(props) {
  return (
    <section className='max-h-screen overflow-y-scroll p-2 pb-16'>
      <h2 className='text-6xl text-center font-tangerine mt-2 mb-2 xs:text-6xl sm:text-7xl'>
        All Poems
      </h2>
      <h3 className='text-center text-lg tracking-wide font-bold mb-9 xs:text-lg sm:text-xl'>
        ~ August | 2020 ~
      </h3>
      <PoemsList poems={props.poems} />
    </section>
  );
}

export default AllPoems;
