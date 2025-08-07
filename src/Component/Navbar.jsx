import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="navbar sticky-top">
      <div className="container">
        <div className="brand">Prakash Baskar</div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger"  onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars"></i>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links  ${isOpen ? "active" : ""}`}>
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
            href="#Services"
            onClick={(e) => handleScroll(e, "Services")}
            className="custom-link"
          >
            Services
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
