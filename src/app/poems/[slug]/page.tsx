import { getPoemById, getAllPoemIds } from '@/lib/poems-util';
import PoemStepper from '@/components/poems/poem-stepper/PoemStepper';

export const revalidate = 3600; // Revalidate every hour

export default async function Page({ params }: { params: { slug: string } }) {
  const poemId = params.slug;
  const allPoemIds = await getAllPoemIds();
  const poem = await getPoemById(poemId);

  if (!poem) {
    return <p>Poem not found.</p>;
  }

  return (
    <section className='flex flex-col items-center min-h-screen p-2'>
      <PoemStepper poem={poem} poemIds={allPoemIds} />
    </section>
  );
}
