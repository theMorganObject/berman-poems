import PoemsList from './PoemsList';

function AllPoems(props) {
  return (
    <section>
      <h2 className='text-6xl text-center font-tangerine mt-16 mb-2 xs:text-6xl sm:text-7xl'>
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

/////////////////////////
// NOTE: This is left in here for posterity. I'm building this project for a dear friend, who is a musician. As I was building this component, I took a short break and played a few movements of the Bach Cello Suites on my 7-string electric viola. I so thoroughly enjoyed the music, I wrote the following expression. Good to be in one's happy place, always do what you love! That's why I'm here, and why you're reading this...
{
  /* <Bach>{...allMusic}</Bach>; */
}
