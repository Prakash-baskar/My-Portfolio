import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footerbody d-flex flex-column align-items-center text-center py-4 position-relative">
      <p className="mb-3">&copy; All rights reserved by @prakash_baskar</p>

      <div className="d-flex gap-3">
  <a
    href="https://www.linkedin.com/in/prakash-baskar-b2a5b32b8/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white"
    aria-label="LinkedIn"
  >
    <i className="fab fa-linkedin fa-lg"></i>
  </a>
  <a
    href="https://github.com/Prakash-baskar"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white"
    aria-label="GitHub"
  >
    <i className="fab fa-github fa-lg"></i>
  </a>
</div>


     
      <a href="#Home" className="arrow-icon">
        <ArrowUp size={28} />
      </a>
    </footer>
  );
};

export default Footer;
