import Header from '../Header';
import Footer from '../Footer';
import techIllustration from '../../assets/pic.svg';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function About() {

  const experiences = [
    {
      role: "Senior FullStack Engineer",
      company: "XpressAccessData Solutions",
      period: "June 2024 – Present",
      points: [
        "Revamped the user interface of a health-tech platform using React and Next.js, improving usability by 90% through streamlined design, responsive layouts, and enhanced user workflows.",
        "Integrated core healthcare services including appointment scheduling, patient record management, and telemedicine features connecting React/Next.js frontends with Django Rest Framework APIs.",
        "Developed secure authentication and role-based access systems with Django and JWT, ensuring HIPAA compliance for sensitive medical data.",
        "Optimized Next.js (SSR/SSG) rendering and backend query performance in Django, reducing page load times under high concurrent usage."
      ]
    },
    {
      role: "Lead Software Engineer — EdTech Systems (i-eSchool)",
      company: "I-eSchool",
      period: "2023 – 2024",
      points: [
        "Architected and developed the i-eSchool multi-role web portal ecosystem (Management, Tutor, and Parent Portals) using React, TypeScript, Fastify, and PostgreSQL.",
        "Integrated Microsoft Graph API for automated Microsoft Teams meeting scheduling, attendance tracking, and calendar synchronization across tutors and students.",
        "Implemented secure direct debit payment processing workflows using GoCardless and automated email communication dispatch via Resend API.",
        "Designed and maintained normalized PostgreSQL database schemas, complex relations, and Fastify RESTful APIs with Swagger/OpenAPI documentation."
      ]
    },
    {
      role: "Software Engineer",
      company: "2geda",
      period: "October 2022 – March 2024",
      points: [
        "Implemented core features of a hotel booking platform with React, Next.js, and Django Rest Framework, including room availability views, reservation management, and booking confirmations.",
        "Developed real-time chat functionality using WebSockets and integrated notification systems to improve user engagement.",
        "Designed and integrated e-commerce features (product catalogs, shopping carts, order processing) combining React frontends with Django APIs.",
        "Implemented secure payment workflows with third-party APIs (Stripe, PayPal), ensuring PCI compliance and reducing response times by 40%."
      ]
    },
    {
      role: "FullStack Engineer",
      company: "Synercom Group",
      period: "March 2021 – July 2022",
      points: [
        "Led the development and deployment of scalable full-stack web applications using React, Next.js, and Django Rest Framework (DRF).",
        "Architected and maintained relational databases with PostgreSQL and MySQL, ensuring high availability and query performance.",
        "Designed and implemented containerized microservices with Docker, streamlining development workflows across environments.",
        "Mentored junior developers on full-stack best practices and pair programming."
      ]
    }
  ];

  const education = [
    {
      title: "Diploma in Backend Engineering",
      institution: "AltSchool Africa, Lagos, Nigeria",
      period: "April 2022 – April 2023"
    },
    {
      title: "BNSc in Nursing Science",
      institution: "Olabisi Onabanjo University, Ago-Iwoye, Nigeria",
      period: "October 2014 – November 2019"
    }
  ];

  const skillCategories = [
    {
      category: "Frontend & Languages",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Python", "HTML5/CSS3", "Git"]
    },
    {
      category: "Backend & Frameworks",
      skills: ["Django / DRF", "Fastify", "FastAPI", "Flask", "Node.js / Nest.js", "REST APIs", "WebSockets"]
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "AWS", "Digital Ocean", "CI/CD Pipelines", "GitHub Actions", "Linux / Bash", "Kubernetes"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 bg-gradient-glow flex flex-col justify-between">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">

        {/* PAGE HEADER */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About & <span className="text-gradient">Professional Experience</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Software Engineer with proven experience designing, building, and deploying production-grade applications across health-tech, e-commerce, and enterprise environments.
          </p>
        </div>

        {/* PROFILE SUMMARY WITH NON-HUMAN TECH ILLUSTRATION */}
        <section className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Non-human Tech Vector Asset */}
            <div className="md:col-span-4 flex justify-center">
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl">
                <img
                  src={techIllustration}
                  alt="Non-Human Tech Illustration"
                  className="w-full max-w-xs h-auto"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">Profile</h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Experienced Software Engineer skilled in building secure, scalable, and high-performance web applications using React, Next.js, Django, and Node.js. Proficient in designing responsive frontends, developing robust RESTful APIs, and integrating third-party services to deliver seamless end-to-end solutions.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Adept at database design and optimization (PostgreSQL, MySQL, MongoDB), containerization with Docker, and CI/CD pipelines to ensure efficient and reliable deployments. Known for improving application performance, enhancing user experience, and collaborating across teams to deliver impactful products at scale.
              </p>
            </div>

          </div>
        </section>

        {/* EMPLOYMENT HISTORY */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <WorkIcon className="text-indigo-400" />
            <h2 className="text-3xl font-bold text-white">Employment & Key Project Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-indigo-400 font-medium text-sm">{exp.company}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-cyan-300 code-font">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-slate-300 text-sm">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircleOutlineIcon fontSize="small" className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white">Skills & Competencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 border-b border-slate-800 pb-2">
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.skills.map((sk, sIdx) => (
                    <li key={sIdx} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {sk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <SchoolIcon className="text-indigo-400" />
            <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-2">
                <span className="text-xs text-indigo-400 code-font font-semibold">{edu.period}</span>
                <h3 className="text-lg font-bold text-white">{edu.title}</h3>
                <p className="text-sm text-slate-400">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export { About };