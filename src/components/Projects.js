import React, { useEffect } from 'react';
import Projectbox from './Projectbox';
import expense from '../images/1.png';
import amazon from '../images/2.png';
import musicplayer from '../images/3.png';
import web from '../images/4.png';
import lofi from '../images/lofi.png';

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.3, 
      }
    );

    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach((box) => observer.observe(box));

    return () => {
      projectBoxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <div className="projects w-[100%] mt-[5%]">
      <h3
        id="projects"
        className="project text-[3.5rem] font-semibold text-[#9845e8] text-center dark:text-[#9845e8]"
        style={{ fontFamily: 'Poppins' }}
      >
        Projects
      </h3>
      <p
        className="text-xl text-center dark:text-white mb-20"
        style={{ fontFamily: 'Poppins' }}
      >
        Skills grow. So will this portfolio.
      </p>
      <div className="w-[100%] flex justify-start items-center flex-col">
        {/* First Project */}
        <div className="project-box">
          <Projectbox
            description="A user-friendly lofi music website with seamless audio playback, different sound effects"
            name="Lofi Studio"
            link="https://lofi-studio.netlify.app"
            g="https://github.com/aakritimehraa/react-lofi"
            tags={['React', 'redux', 'netlify']}
            image={lofi}
          />
        </div>

        {/* Second Project */}
        <div className="project-box">
          <Projectbox
            description="Tracks and manages income and expense and visualizes with charts made using react-redux"
            name="Xpense Tracker"
            link="https://expense-tracker-by-aakriti.netlify.app/"
            g="https://github.com/aakritimehraa/expensetracker"
            tags={['React', 'redux', 'charts.js']}
            image={expense}
          />
        </div>

        {/* Third Project */}
        <div className="project-box">
          <Projectbox
            description="Website I made for my former company where I interned as a front-end developer. Made using React, Gatsby, and Tailwind CSS"
            name="Company Website"
            link="https://emsy.netlify.app/"
            tags={['React', 'Gatsby', 'Tailwind css']}
            image={web}
          />
        </div>

        {/* Fourth Project */}
        <div className="project-box">
          <Projectbox
            description="Simple amazon clone, mainly focused on providing functionalities like login/signup, Shop, add to your cart, and see your total."
            name="Amazon Clone"
            link="https://fir-4310b.web.app/"
            g="https://github.com/aakritimehraa/Amazon-clonee"
            tags={['React', 'Firebase', 'Material ui']}
            image={amazon}
          />
        </div>

        {/* Fifth Project */}
        <div className="project-box">
          <Projectbox
            description="A simple mobile-first music player with amazing features made using vanilla JavaScript"
            name="Music player"
            link="https://musify-player.netlify.app/"
            g="https://github.com/aakritimehraa/musicplayer"
            tags={['Html', 'css', 'js']}
            image={musicplayer}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
