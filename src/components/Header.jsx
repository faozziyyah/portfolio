import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 p-[2px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-cyan-400 group-hover:text-white transition-colors">
              FD
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg text-white leading-none tracking-tight">
              Faoziyyah Daud
            </h1>
            <span className="text-xs text-indigo-400 font-medium code-font">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors">About & Experience</Link>
          <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
        </nav>

        {/* Social Icons & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 border-r border-slate-800 pr-4 text-slate-400">
            <a href="https://github.com/faozziyyah" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
              <GitHubIcon fontSize="small" />
            </a>
            <a href="https://linkedin.com/in/yourtechnurse" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" title="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="https://twitter.com/your_technurse" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" title="Twitter">
              <TwitterIcon fontSize="small" />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1B0Lk-3dYfOzojy1-mUjELfTRX5zaCKF3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-md shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
          >
            Resume PDF
          </a>
        </div>

      </div>
    </header>
  );
}
