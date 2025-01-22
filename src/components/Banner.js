import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';
import { ThemeContext } from '../themeContext';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare, FaGithub, FaBootstrap } from 'react-icons/fa';
import nextIcon from '../images/nextjs-icon.svg';

function Banner() {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className="max-[100%] w-[100%] mt-[23%] lg:mt-[20%] ">
      <h3 className="text-xl md:text-[20px] leading-[30px] font-[300] dark:text-[#F0F0F0]">
        Hey I'm <br />
        <span className="banner-name typing leading-[110px] md:text-[80px] lg:text-[96px] text-[40px]">
          Aakriti Mehra
        </span>
        <br />
        I'm a Front-End Developer based in Chandigarh, India, with a couple of years of experience in building seamless, interactive web applications. I specialize in creating modern, user-friendly websites and applications that deliver engaging and intuitive online experiences.
      </h3>

      <div className="flex flex-wrap justify-start gap-6 mt-10">
        <TechIcon Icon={FaHtml5} text="HTML" />
        <TechIcon Icon={FaCss3Alt} text="CSS" />
        <TechIcon Icon={FaJsSquare} text="JS" />
        <TechIcon Icon={FaReact} text="React" />
        <TechIcon Icon={FaNodeJs} text="Node.js" />
        <TechIcon Icon={FaGithub} text="GitHub" />
        <TechIcon Icon={FaBootstrap} text="Bootstrap" />
        <TechIcon Icon={() => <img src={nextIcon} alt="Next.js" className="h-12 w-12" />} text="Next.js" />
      </div>

      <h3 className="flex items-center dark:text-white mt-[5%]">
        Say hi <CgArrowLongRight className="ml-[10px]" />
      </h3>

      <div className="md:hidden flex mt-10">
        <a href="https://www.linkedin.com/in/aakriti-mehra-7687021b7/" target="_blank">
          <AiFillLinkedin fontSize="1.25rem" color={theme === 'dark' ? 'white' : 'black'} />
        </a>
        <a href="https://github.com/aakritimehraa" target="_blank">
          <BsGithub fontSize="1.25rem" color={theme === 'dark' ? 'white' : 'black'} className="icon" />
        </a>
        <a href="mailto:aakrtiimehrasa@gmail.com">
          <AiFillMail fontSize="1.25rem" color={theme === 'dark' ? 'white' : 'black'} className="icon" />
        </a>
      </div>

      <div className="flex mt-10">
        <ul className="w-[100%] sm:w-[50%] hidden md:flex justify-start gap-10 items-center font-semibold text-white">
          <a href="https://www.linkedin.com/in/aakriti-mehra-7687021b7/" target="_blank">
            <li className="one flex justify-around items-center mr-[10px]">
              <AiFillLinkedin fontSize="1.25rem" color="white" />
              <p>Linkedin</p>
            </li>
          </a>
          <a href="https://github.com/aakritimehraa" target="_blank">
            <li className="one flex justify-around items-center mr-[10px]">
              <BsGithub fontSize="1.25rem" color="white" />
              <p className="px-2">GitHub</p>
            </li>
          </a>
          <a href="mailto:aakrtiimehrasa@gmail.com">
            <li className="one flex justify-around items-center">
              <AiFillMail fontSize="1.25rem" color="white" />
              <p className="px-2">Mail</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Banner;



const TechIcon = ({ Icon, text, color = "#6267df", size = "3rem" }) => {
  return (
    <div className="tech-icon relative group">
      <Icon fontSize={size} color={color} className="transition-transform duration-200 group-hover:scale-125 group-hover:text-[#6267df]" />
      <p className="text-xs p-1 dark:text-[#fff] text-[#000] rounded group-hover:text-[#6267df] group-hover:scale-110 transform transition duration-200">
        {text}
      </p>
    </div>
  );
};

