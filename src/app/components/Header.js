// src/app/components/Header.js

"use client";

import React from 'react';
import Image from 'next/image';
import profilea from '../assets/profilea.jpeg'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={profilea} alt='Profile' className='rounded-full w-32' />
      </div>
      <h3> Hi! I'm Arun Das </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-serif'>
        Chief Sales Officer based in Bangalore
      </h1>
      <p className='max-w-2xl mx-auto font-sans'>
        A Chief Sales Officer (CSO) is responsible for driving revenue growth by leading and strategizing all sales activities within a company.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap'
          href='#contact'
        > contact me
          {/* <Image className='w-4' src={profilea} alt='Button Icon' /> */}
        </a>
      </div>
    </div>
  );
};

export default Header;
