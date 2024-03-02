import React, { useContext } from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';
import { ThemeContext } from '../themeContext';


function Banner() {
  const { theme } = useContext(ThemeContext);

  return (



    <div className='max-[100%] w-[100%] mt-[20%]'>

      <h3 className='text-xl md:text-[20px]  leading-[30px] font-[300] dark:text-[#F0F0F0]' style={{ fontFamily: 'Inter , sans serif ' }}>
        Hey I'm <br></br>

        <span className='banner-name leading-[110px] md:text-[80px] lg:text-[96px] text-[40px]'>Aakriti Mehra</span><br></br>
        I'm a Front-end developer based in Chandigarh, India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Currently i work as a Frontend Developer , I have total 1.2+ years experience and I've managed to gain a decent amount of experience and valuable knowledge from all different kinds projects i have worked on.
        I have experience in developing Fintech Web Apps , Mern Stack Web Apps and a lot more.
      </h3>

      <h3 className=' flex items-center dark:text-white mt-[5%]'>Say hi <CgArrowLongRight className='ml-[10px]' /></h3>

      <div className=' md:hidden flex mt-10'>

        <a href='https://www.linkedin.com/in/aakriti-mehra-7687021b7/' target='_blank'> <AiFillLinkedin fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} /></a>
        <a href='https://github.com/aakritimehraa' target='_blank'><BsGithub fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} className='icon' /></a>
        <a href='mailto:aakrtiimehrasa@gmail.com' ><AiFillMail fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} className='icon' /></a>
      </div>
      <div className='flex mt-10'>

        <ul className='w-[100%] sm:w-[50%] hidden md:flex justify-between items-center font-semibold text-white '>
          <a href='https://www.linkedin.com/in/aakriti-mehra-7687021b7/' target='_blank'><li className='one flex justify-around items-center mr-[10px]'><AiFillLinkedin fontSize='1.25rem' color='white' /><p className=''> Linkedin</p>
          </li> </a>
          <a href='https://github.com/aakritimehraa' target='_blank'><li className='one flex justify-around items-center mr-[10px]'><BsGithub fontSize='1.25rem' color='white' className='' /> <p className=' px-2'>Github </p>
          </li> </a>
          <a href='mailto:aakritimehrasa@gmail.com'><li className='one flex justify-around items-center '><AiFillMail fontSize='1.25rem' color='white' className='' /> <p className='px-2'> Mail </p>
          </li> </a>
        </ul>
      </div>
    </div>
  )
}

export default Banner