//import React from 'react'
import { FaReact } from 'react-icons/fa';
import { BiLogoRedux, BiLogoFlask, BiLogoDjango } from "react-icons/bi";
import NextImage from '../../assets/nextdotjs.svg'

function TechStack() {
  return (
    <main className="icons">

        <div className="tech-icons">
        <ion-icon name="logo-html5"></ion-icon>
			<p>HTML</p>
        </div>

        <div className="tech-icons">
        <ion-icon name="logo-css3"></ion-icon>
			<p>CSS</p>
        </div>

        <div className="tech-icons">
        <ion-icon name="logo-javascript"></ion-icon>
			<p>JavaScript</p>
        </div>

        <div className="tech-icons">
			<FaReact />
			<p>ReactJs</p>
        </div>

        <div className="tech-icons">
			<BiLogoRedux />
			<p>Redux</p>
        </div>

        <div className="tech-icons">
        <img src={NextImage} style={{color: '#666666'}} />
			<p>NextJs</p>
        </div>

        <div className="tech-icons">
			<BiLogoFlask />
			<p>Flask</p>
        </div>

        <div className="tech-icons">
			<BiLogoDjango />
			<p>Django</p>
        </div>

    </main>
  )
}

export {TechStack}