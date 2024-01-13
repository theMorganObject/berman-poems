import Background from '@/components/UI/Background';
import Poem from '@/components/Poem';
import PoemControls from '@/components/UI/PoemControls';
import { getPoemsFiles, getAllPoems } from '../../../../lib/poems-util';

// NOTE: notes from expirments before switching to a new routing paradigm, left in a working commit for reference _tMO

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const res = await getAllPoems();
//   const poems = await res;
//   console.log(poems);

//   return poems.map((poem) => ({
//     poem: poem,
//   }));
// }

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

// @ts-ignore
// async function getPost(params) {
//   const res = await fetch(`https://.../poem/${params.id}`);
//   const poem = await res.json();

//   console.log(poem);
//   return poem;
// }

export default function Page({ params }: { params: { slug: string } }) {
  // console.log(params);
  const poemID = params.slug;

  return (
    <section className='relative flex min-h-screen flex-col items-center p-2 pb-16'>
      <Background />
      <Poem poemId={`poem-${poemID}`} />
      <PoemControls />
    </section>
  );
}
