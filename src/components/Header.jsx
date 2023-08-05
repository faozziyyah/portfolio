import { Link } from "react-router-dom";
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Navbar, Nav } from 'rsuite';
import { useState } from 'react'
import logo from '../assets/logo.png'

// eslint-disable-next-line react/prop-types
const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props} style={{backgroundColor: '#213547'}}>

        <Navbar.Brand href="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%'}}>
            <img src={logo} alt="" id="headerlogo" style={{width: '30%'}} />
        </Navbar.Brand>

        <Nav onSelect={onSelect} activeKey={activeKey}>

            <Link to={'/projects'}  className=''>
                <Nav.Item eventKey="1">About</Nav.Item>
            </Link>

            <Link to={'/projects'}  className=''>
                <Nav.Item href="projects" eventKey="2">Projects</Nav.Item>
            </Link>


        </Nav>

        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>

      </Navbar>
    );
  };

export default function Header() {

    const [activeKey, setActiveKey] = useState(null);
  return (

    <CustomNavbar activeKey={activeKey} onSelect={setActiveKey} />

  )
}
