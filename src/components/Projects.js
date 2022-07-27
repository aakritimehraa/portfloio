import React from 'react'
import Projectbox from './Projectbox'
import expense from '../images/1.png'
import amazon from '../images/2.png'
import musicplayer from '../images/3.png'
import Projectboxrev from './Projectboxrev'


function Projects() {
  return (
    
    
    
    <div className='w-[100%] mt-[5%]'>
        <h3 id='projects' className='project text-[3.5rem] font-semibold text-[#9845e8] text-center dark:text-[#9845e8]' style={{fontFamily:'Poppins'}}>Projects</h3>
        <p className='text-xl text-center dark:text-white mb-20' style={{fontFamily:'Poppins'}}> Skills grow. So will this portfolio.

</p>
        <div  className='w-[100%] flex justify-start items-center flex-col'>

        <Projectbox description='Tracks and manages income and expense and visualizes with charts made using react-redux' name='Xpense Tracker' link='https://solid-9fffe.web.app/' g='https://github.com/aakritimehraa/expensetracker' tags={['React' , 'redux' , 'charts.js']} image={expense}/>
        <Projectboxrev description='A simple mobile first music player with amazing features made uisng vanilla javascript ' name='Music player' link='https://musify-player.netlify.app/' g='https://github.com/aakritimehraa/musicplayer' tags={['Html' , 'css' , 'js']} image={musicplayer}/>
        <Projectbox description='Simple amazon clone, mainly focused on providing functionalities like login/signup ,Shop, add to your cart, and see your total.' name='Amazon Clone' link='https://fir-4310b.web.app/' g='https://github.com/aakritimehraa/Amazon-clonee' tags={['React' , 'Firebase' , 'Material ui']} image={amazon}/>

        </div>
        </div>
  )
}

export default Projects