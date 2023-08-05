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


export default function IndexPage() { 

  return (
    <section className="show-container" style={{ display: "flex", height: "100vh" }}>

      <Sidebar backgroundColor="#1b1c54" width="5%">

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
            component={<Link to="/about" className="link" />}
            icon={<TwitterIcon />}
          >
          </MenuItem>
          
          <MenuItem
            component={<Link to="/projects" className="link" />}
            icon={<LinkedInIcon />}
          >
          </MenuItem>
          
          <MenuItem
            component={<Link to="/projects" className="link" />}
            icon={<GitHubIcon />}
          >
          </MenuItem>

        </Menu>

      </Sidebar>
            
      <Content className='main'>

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
      
        <img src={myself} alt="home pic" style={{borderRadius: "50%"}} />

      </Content>

    </section>
  )
}
