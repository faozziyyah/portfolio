import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem  } from 'react-pro-sidebar';
import { Content } from 'rsuite';
import Type from "./Type";
import myself from '../../assets/myself.jpg'
import logo from '../../assets/logo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';


export default function IndexPage() { 

  return (
    <section className="show-container">

      <Sidebar backgroundColor="#1b1c54" width="5%" id="sidebar">

        <Menu style={{marginTop: '4em'}}> 
          
          <MenuItem
            component={<Link to="/about" className="link" />}
            icon={<PersonIcon />}
          >
          </MenuItem>
          
          <MenuItem
            component={<Link to="/projects" className="link" />}
            icon={<WorkIcon />}
          >
          </MenuItem>
          
          <MenuItem
            component={<Link to="/projects" className="link" />}
            icon={<EmailIcon />}
          >
          </MenuItem>

        </Menu>

        <Menu style={{marginTop: '4em'}}>
          
          <MenuItem
            component={<Link to="https://twitter.com/your_technurse" className="link" />}
            icon={<TwitterIcon />}
          >
          </MenuItem>
          
          <MenuItem
            component={<Link to="https://linkedin.com/in/yourtechnurse" className="link" />}
            icon={<LinkedInIcon />}
          >
          </MenuItem>
          
          <MenuItem
            component={<Link to="https://github.com/faozziyyah" className="link" />}
            icon={<GitHubIcon />}
          >
          </MenuItem>

        </Menu>

      </Sidebar>
            
      <Content className='main flex justify-around items-center h-[100vh] m-auto text-left'>

        <div className="flex justify-between items-center md:hidden w-[90%] m-auto mt-[5px]">

          <Link className="" to='/' style={{width: "15%"}}> 
            <img src={logo} alt="" id="headerlogo" style={{width: '100%'}} />
          </Link>

          <nav style={{display: 'flex', justifyContent: 'space-between', width: '50%'}}>

            <Link className="" to='/about'> <PersonIcon /> </Link>
            <Link className="" to='/projects'> <FolderIcon /> </Link>
            <Link className="" to='https://twitter.com/your_technurse'> <TwitterIcon /> </Link>
            <Link className="" to='https://linkedin.com/in/yourtechnurse'> <LinkedInIcon /> </Link>
            <Link className="" to='https://github.com/faozziyyah'> <GitHubIcon /> </Link>

          </nav>

        </div>
      
        <img src={myself} alt="home pic" className="rounded-full w-[30%] mb-[2em] h-[150px]" id="pic1" />

        <article className="pattern-dots-md red text-pattern max-w-20pc overflow-visible">

              <h1 className="text-center md:text-left text-[30px]">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="text-center md:text-left text-[30px]">
                I&rsquo;M
                <strong className="text-[#646cff]"> Faoziyyah</strong>, <br />
                <strong className="main-name"> Software Engineer.</strong>
              </h1>

              <div className="text-left">
                <Type />
              </div>

              <p className="mt-4">
                <EmailIcon color="primary" className="" sx />
                <a href="mailto:omowunmidaud1@gmail.com" style={{textDecoration: "none"}}> omowunmidaud1@gmail.com </a>
              </p>

              <div className="flex justify-between items-center mt-4">

                <Link to='/about' className='' style={{textDecoration: "none"}}>
                  <button className='button'>About</button>
                </Link>
                <Link to='/projects' className='' style={{textDecoration: "none"}}>
                  <button className='btn'>Projects</button>
                </Link>
                
              </div>

        </article>
      
        <img src={myself} alt="home pic" className="rounded-full hidden md:block" />

      </Content>

    </section>
  )
}
