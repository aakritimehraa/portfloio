import React, { useContext } from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';
import { ThemeContext } from '../themeContext';


function Banner() {
  const { theme } = useContext(ThemeContext);

  return (



    <div className='max-[100%] w-[100%] mt-[20%]'>

      <h3 className='text-xl md:text-[20px]  leading-[30px] font-[300] dark:text-[#F0F0F0]'>
        Hey I'm <br></br>

        <span className='banner-name leading-[110px] md:text-[80px] lg:text-[96px] text-[40px]'>Aakriti Mehra</span><br></br>
        I'm a Front-End Developer based in Chandigarh, India, with over <span className='banner-name'>1.6 years </span> of experience in building seamless, interactive web applications. I specialize in creating modern, user-friendly websites and applications that deliver engaging and intuitive online experiences.

        Currently, I work as a Front-End Developer, where I've had the opportunity to contribute to a variety of projects, including <span className='banner-name'>Fintech </span>web applications and <span className='banner-name' >MERN stack</span> solutions. My experience has allowed me to gain valuable technical knowledge, problem-solving skills, and a solid understanding of the development process.

        Whether it’s designing pixel-perfect UIs or implementing responsive, high-performance web applications, I’m committed to bringing ideas to life on the internet.
      </h3>

      <h3 className=' flex items-center dark:text-white mt-[5%]'>Say hi <CgArrowLongRight className='ml-[10px]' /></h3>

      <div className=' md:hidden flex mt-10'>

        <a href='https://www.linkedin.com/in/aakriti-mehra-7687021b7/' target='_blank'> <AiFillLinkedin fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} /></a>
        <a href='https://github.com/aakritimehraa' target='_blank'><BsGithub fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} className='icon' /></a>
        <a href='mailto:aakrtiimehrasa@gmail.com' ><AiFillMail fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} className='icon' /></a>
      </div>
      <div className='flex mt-10'>

        <ul className='w-[100%] sm:w-[50%] hidden md:flex justify-start gap-10 items-center font-semibold text-white '>
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