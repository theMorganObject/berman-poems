import Image from 'next/image';
import parchment from '../../../public/parchment-bg-5.jpg';
import classes from './Background.module.css';

export default function Background() {
  return (
    // <div className={classes.imageContainer}>
    <Image
      alt='Light gray parchment paper background'
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
    // </div>
  );
}
