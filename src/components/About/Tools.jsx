//import React from 'react'
import mySQL from '../../assets/mysql.png'
import { SiGithub } from "react-icons/si";
import git from '../../assets/git.png'
import postman from '../../assets/postman.png'
import npm from '../../assets/npm.png'
import yarn from '../../assets/yarn.png'
import postgres from '../../assets/postgres.png'
import figma from '../../assets/figma.png'
function Tools() {
  return (
    <main className="tools">

        <div className="tech-icons">
			<SiGithub />
			<p>Github</p>
        </div>

        <div className="tech-icons">
        <img src={postman} />
			<p>Postman</p>
        </div>

        <div className="tech-icons">
        <img src={npm} />
			<p>npm</p>
        </div>

        <div className="tech-icons">
        <img src={yarn} />
			<p>yarn</p>
        </div>

        <div className="tech-icons">
        <img src={git} />
			<p>git</p>
        </div>

        <div className="tech-icons">
        <img src={postgres} />
			<p>PostgreSQL</p>
        </div>

        <div className="tech-icons">
        <img src={mySQL} />
			<p>mySQL</p>
        </div>

        <div className="tech-icons">
        <img src={figma} />
			<p>Figma</p>
        </div>

    </main>
  )
}

export {Tools}