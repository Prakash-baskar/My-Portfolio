import { Link } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar sticky-top">
      <div className="container">
        <div className="brand">Prakash Baskar</div>
        <div className="nav-links">
          <a
            href="#Home"
            onClick={(e) => handleScroll(e, "Home")}
            className="custom-link"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={(e) => handleScroll(e, "About")}
            className="custom-link"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={(e) => handleScroll(e, "Projects")}
            className="custom-link"
          >
            Projects
          </a>
          <a
            href="#Skill"
            onClick={(e) => handleScroll(e, "Skill")}
            className="custom-link"
          >
            Skills
          </a>

          <a
            href="#Contact"
            onClick={(e) => handleScroll(e, "Contact")}
            className="custom-link"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
