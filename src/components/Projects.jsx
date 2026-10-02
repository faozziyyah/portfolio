import Header from "./Header";
import Footer from "./Footer";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projectsList = [
  {
    title: "i-eSchool Web Portal",
    description: "Modern multi-portal school management platform for management, tutors, and parents featuring React, TypeScript, Fastify, PostgreSQL, GoCardless payments, and Microsoft Teams integration.",
    tags: ["React", "TypeScript", "Fastify", "PostgreSQL", "MS Teams", "GoCardless"],
    repolink: "https://github.com/faozziyyah",
    livelink: "#",
  },
  {
    title: "SDProctor",
    description: "A fullstack exam proctoring application built with React.js, Python, and Django REST framework API integration.",
    tags: ["React", "Django", "Python", "REST APIs"],
    repolink: "https://github.com/faozziyyah/sdproctor",
    livelink: "#",
  },
  {
    title: "Pizzon — Pizza Ordering App",
    description: "A fullstack online pizza ordering web application built with Next.js, MongoDB, and Tailwind CSS.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "React"],
    repolink: "https://github.com/faozziyyah/pizzon",
    livelink: "https://pizzon-alpha.vercel.app/",
  },
  {
    title: "E-Millennial Store",
    description: "E-Commerce application built with React, Redux, and Seerbit payment gateway integration.",
    tags: ["React", "Redux", "Seerbit", "Tailwind"],
    repolink: "https://github.com/faozziyyah/E-Millenial-store",
    livelink: "https://faozziyyah.github.io/E-Millenial-store/",
  },
  {
    title: "Edublog",
    description: "A fullstack blog and content platform built with Django, Jinja2, and Bulma CSS.",
    tags: ["Django", "Python", "Jinja2", "Bulma"],
    repolink: "https://github.com/faozziyyah/django-blog-app",
    livelink: "#",
  },
  {
    title: "Scissors — URL Shortener",
    description: "URL shortener and QR code generator backend service built with Flask and Python.",
    tags: ["Flask", "Python", "REST API", "QR Code"],
    repolink: "https://github.com/faozziyyah/url-shortener",
    livelink: "#",
  }
];

export default function Projects() {

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 bg-gradient-glow flex flex-col justify-between">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Featured <span className="text-gradient">Projects & Applications</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A showcase of full-stack web applications, RESTful services, and open-source software projects built across healthcare, education technology, and e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold code-font text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    Project 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <a href={project.repolink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Repository">
                      <GitHubIcon fontSize="small" />
                    </a>
                    {project.livelink !== "#" && (
                      <a href={project.livelink} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" title="Live Preview">
                        <LaunchIcon fontSize="small" />
                      </a>
                    )}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white leading-snug">{project.title}</h2>
                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold pt-2">
                  <a href={project.repolink} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1">
                    <GitHubIcon fontSize="inherit" /> Code Repo
                  </a>
                  {project.livelink !== "#" ? (
                    <a href={project.livelink} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                      Live Demo <LaunchIcon fontSize="inherit" />
                    </a>
                  ) : (
                    <span className="text-slate-500">Internal System</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export { Projects };