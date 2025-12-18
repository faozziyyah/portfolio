//import React from 'react'
//import { useEffect, useState } from "react"
import Header from "./Header"
import Card from "./Card";
import photo from '../assets/screenshot.png'
import photo1 from '../assets/screenshot1.png'
import photo2 from '../assets/screenshot2.png'
import photo3 from '../assets/screenshot3.png'
import photo6 from '../assets/screenshot4.png'
import photo4 from '../assets/screenshot6.png'
import photo7 from '../assets/screenshot7.png'
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
      title: "Pizza Ordering App",
      description: "A fullstack app built with NextJs and MongoDB",
      img: photo7,
      repolink: "https://github.com/faozziyyah/pizzon",
      livelink: "https://pizzon-alpha.vercel.app/",
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

  return (
    
    <div className="projects w-[90%] m-auto mb-8">

      <Header />

		<h1 className="text-[3em] font-extrabold mb-6"> Projects </h1>

      <div className="grid grid-cols-3 gap-8">

        {projects.map((project) => (
          <Card key={project.title} title={project.title}
            description={project.description} img={project.img}
            repolink={project.repolink}
            livelink={project.livelink}
          />
        ))}

      </div>

    </div>
  )
}

export { Projects }