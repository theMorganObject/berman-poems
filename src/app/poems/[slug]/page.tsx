import { getSortedPoemSlugs } from '../../../../lib/poems-util';

import PoemStepper from '@/components/poems/poem-stepper/PoemStepper';

async function getPoemSlugs() {
  const res = await getSortedPoemSlugs();
  const allPoemSlugs = await res;
  return allPoemSlugs;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const poemID = params.slug;
  const allSLugs = await getPoemSlugs();

  return (
    <section className='relative flex flex-col items-center max-h-screen overflow-y-scroll p-2 pb-16'>
      <PoemStepper poemId={`${poemID}`} slugsArr={allSLugs} />
    </section>
  );
}
