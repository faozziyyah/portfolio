import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import techIllustration from "../../assets/pic.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';

export default function IndexPage() {

  const primarySkills = ["React.js", "Next.js", "JavaScript", "TypeScript", "Python", "Django", "FastAPI", "Node.js", "Fastify", "PostgreSQL", "MySQL", "Docker"];

  const featuredProjects = [
    {
      title: "i-eSchool Web Portal",
      desc: "Multi-portal school management system for management, tutors, and parents with React, TypeScript, Fastify, PostgreSQL, GoCardless, & MS Teams.",
      tags: ["React", "TypeScript", "Fastify", "PostgreSQL"],
      link: "https://github.com/faozziyyah"
    },
    {
      title: "SDProctor",
      desc: "Full-stack exam proctoring platform integrated with React.js and Django REST APIs.",
      tags: ["React", "Django", "Python", "REST APIs"],
      link: "https://github.com/faozziyyah/sdproctor"
    },
    {
      title: "Pizzon",
      desc: "Full-stack online pizza ordering web application with Next.js and MongoDB integration.",
      tags: ["Next.js", "MongoDB", "Tailwind", "React"],
      link: "https://pizzon-alpha.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 bg-gradient-glow flex flex-col justify-between">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          <div className="lg:col-span-7 space-y-6">

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Crafting Scalable <br />
              <span className="text-gradient">Full-Stack Systems</span> & APIs.
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong className="text-white font-semibold">Faoziyyah Daud</strong> — Software Engineer skilled in building secure, scalable, and high-performance web applications using React, Next.js, Django, Fastify, and Node.js.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {primarySkills.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:border-indigo-500/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Explore Projects
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 rounded-xl font-semibold text-sm glass-panel text-slate-200 hover:text-white hover:border-indigo-500/50 transition-all"
              >
                About & Experience
              </Link>
            </div>

          </div>

          {/* Interactive Code Window Card Visual */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-slate-700/60">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-500 code-font">engineer.py</span>
              </div>

              <pre className="code-font text-xs text-slate-300 space-y-2 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">SoftwareEngineer</span>:<br />
                  &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="text-emerald-400">&quot;Faoziyyah Daud&quot;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="text-emerald-400">&quot;Software Engineer&quot;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.stack = [<span className="text-emerald-400">&quot;React&quot;</span>, <span className="text-emerald-400">&quot;TypeScript&quot;</span>, <span className="text-emerald-400">&quot;Fastify&quot;</span>, <span className="text-emerald-400">&quot;Django&quot;</span>]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.databases = [<span className="text-emerald-400">&quot;PostgreSQL&quot;</span>, <span className="text-emerald-400">&quot;MongoDB&quot;</span>]<br /><br />
                  &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">build_solution</span>(self, requirement):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">&quot;status&quot;</span>: <span className="text-cyan-400">200</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">&quot;architecture&quot;</span>: <span className="text-emerald-400">&quot;Scalable & Enterprise Compliant&quot;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">&quot;performance&quot;</span>: <span className="text-emerald-400">&quot;Optimal&quot;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* ABOUT SUMMARY (WITH NON-HUMAN TECH ILLUSTRATION) */}
        <section className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Non-human Tech Vector Asset */}
            <div className="md:col-span-5 flex justify-center">
              <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-xl">
                <img
                  src={techIllustration}
                  alt="Tech Developer Graphic"
                  className="w-full max-w-xs h-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                About <span className="text-gradient">Faoziyyah Daud</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Experienced Software Engineer skilled in building secure, scalable, and high-performance web applications using React, Next.js, Django, Fastify, and Node.js. Proficient in designing responsive frontends, developing robust RESTful APIs, and integrating third-party services to deliver seamless end-to-end solutions.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Adept at database design and optimization (PostgreSQL, MySQL, MongoDB), containerization with Docker, and CI/CD pipelines to ensure efficient and reliable deployments. Known for improving application performance, enhancing user experience, and collaborating across teams to deliver impactful products at scale.
              </p>
              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:underline text-sm">
                  View Full Career History & Education &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              <p className="text-slate-400 text-sm mt-1">A selection of recent applications and open-source systems.</p>
            </div>
            <Link to="/projects" className="text-cyan-400 text-sm font-medium hover:underline">
              View All Projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((proj, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 border border-slate-800">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CodeIcon className="text-indigo-400" />
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <LaunchIcon fontSize="small" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{proj.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold text-white">Let&apos;s Build Something Together</h2>
            <p className="text-slate-300 text-sm">
              I am open to discuss technical opportunities, software projects, and collaboration. Get in touch via email or social networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
            <a href="mailto:omowunmidaud1@gmail.com" className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 hover:border-indigo-500/50 transition-colors">
              <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                <EmailIcon />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Direct Email</span>
                <span className="text-sm font-semibold text-white">omowunmidaud1@gmail.com</span>
              </div>
            </a>

            <a href="https://github.com/faozziyyah" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 hover:border-indigo-500/50 transition-colors">
              <div className="p-3 rounded-lg bg-indigo-500/10 text-cyan-400">
                <GitHubIcon />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">GitHub Profile</span>
                <span className="text-sm font-semibold text-white">github.com/faozziyyah</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/yourtechnurse" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 hover:border-indigo-500/50 transition-colors">
              <div className="p-3 rounded-lg bg-indigo-500/10 text-purple-400">
                <LinkedInIcon />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">LinkedIn Profile</span>
                <span className="text-sm font-semibold text-white">linkedin.com/in/yourtechnurse</span>
              </div>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
