import Image from 'next/image';
import parchment from '../../../public/parchment-bg-8.webp';

export default function Background() {
  return (
    <Image
      alt='Light tan parchment paper background'
      src={parchment}
      placeholder='blur'
      quality={100}
      fill
      sizes='100vw'
      style={{
        objectFit: 'cover',
        zIndex: -2,
      }}
    />
  );
}
