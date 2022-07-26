import React, { useContext } from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { ThemeContext } from '../themeContext';

function Contact() {
    const { theme } = useContext(ThemeContext);


    return (



        <div className='w-[100%] mt-[5%] mb-[5%]'>
            <h3 className='project text-[3.5rem] font-semibold text-[#9845e8] text-center dark:text-[#9845e8]' style={{ fontFamily: 'Poppins' }}>Contact</h3>
            <p className='text-xl text-center dark:text-white mb-20' style={{fontFamily:'Poppins'}}> Lets get in Touch.</p>

            <div className='max-w-[100%] flex lg:justify-center lg:items-start justify-start items-start flex-col lg:flex-row mt-20'>
                <div className='w-[100%] flex justify-center items-start flex-col dark:text-white'>
            
                    <form className='flex justify-center items-start flex-col' name="contact" method="POST" netlify onSubmit='submit' data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <label className='text-xl mb-2'>Your Name</label>
                        <input name='name' className='input mb-10 dark:bg-transparent outline-none  h-[50px] w-[90%] sm:w-[80%] lg:w-[90%]' type='text' placeholder='name' />
                        <br></br>

                        <label className='text-xl mb-2'>Your Email</label>
                        <input name='email' className='input mb-10 dark:bg-transparent  outline-none  h-[50px] w-[90%] sm:w-[80%] lg:w-[90%]' type='email' placeholder='email' />
                        <br></br>
                        <label className='text-xl mb-2'>Message</label>
                        <textarea placeholder='message' name='message' cols='100' rows='5' className='input max-w-[100%] w-[90%] sm:w-[80%] lg:w-[90%] outline-none dark:bg-transparent'></textarea>

                        <button type='submit' className='bg-black dark:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-[4px]  text-white font-semibold outline-none border-none p-2 w-[40%] mt-10'>
                            Send
                        </button>
                    </form>


                </div>

                <div className='hidden xl:block mt-10'>

                    <ul className='flex justify-start items-start flex-col dark:text-white'>
                        <li className='flex justify-center items-center mb-10'><BsFillTelephoneFill fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} />
                            <p className='font-semibold ml-2'>12345</p>
                        </li>

                        <li className='flex justify-center items-center'> <AiFillMail fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} />
                            <p className='font-semibold ml-2'> aakritimehrasa@gmail.com</p>
                        </li>




                    </ul>

                    <div className='flex mt-10'>

                        <BsLinkedin fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} />
                        <BsGithub fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} className='icon' />

                    </div>

                </div>
            </div>    </div>
    )
}

export default Contact