//import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import HotelIcon from '@mui/icons-material/Hotel';
import image from '../../assets/pic.svg'
import { TechStack } from './TechStack';
import { Tools } from './Tools';
import Header from '../Header';
import Footer from '../Footer';

function About() {
  return (
    <div className="about">

        <Header />
        
        <h1 style={{ fontSize: "3em", marginTop: "1em", fontWeight: "900" }}>Know Who <strong className="blue">I&rsquo;M</strong></h1>

        <section className="info">

            <aside>

                <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am <span className="blue">Faoziyyah </span>, 
                    a graduate of backend engineering from <a href="http://">AltSchool Africa</a>. <br />
                    I am Full-stack developer with a passion for design and technology and motivated to constantly 
                    develop my skills and grow professionally. <br />
                    My field of interest is using my skills and knowledge in technology to provide solutions to problems.
                    <br /> <br />
                    Apart from coding, here are some other activities that I love to do..
                </p>

                <ul>
                  <li className="about-activity">
                    <MovieIcon />  Watching Movies
                  </li>
                  <li className="about-activity">
                    <ChromeReaderModeIcon /> Reading Academic Books
                  </li>
                  <li className="about-activity">
                    <HotelIcon /> Sleeping
                  </li>
                </ul>

                <button className="button" style={{width: '50%', marginTop: '1em'}}
					href={
						"https://drive.google.com/file/d/1AbLUo2_2DkxbMEB1BC6VwNXWjps-a-eH/view?usp=sharing"
					}
					target="_blank"
				>
					{/*<AiOutlineDownload /> */} &nbsp;Download Resume
				</button>

            </aside>

            <img src={image} alt="" />

        </section>

        <section className="skills">
            
            <h1 className="project-heading"> Professional <strong className="blue">Skillset </strong> </h1>

            <TechStack />

            <h1 className="project-heading"> <strong className="blue">Tools</strong> I use </h1>

            <Tools />

        </section>

        <section>

            <h1 className="project-heading"> <strong className="blue">My</strong> Education </h1>

            <div className="edu">
                    
                <div className="edu-box">

                    <div className="date" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <p style={{color: 'white', fontStyle: 'italic'}}>Sep. 2019 - July 2024</p> <br />
                        <h2 style={{fontSize: '25px', lineHeight: '30px'}}>Bachelor of Nursing Science</h2>
                    </div>

                    <div className="edu-name" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <h4>Olabisi Onabanjo University</h4> <br />
                        <p style={{fontSize: '12px',}}>Studying Nursing science at Obafemi Awolowo College of Health Sciences, Olabisi Onabanjo University, Nigeria.</p> 
                    </div>

                </div>

                <div className="edu-box">

                    <div className="date" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <p style={{color: 'white', fontStyle: 'italic'}}>Apr 2022 - Apr 2023</p> <br />
                        <h2 style={{fontSize: '25px', lineHeight: '30px'}}>Diploma in Backend Engineering</h2>
                    </div>

                    <div className="edu-name" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <h4 className="p1">AltSchool Africa</h4> <br />
                        <p>A 1-year course designed to cover all aspects of full-stack development using python.</p> 
                    </div>

                </div>

                <div className="edu-box">

                    <div className="date" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <p style={{color: 'white', fontStyle: 'italic'}}>Apr 2020 - Dec 2021</p> <br />
                        <h2 style={{fontSize: '25px', lineHeight: '30px'}}>Frontend Website Development</h2>
                    </div>

                    <div className="edu-name" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <h4 className="p1">Techrity</h4> <br />
                        <p>A 28-week course designed to cover all aspects of full-stack development.</p> 
                    </div>

                </div>

            </div>

        </section>

        <Footer />

    </div>
  )
}

export { About }