import React from 'react'
import Projectbox from './Projectbox'
import expense from '../images/1.png'
import amazon from '../images/2.png'
import musicplayer from '../images/3.png'
import web from '../images/4.png'
import mern from '../images/mern.png'
import lofi from '../images/lofi.png'

import Projectboxrev from './Projectboxrev'


function Projects() {
  return (
    
    
    
    <div className='projects w-[100%] mt-[5%]'>
        <h3 id='projects' className='project text-[3.5rem] font-semibold text-[#9845e8] text-center dark:text-[#9845e8]' style={{fontFamily:'Poppins'}}>Projects</h3>
        <p className='text-xl text-center dark:text-white mb-20' style={{fontFamily:'Poppins'}}> Skills grow. So will this portfolio.

</p>
        <div  className='w-[100%] flex justify-start items-center flex-col'>
        <Projectbox description='A user-friendly lofi music website with seamless audio playback , different sound effects
' name='Lofi  Studio' link='https://lofi-studio.netlify.app' g='https://github.com/aakritimehraa/react-lofi' tags={['React' , 'redux' , 'netlify']} image={lofi}/>
        {/* <Projectboxrev description='A MERN stack personal dairy website with user authentication and multiple features. Live Link may not work properly if backend server gets expired ' name='YODA' link='https://yodamern.onrender.com/' g='https://github.com/aakritimehraa/pd'  tags={['React' , 'node' , 'mongodb' , 'express' , 'jwt']} image={mern}/> */}
        <Projectbox description='Tracks and manages income and expense and visualizes with charts made using react-redux' name='Xpense Tracker' link='https://expense-tracker-by-aakriti.netlify.app/' g='https://github.com/aakritimehraa/expensetracker' tags={['React' , 'redux' , 'charts.js']} image={expense}/>
        <Projectboxrev description='Website i made for my former company where i interned as a front end developer. Made using React , gatsby , Tailwindcss' name='Company Website' link='https://emsy.netlify.app/'  tags={['React' , 'Gatsby' , 'Tailwind css']} image={web}/>
        <Projectbox description='Simple amazon clone, mainly focused on providing functionalities like login/signup ,Shop, add to your cart, and see your total.' name='Amazon Clone' link='https://fir-4310b.web.app/' g='https://github.com/aakritimehraa/Amazon-clonee' tags={['React' , 'Firebase' , 'Material ui']} image={amazon}/>
        <Projectboxrev description='A simple mobile first music player with amazing features made uisng vanilla javascript ' name='Music player' link='https://musify-player.netlify.app/' g='https://github.com/aakritimehraa/musicplayer' tags={['Html' , 'css' , 'js']} image={musicplayer}/>

        </div>
        </div>
  )
}

export default Projects