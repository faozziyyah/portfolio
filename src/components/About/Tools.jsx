//import React from 'react'
import { SiYarn, SiNpm, SiPostman, SiPostgresql, SiMysql, SiGithub, SiGit, SiFigma } from "react-icons/si";

function Tools() {
  return (
    <main className="tools">

        <div className="tech-icons">
			<SiGithub />
			<p>Github</p>
        </div>

        <div className="tech-icons">
			<SiPostman />
			<p>Postman</p>
        </div>

        <div className="tech-icons">
			<SiNpm />
			<p>npm</p>
        </div>

        <div className="tech-icons">
			<SiYarn />
			<p>yarn</p>
        </div>

        <div className="tech-icons">
			<SiGit />
			<p>git</p>
        </div>

        <div className="tech-icons">
			<SiPostgresql />
			<p>PostgreSQL</p>
        </div>

        <div className="tech-icons">
			<SiMysql />
			<p>mySQL</p>
        </div>

        <div className="tech-icons">
			<SiFigma />
			<p>Figma</p>
        </div>

    </main>
  )
}

export {Tools}