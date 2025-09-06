import LogoSvg from "../assets/svg/logoSvg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-nav p-0">
      <div className="container">
        <div className="w-100 d-flex justify-content-between">
          <a className="" href="#">
            <LogoSvg />
          </a>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse menu" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item text-center text-sm">
              <a className="nav-link" aria-current="page" href="#">
                About me
              </a>
            </li>
            <li className="nav-item text-center text-sm">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item text-center text-sm">
              <a className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item text-center text-sm">
              <a className="nav-link">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
