//import { useState } from 'react'
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

        <img src={logo} alt="" id="logo" />

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
            
      <Content className='main'>

        <div className="navbar1" style={{width: '90%', margin: 'auto', marginTop: '5px'}}>

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
      
        <img src={myself} alt="home pic" style={{borderRadius: "50%", width: '30%', marginBottom: '2em', height: '150px'}} id="pic1" />

        <article className="pattern-dots-md red text-pattern max-w-20pc overflow-visible">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I&rsquo;M
                <strong className="blue"> Faoziyyah</strong>, <br />
                <strong className="main-name"> Web Developer.</strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <Type />
              </div>

              <div className="btns">

                <Link to='/about' className='btnlink' style={{textDecoration: "none"}}>
                  <button className='button'>About</button>
                </Link>
                <Link to='/projects' className='btnlink' style={{textDecoration: "none"}}>
                  <button className='btn'>Projects</button>
                </Link>
                
              </div>

        </article>
      
        <img src={myself} alt="home pic" style={{borderRadius: "50%"}} id="pic2" />

      </Content>

    </section>
  )
}
