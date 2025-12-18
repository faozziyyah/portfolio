//import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import HotelIcon from '@mui/icons-material/Hotel';
import image from '../../assets/pic.svg'
import { TechStack } from './TechStack';
import { Tools } from './Tools';
import Header from '../Header';

function About() {
  return (
    <div className="about">

        <Header />

        <section className="flex justify-between items-center w-[90%] m-auto">

            <img src={image} alt="" id='pic4' />

            <aside className='w-[50%]'>

                <p className='text-justify'>
                    Hi There, I am <span className="blue">Faoziyyah </span>, an experienced Full-Stack Engineer skilled in building secure, scalable, and high-performance 
                    web applications using React, Next.js, Django, and Node.js. <br />
                    Proficient in designing responsive frontends, developing robust RESTful APIs, and integrating
                    third-party services to deliver seamless end-to-end solutions.
                    <br /> <br />
                    Here are some other activities I enjoy doing:
                </p>

                <ul>
                  <li className="about-activity">
                    <MovieIcon />  Watching Movies
                  </li>
                  <li className="about-activity">
                    <ChromeReaderModeIcon /> Playing games
                  </li>
                  <li className="about-activity">
                    <HotelIcon /> Sleeping
                  </li>
                </ul>

                <a className="button" style={{width: '50%', marginTop: '1em', textDecoration: 'none'}}
					//href="https://drive.google.com/file/d/1vQPTTkFW5kECZO2zjigHOs76M58S7m77/view?usp=drive_link"
                    href="https://drive.google.com/file/d/1B0Lk-3dYfOzojy1-mUjELfTRX5zaCKF3/view?usp=sharing"
				>
					{/*<AiOutlineDownload /> */} &nbsp;Download Resume
				</a>

            </aside>

            <img src={image} alt="" id='pic3' />

        </section>

        <main className='flex justify-between w-[90%] m-auto mt-8'>

            <section className="flex flex-col w-[40%]">
            
                <h1 className="font-extrabold text-xl mb-4"> Professional Skillset </h1>

                <TechStack />

            </section>

            <section className="flex flex-col w-[40%]">
    
                <h1 className="font-extrabold text-xl mb-4"> Tools </h1>
    
                <Tools />
    
            </section>

        </main>

        <section className=' mt-8'>

            <h1 className="font-extrabold text-xl mb-4"> Education </h1>

            <div className="flex justify-between items-center w-[90%] m-auto">
                    
                <div className="edu-box h-[120px]">

                    <div className="date py-[10px]">
                        <p className='text-white italic'>Sep. 2019 - July 2024</p> <br />
                        <h2 className='text-[25px]' style={{lineHeight: '30px'}}>Olabisi Onabanjo University</h2>
                    </div>

                    <div className="flex justify-center items-center text-center px-[10px]">
                        <h4>Bachelor of Nursing Science</h4>
                    </div>

                </div>

                <div className="edu-box h-[120px]">

                    <div className="date py-[10px]">
                        <p className='text-white italic'>Apr 2022 - Apr 2023</p> <br />
                        <h2 className='text-[25px]' style={{lineHeight: '30px'}}>AltSchool Africa</h2>
                    </div>

                    <div className="flex justify-center items-center text-center px-[10px]">
                        <h4 className="">Diploma in Backend Engineering</h4>
                    </div>

                </div>

            </div>

        </section>

    </div>
  )
}

export { About }