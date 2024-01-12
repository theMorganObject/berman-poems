'use client';

import { useState, useEffect } from 'react';
import classes from './Navigation.module.css';
import {
  IoArrowBackCircle,
  IoCalendarNumber,
  IoArrowForwardCircle,
} from 'react-icons/io5';

function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${classes.nav} ${isVisible ? classes.visible : ''} `}>
      <ul className='flex justify-between text-4xl text-gray-7/80'>
        <li>
          <IoArrowBackCircle />
        </li>
        <li>
          <IoCalendarNumber />
        </li>
        <li>
          <IoArrowForwardCircle />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
