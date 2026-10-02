import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <section className="flex justify-between items-center p-6">

      <p>
        <PhoneIcon color="primary" className="" sx />
        <a href="tel:+2348156128168" style={{ textDecoration: "none" }}> +234 81561 28168 </a>
      </p>

      <p>
        <EmailIcon color="primary" className="" sx />
        <a href="mailto:omowunmidaud1@gmail.com" style={{ textDecoration: "none" }}> omowunmidaud1@gmail.com </a>
      </p>

      <p>Copyright © {year}</p>

    </section>
  )
}
