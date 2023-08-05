//import { Link } from "react-router-dom";
//import Footer from 'rsuite/Footer';
//import pageLogo from "../assets/Group 3850.png"
//import instaIcon from "../assets/Group 3860.png"
//import fbIcon from "../assets/Group 3861.png"
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

export default function Footer() {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <section className="footer">

      <div className="footertop">

        <p>
          <PhoneIcon color="primary" className="" sx />
          <a href="tel:+2348156128168" style={{textDecoration: "none"}}> +234 81561 28168 </a>
        </p>

        <p>
          <EmailIcon color="primary" className="" sx />
          <a href="mailto:omowunmidaud1@gmail.com" style={{textDecoration: "none"}}> omowunmidaud1@gmail.com </a>
        </p>

        <p>
          <PlaceIcon color="primary" className="" sx />
          <span className=""> Ogun State, Nigeria </span>
        </p>

      </div>

      <div className="footerbottom">

        <p>Designed and Developed by Faoziyyah Daud</p>
       
        <p>Copyright © {year}</p>

      </div>

    </section>
  )
}
