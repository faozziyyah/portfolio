//import React from 'react'
import { BiLogoFlask } from "react-icons/bi";
import NextImage from '../../assets/nextdotjs.svg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import django from '../../assets/django.png'
import typescript from '../../assets/typescript.png'
import nodejs from '../../assets/nodejs.png'
import express from '../../assets/express.png'

function TechStack() {
  return (
    <main className="icons">

        {/*<div className="tech-icons">
        <img src={html} />
			<p>HTML</p>
        </div>

        <div className="tech-icons">
        <img src={css} />
			<p>CSS</p>
        </div>*/}

        <div className="tech-icons">
        <img src={js} />
			<p>JavaScript</p>
        </div>

      <div className="tech-icons">
        <img src={typescript} />
			<p>TypeScript</p>
        </div>

        <div className="tech-icons">
        <img src={react} />
			<p>ReactJs</p>
        </div>

        <div className="tech-icons">
        <img src={redux} />
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
        <img src={django} />
			<p>Django</p>
        </div>

        <div className="tech-icons">
        <img src={nodejs} />
			<p>Node.Js</p>
        </div>

        <div className="tech-icons">
        <img src={express} />
			<p>Express Js</p>
        </div>

    </main>
  )
}

export {TechStack}