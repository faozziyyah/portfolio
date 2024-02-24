import { Link } from "react-router-dom";
//import CogIcon from '@rsuite/icons/legacy/Cog';
import FolderIcon from '@mui/icons-material/Folder';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/logo.png'

// eslint-disable-next-line react/prop-types
const CustomNavbar = () => {

    return (
      <div className="navbar" style={{width: '90%', margin: 'auto', marginTop: '5px',}}>
        
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
    );
  };

export default CustomNavbar
