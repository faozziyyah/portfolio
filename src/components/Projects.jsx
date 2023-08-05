//import React from 'react'
//import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card";
import photo from '../assets/screenshot.png'
import photo1 from '../assets/screenshot1.png'
import photo2 from '../assets/screenshot2.png'
import photo3 from '../assets/screenshot3.png'

const projects = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      img: photo,
      repolink: "http://github.com",
      livelink: "http://",
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      img: photo1,
      repolink: "http://github.com",
      livelink: "http://",
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      img: photo2,
      repolink: "http://github.com",
      livelink: "http://",
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      img: photo3,
      repolink: "http://github.com",
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
    
    <div>

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
                  livelink={project.livelink}
                  repolink={project.repolink}
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