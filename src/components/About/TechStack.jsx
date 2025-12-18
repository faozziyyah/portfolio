//import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiFlask
} from 'react-icons/si'

const techStack = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Flask', icon: SiFlask },
  { name: 'Django', icon: SiDjango },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
]

function TechStack() {
  return (
    <main className="grid grid-cols-4 gap-4">

      {techStack.map(({ name, icon: Icon }) => (
        <div key={name} className="flex flex-col items-center gap-2 border-2 border-[#646cff] shadow-md rounded-md py-2">
          <Icon size={40} />
          <p className="text-sm">{name}</p>
        </div>
      ))}

    </main>
  )
}

export {TechStack}