import React from 'react'

function Projectbox({description , name, tags , image}) {
  return (




<div className='project-box flex justify-between items-center flex-col lg:flex-row text-justify
 w-[100%] md:w-[100%] mb-40 dark:text-white'>
<img className='object-contain h-[300px] w-[90%] pt-10 mt-10 mr-[10px] flex-1 flex-shrink' src={image} />
<div className='max-w-[100%] w-[100%] xl:w-[50%]'>
<h3 className='md:text-4xl font-semibold mb-5' style={{fontFamily:'Poppins'}}>{name}</h3>
<p className='sm:text-xl md:leading-[2rem] xl:leading-[3rem] font-[400] md:tracking-[1.4px]' style={{fontFamily: 'Inter '}}>
{description}
</p>
<p className='mt-5 mb-2'>Made with-</p>
<ul className='flex justify-start items-center'>
    {tags.map(title => {
        return     <li className='mr-[20px] p-1 px-3 rounded-[4px] text-white bg-[#1F1E1E]'>{title}</li>

    })}
  
</ul>
</div>


    </div>
  )
}

export default Projectbox