import React from 'react'

function Projectboxrev({description , name, tags , image , link , g}) {
  return (



    <div className='project-box flex justify-between items-center flex-col lg:flex-row-reverse text-justify
    w-[100%] md:w-[100%] ml-10 mb-40  dark:text-white'>
<img className='object-contain max-h-[300px] md:max-h-[400px] w-[60%] pt-10 mt-10 mr-[10px] flex-shrink' src={image} />
<div className='max-w-[100%] w-[100%] xl:w-[50%]'>
   <h3 className='md:text-4xl md:font-semibold mb-5' style={{fontFamily:'Poppins'}}>{name}</h3>
   <p className='sm:text-xl md:leading-[2rem] xl:leading-[3rem] font-[400] md:tracking-[1.4px] mr-[10px]' style={{fontFamily: 'Inter '}}>
   {description}
   </p>

   <p className='sm:text-xl md:leading-[2rem] xl:leading-[3rem] font-[400] md:tracking-[1.4px]'>  <a href={link} target='_blank'><span className='mr-2 text-[#ccc] underline italic  hover:text-[#eae]'>View Live </span></a> {g ?  <a href={g} target='_blank' ><span className='ml-2 text-[#ccc] underline italic  hover:text-[#eae]'> Github</span></a>: ''}</p>

   <p className='flex lg:justify-start items-center mt-5 mb-2 lg:mr-[20px]'>Made with-</p>
   <ul className='flex lg:justify-start items-center'>
       {tags.map(title => {
           return     <li key={title} className='mr-[20px] p-1 px-3 rounded-[4px] text-white bg-[#1F1E1E]'>{title}</li>
   
       })}
     
   </ul>
   </div>
   
   
       </div>
    )
}

export default Projectboxrev