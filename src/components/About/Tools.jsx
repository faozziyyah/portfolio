//import React from 'react'
import { SiGithub, SiRedis, SiFirebase, SiPostman, SiNpm, SiYarn,
  SiGit, SiDigitalocean,
  SiPostgresql, SiMysql, SiLinux, SiFigma, SiDocker,
} from 'react-icons/si'

const tools = [
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'npm', icon: SiNpm },
  { name: 'Yarn', icon: SiYarn },
  { name: 'Git', icon: SiGit },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Figma', icon: SiFigma },
  { name: 'Docker', icon: SiDocker },
  { name: 'Linux', icon: SiLinux },
  { name: 'DigitalOcean', icon: SiDigitalocean },
  { name: 'Redis', icon: SiRedis },
  { name: 'Firebase', icon: SiFirebase },
]

function Tools() {
  return (
    <main className="grid grid-cols-4 gap-4">
      {tools.map(({ name, icon: Icon }) => (
        <div key={name} className="flex flex-col items-center gap-2 border-2 border-[#646cff] shadow-md rounded-md py-2">
          <Icon size={40} />
          <p className="text-sm">{name}</p>
        </div>
      ))}
    </main>
  )
}

export {Tools}