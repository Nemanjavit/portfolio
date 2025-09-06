import person from "../assets/person2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero">
      <div className="shape"></div>
      <div className="overlay"></div>
      <div className="container hero-container">
        <img src={person} className="hidden-img" alt="person" />
        <img src={person} className="profile-img" alt="person" />
        <div className="text-content">
          <div className="d-flex flex-column info">
            <span className="text-xl fw-bold">Hi, I am</span>
            <span className="text-xxl fw-bold">Nemanja Vit</span>
            <span className="text-md fw-bold">Front End Developer</span>
          </div>
          <div className="social">
            <a
              className=""
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Nemanjavit"
            >
              <FaGithub className="social-icon" size={25} />
            </a>
            <a
              className=""
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/nemanjavit/"
            >
              <FaLinkedin className="social-icon" size={25} />
            </a>
            <a
              className=""
              rel="noreferrer"
              href="mailto:vitnemanja3@gmail.com"
              target="_blank"
            >
              <MdAlternateEmail className="social-icon" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
