import React, { useState } from 'react'
import Toggle from '../toggle'
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from '../themeContext.js';
import resume from '../pdf/aakritimehraresume.pdf'

function Header() {
    const [menu, setMenu] = useState(false)
    const { theme} = React.useContext(ThemeContext);


  return (
    

    <>
<div className='sm:hidden header flex justify-between items-center'>
        <h1 className='py-2  dark:text-white' style={{ fontFamily: 'Josefin Sans' }}>A<sub>M</sub></h1>
        {menu ? '' :
        <p onClick={() => setMenu(true)} className=' text-white'><ImMenu fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} />  </p>
     }   </div>
      {menu ?
        <div className='menu dark:opacity-[0.8]'>

          <p onClick={() => setMenu(false)} className='float-right m-4'><AiOutlineClose fontSize='1.25rem' /></p>
          <ul className='h-[60%] flex justify-around items-center flex-col pr-10 mr-[20px] w-[100%] relative text-gray-900 dark:text-white' style={{ fontFamily: 'Belleza' }} >
        <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold  hover:border-pink-100 hover:border-b-2 transition-all'><p className=' border-pink-100 '>Home</p></li>
        <a href='#projects'> <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold  hover:border-pink-100 hover:border-b-2 transition-all'>Projects</li> </a>
         <a href='#contacts'><li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold hover:border-pink-100 hover:border-b-2 transition-all'>Contact</li> </a>
         <a href={resume} target='_blank' >    <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold hover:border-pink-100 hover:border-b-2  transition-all'>Resume</li></a>
            <li>          <Toggle /> 
            </li>
          </ul>

        </div>
        : null
      } 
    
    <div className='md:h-[120px] w-[100%] hidden sm:flex justify-between items-center dark:text-[white] mb-20'>

<h1 className='text-2xl' style={{ fontFamily: 'Josefin Sans' }}>A<sub>M</sub></h1>
<ul className='flex justify-center items-center relative text-gray-900  dark:text-[white]' >
  <li className='mr-[20px] ml-[20px]  hover:border-[#9845e8] hover:border-b-2 transition-all'>Home</li>
  <a href='#projects'><li className='mr-[20px] ml-[20px]      hover:border-[#9845e8] hover:border-b-2 transition-all'>Projects</li></a>
   <a href='#contacts'><li className='mr-[20px] ml-[20px]   hover:border-[#9845e8] hover:border-b-2 transition-all'>Contact</li></a>
<a href={resume} target='_blank' > <li className='mr-[20px]  ml-[20px]  hover:border-[#9845e8] hover:border-b-2 transition-all'>Resume</li></a>
<li className='ml-[20px]'><Toggle />
</li>


</ul>
    </div>
    </>
  )
}

export default Header