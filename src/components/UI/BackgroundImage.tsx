import Image from 'next/image';
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

interface BackgroundImageProps {
  children?: ReactNode;
  image: ReactElement<typeof Image>;
}

type BackgroundImageAdditionalProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  keyof BackgroundImageProps
>;

export default function BackgroundImage({
  children,
  image,
}: BackgroundImageProps & BackgroundImageAdditionalProps) {
  return (
    <div className='relative overflow-hidden bg-gray-9/10'>
      <div className='absolute inset-0 -z-10'>{image}</div>
      <div className='z-10 flex h-full justify-center'>{children}</div>
    </div>
  );
}
