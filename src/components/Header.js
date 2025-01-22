import React, { useState, useEffect } from 'react';
import Toggle from '../toggle';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from '../themeContext.js';
import resume from '../pdf/aakritimehraresume.pdf';

function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = React.useContext(ThemeContext);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    setScrollProgress(progress);
    setScrolled(scrollTop > 120);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <div
        className={`sm:hidden header flex justify-between items-center ${
          scrolled
            ? 'fixed top-0 left-0 dark:bg-[#03060b] bg-white shadow-md px-5'
            : ''
        } w-[100%] z-50`}
      >
        <h1
          className="py-2 cursor-pointer dark:text-white"
          style={{ fontFamily: 'Josefin Sans' }}
        >
          A<sub>M</sub>
        </h1>
        <p onClick={() => setMenu(true)} className="text-white">
          <ImMenu
            fontSize="1.25rem"
            color={theme === 'dark' ? 'white' : 'black'}
          />
        </p>
      </div>

      {/* Overlay for Blur Effect */}
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setMenu(false)}
        />
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-screen dark:bg-black bg-[#fff] text-white transition-transform duration-300 ${
          menu ? 'translate-x-0' : '-translate-x-full'
        } w-[200px] z-50`}
      >
        <p onClick={() => setMenu(false)} className="float-right m-4">
          <AiOutlineClose fontSize="1.25rem" className='dark:text-[#fff] text-[#000]'/>
        </p>
        <ul
          className="h-[100%] flex justify-center gap-5 items-center flex-col text-gray-900 dark:text-white"
          style={{ fontFamily: 'Belleza' }}
        >
          <a href="#projects">
            <li
              onClick={() => setMenu(false)}
              className="ml-[4%] font-semibold hover:border-pink-100 hover:border-b-2 transition-all"
            >
              Projects
            </li>
          </a>
          <a href="#contacts">
            <li
              onClick={() => setMenu(false)}
              className="ml-[4%] font-semibold hover:border-pink-100 hover:border-b-2 transition-all"
            >
              Contact
            </li>
          </a>
          <a href={resume} target="_blank">
            <li
              onClick={() => setMenu(false)}
              className="ml-[4%] font-semibold hover:border-pink-100 hover:border-b-2 transition-all"
            >
              Resume
            </li>
          </a>
          <li>
            <Toggle />
          </li>
        </ul>
      </div>

      {/* Desktop Header */}
      <div
        style={{ boxShadow: scrolled ? 'none' : '' }}
        className={`md:h-[120px] w-[100%] hidden sm:flex justify-between items-center mb-20 fixed top-0 left-0 ${
          scrolled ? ' dark:bg-[#03060b] bg-white' : ''
        } z-50`}
      >
        <div
          className={`md:h-[120px] w-[70%] m-auto sm:flex justify-between items-center dark:bg-[#03060b] bg-white`}
        >
          <h1
            className="text-2xl text-black dark:text-white"
            style={{ fontFamily: 'Josefin Sans' }}
          >
            A<sub>M</sub>
          </h1>
          <ul className="flex justify-center items-center relative text-gray-900 dark:text-[white]">
            <a href="#projects">
              <li className="mr-[20px] ml-[20px] hover:border-[#9845e8] hover:border-b-2 transition-all">
                Projects
              </li>
            </a>
            <a href="#contacts">
              <li className="mr-[20px] ml-[20px] hover:border-[#9845e8] hover:border-b-2 transition-all">
                Contact
              </li>
            </a>
            <a href={resume} target="_blank">
              <li className="mr-[20px] ml-[20px] hover:border-[#9845e8] hover:border-b-2 transition-all">
                Resume
              </li>
            </a>
            <li className="ml-[20px]">
              <Toggle />
            </li>
          </ul>
        </div>

        {/* Scroll Progress Bar */}
        {scrolled && (
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
