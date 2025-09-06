import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text, error);
        }
      );
  };

  return (
    <div className="contact">
      <h2 className="text-xxl fw-bold text-center contact-heading">
        Contact me
      </h2>
      <div className="row d-flex justify-content-center">
        <form
          className="px-4 col-sm-12 col-md-8 col-lg-6 col-xxl-4 "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="John Doe"
              name="from_name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
              name="from_email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-light px-6 ms-auto me-auto d-block submit"
          >
            Light
          </button>
        </form>
      </div>
      <div className="social">
        <a
          className=""
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Nemanjavit"
        >
          <FaGithub className="social-icon" size={50} />
        </a>
        <a
          className=""
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/nemanjavit/"
        >
          <FaLinkedin className="social-icon" size={50} />
        </a>
        <a
          className=""
          href="mailto:vitnemanja3@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <MdAlternateEmail className="social-icon" size={50} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
