import React, { useContext } from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';
import { ThemeContext } from '../themeContext';



function Banner() {
    const { theme } = useContext(ThemeContext);

  return (
    
    
    
    <div className='max-[100%] w-[100%] mt-[10%]'>

       <h3 className='text-xl md:text-[20px]  leading-[30px] font-[300] dark:text-[#F0F0F0]' style={{fontFamily:'Inter , sans serif ' }}>
        Hey I'm <br></br>

        <span className='banner-name leading-[110px] md:text-[80px] lg:text-[96px] text-[40px]'>Aakriti Mehra</span><br></br>
        I'm a Front-end developer based in Chandigarh, India and also a Computer Applications student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have interned at a starup as a front end developer for 3 months while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
        </h3> 

        <h3 className=' flex items-center dark:text-white mt-[5%]'>Say hi <CgArrowLongRight className='ml-[10px]' /></h3>
        
        <div className=' md:hidden flex mt-10'>

        <AiFillLinkedin fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'}/>
        <BsGithub fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'} className='icon' /> <p className=' px-2'></p>
<AiFillMail  fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'} className='icon' /> 
</div>
        <div  className='flex mt-10'>

  <ul className='w-[100%] sm:w-[50%] hidden md:flex justify-between items-center font-semibold text-black dark:text-white '>
    <li className='one flex justify-around items-center mr-[10px]'><AiFillLinkedin fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'}/><p className=''> Linkedin</p>
</li> 
<li className='one flex justify-around items-center mr-[10px]'><BsGithub fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'} className='icon' /> <p className=' px-2'>Github </p>
</li> 
<li className='one flex justify-around items-center '><AiFillMail  fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'} className='icon' /> <p className='px-2'> Mail </p>
</li> 
  </ul>
</div>
    </div>
  )
}

export default Banner