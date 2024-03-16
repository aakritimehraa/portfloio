// Header.jsx

import React, { useState, useEffect } from 'react';
import Toggle from '../toggle';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from '../themeContext.js';
import resume from '../pdf/aakritimehraresume.pdf';

function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = React.useContext(ThemeContext);

  const handleScroll = () => {
    setScrolled(window.scrollY > 120);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`sm:hidden header flex justify-between items-center ${scrolled ? 'fixed top-0 left-0 dark:bg-black bg-white shadow-md px-5' : ''} w-[100%]`}>
        <h1 className='py-2 cursor-pointer dark:text-white' style={{ fontFamily: 'Josefin Sans' }}>
          A<sub>M</sub>
        </h1>
        {menu ? (
          ''
        ) : (
          <p onClick={() => setMenu(true)} className='text-white'>
            <ImMenu fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} />
          </p>
        )}
      </div>
      {menu ? (
        <div className='menu dark:opacity-[0.8]'>
          <p onClick={() => setMenu(false)} className='float-right m-4'>
            <AiOutlineClose fontSize='1.25rem' />
          </p>
          <ul className='h-[60%] flex justify-around items-center flex-col  mr-[20px] w-[100%] relative text-gray-900 dark:text-white' style={{ fontFamily: 'Belleza' }}>
            <a href='#projects'>
              {' '}
              <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold  hover:border-pink-100 hover:border-b-2 transition-all'>
                Projects
              </li>{' '}
            </a>
            <a href='#contacts'>
              <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold hover:border-pink-100 hover:border-b-2 transition-all'>
                Contact
              </li>{' '}
            </a>
            <a href={resume} target='_blank'>
              {' '}
              <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold hover:border-pink-100 hover:border-b-2  transition-all'>
                Resume
              </li>
            </a>
            <li>
              {' '}
              <Toggle />
            </li>
          </ul>
        </div>
      ) : null}


      <div  style={{ boxShadow: scrolled ? '6px 1px 39px -8px #EA27D9' : 'none' }} className={`md:h-[120px] w-[100%] hidden sm:flex justify-between items-center mb-20 fixed top-0 left-0 ${scrolled ? ' dark:bg-black bg-white' : ''}`}>
        <div className={`md:h-[120px] w-[70%] m-auto sm:flex justify-between items-center dark:bg-black bg-white`}>
          <h1 className='text-2xl text-black dark:text-white' style={{ fontFamily: 'Josefin Sans' }}>
            A<sub>M</sub>
          </h1>
          <ul className='flex justify-center items-center relative text-gray-900 dark:text-[white]'>
            <a href='#projects'>
              <li className='mr-[20px] ml-[20px]      hover:border-[#9845e8] hover:border-b-2 transition-all'>Projects</li>
            </a>
            <a href='#contacts'>
              <li className='mr-[20px] ml-[20px]   hover:border-[#9845e8] hover:border-b-2 transition-all'>Contact</li>
            </a>
            <a href={resume} target='_blank'>
              {' '}
              <li className='mr-[20px]  ml-[20px]  hover:border-[#9845e8] hover:border-b-2 transition-all'>Resume</li>
            </a>
            <li className='ml-[20px]'>
              {' '}
              <Toggle />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
