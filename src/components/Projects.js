import React from 'react'
import Projectbox from './Projectbox'
import amazon from '../images/1.png'
import musicplayer from '../images/2.png'
import expense from '../images/3.png'
import Projectboxrev from './Projectboxrev'


function Projects() {
  return (
    
    
    
    <div className='w-[100%] mt-[5%]'>
        <h3 className='project text-[3.5rem] font-semibold text-[#9845e8] text-center dark:text-[#9845e8]' style={{fontFamily:'Poppins'}}>Projects</h3>
        <p className='text-xl text-center dark:text-white mb-20' style={{fontFamily:'Poppins'}}> Skills grow. So will this portfolio.

</p>
        <div className='w-[100%] flex justify-start items-center flex-col'>

        <Projectbox description='Simple amazon clone, mainly focused on providing functionalities like login/signup ,Shop, add to your cart, and see your total.' name='Amazon Clone' tags={['React' , 'Firebase' , 'Material ui']} image={amazon}/>
        <Projectboxrev description='Simple amazon clone, mainly focused on providing functionalities like login/signup ,Shop, add to your cart, and see your total.' name='Amazon Clone' tags={['React' , 'Firebase' , 'Material ui']} image={expense}/>
        <Projectbox description='Simple amazon clone, mainly focused on providing functionalities like login/signup ,Shop, add to your cart, and see your total.' name='Amazon Clone' tags={['React' , 'Firebase' , 'Material ui']} image={musicplayer}/>

        </div>
        </div>
  )
}

export default Projects