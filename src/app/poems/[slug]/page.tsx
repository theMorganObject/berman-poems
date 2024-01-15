import Background from '@/components/UI/Background';
import PoemStepper from '@/components/poems/poem-stepper/PoemStepper';

export default function Page({ params }: { params: { slug: string } }) {
  const poemID = params.slug;

  return (
    <section className='relative flex min-h-screen flex-col items-center p-2 pb-16'>
      <Background />
      <PoemStepper poemId={`${poemID}`} />
    </section>
  );
}
