import React from 'react'

function Projectbox({ description, name, tags, image, link, g }) {
  return (




    <div className='project-box flex gap-[80px] items-center flex-col lg:flex-row text-justify
 w-[100%] md:w-[100%] mb-40 dark:text-white'>
      <img className='object-contain h-[300px] w-[90%] max-w-[494px] pt-10 mt-10 mr-[10px] flex-1 flex-shrink' src={image} />
      <div className='max-w-[100%] w-[100%] xl:w-[50%]'>
        <h3 className='md:text-4xl md:font-semibold mb-5' style={{ fontFamily: 'Poppins' }}>{name}</h3>
        <p className='sm:text-xl font-[400] md:tracking-[1.4px]' style={{ fontFamily: 'Poppins' }} >
          {description}
        </p>
        <p className='sm:text-xl mt-10 text-left md:leading-[2rem]  font-[400] '>  <a href={link} target='_blank'><span className='mr-2 text-[#ccc] underline italic  hover:text-[#eae]'>View Live </span></a> {g && <>|  <a href={g} target='_blank' ><span className='ml-2 text-[#ccc] underline italic  hover:text-[#eae]'> Github</span></a></>}</p>

        <p className='mt-5 mb-2'>Made with-</p>
        <ul className='flex justify-start items-center flex-wrap'>
          {tags.map(title => {
            return <li key={title} className='mr-[20px] p-1 px-3 rounded-[4px] text-white bg-[#1F1E1E] mb-5'>{title}</li>

          })}

        </ul>
      </div>


    </div>
  )
}

export default Projectbox