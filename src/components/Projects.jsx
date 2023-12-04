//import React from 'react'
//import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card";
import photo from '../assets/screenshot.png'
import photo1 from '../assets/screenshot1.png'
import photo2 from '../assets/screenshot2.png'
import photo3 from '../assets/screenshot3.png'
import photo6 from '../assets/screenshot4.png'
import photo4 from '../assets/screenshot6.png'
//import photo7 from '../assets/screenshot7.png'
import photo8 from '../assets/Desktop7.png'
import photo5 from '../assets/screenshot9.png'

const projects = [
    {
      title: "SDProctor",
      description: "A fullstack exam proctoring application built with ReactJs, API integration",
      img: photo8,
      repolink: "https://github.com/faozziyyah/sdproctor",
      livelink: "http://",
    },
    {
      title: "Edublog",
      description: "A fullstack crud application built with Django, jinja2 and Bulma CSS",
      img: photo,
      repolink: "https://github.com/faozziyyah/django-blog-app",
      livelink: "http://",
    },
    {
      title: "Weather App",
      description: "A weather application built with react and openweather API 🔥️",
      img: photo5,
      repolink: "https://github.com/faozziyyah/react-weather-app",
      livelink: "https://faozziyyah.github.io/react-weather-app/",
    },
    {
      title: "EMS",
      description: "E-Commerce application built with Django, jinja2 and Bulma CSS and paystack integration 🔥️",
      img: photo1,
      repolink: "https://github.com/faozziyyah/django-ecommerce-app",
      livelink: "http://",
    },
    {
      title: "Keeper App",
      description: "A note management app built with react and material UI",
      img: photo1,
      repolink: "https://github.com/faozziyyah/keeper-app",
      livelink: "https://faozziyyah.github.io/keeper-app/",
    },
    {
      title: "EventsBrits",
      description: "Events management system to discover unique events and activities built with Django, Jinja template and Bootstrap",
      img: photo2,
      repolink: "https://github.com/faozziyyah/events-app",
      livelink: "http://",
    },
    {
      title: "E-Millenial Store",
      description: "E-Commerce application built with React, Redux and Seerbit payment integration 🔥️",
      img: photo4,
      repolink: "https://github.com/faozziyyah/E-Millenial-store",
      livelink: "https://faozziyyah.github.io/E-Millenial-store/",
    },
    {
      title: "Edulab",
      description:
        "A student portal application for managing students' details built with flask, jinja2 and Bootstrap",
      img: photo3,
      repolink: "https://github.com/faozziyyah/Edulab-student-portal",
      livelink: "http://",
    },
    {
      title: "Scissors",
      description: "URL shortener with QR code generator built with flask",
      img: photo6,
      repolink: "https://github.com/faozziyyah/url-shortener",
      livelink: "http://",
    },

  ];

function Projects() {

    /*const [ projects, setprojects ] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/projects/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        }).then(response => response.json())
        .then(response => setprojects(response))
        .catch(error => console.log(error))
    }, []) */

  return (
    
    <div className="projects">

        <Header />

		<h1 className="project-heading"> My Recent <strong className="blue">Works </strong> </h1>
		<p style={{ color: "white" }}> Here are a few projects I&rsquo;ve worked on recently.</p>

        <div className="layout">

              {projects.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  repolink={project.repolink}
                  livelink={project.livelink}
                  //imageSrc={project.getImageSrc()}
                />
              ))}

            {/*{projects.map((project, id) => {
                return (

                    <div key={id} className="project">

                        <img src={project.image} alt='' className="image" />

                        <div className="extra">

                            <h3 className="text">{project.title}</h3>
                            <p className="text">{project.description}</p>
                            <p className="text">{project.technology}</p>
                            

                        </div>

                    </div>
                
                )
            })}*/}

        </div>

        <Footer />

    </div>
  )
}

export { Projects }