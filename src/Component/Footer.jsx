import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footerbody d-flex flex-column align-items-center  text-center py-4">
      <p className="mb-3">&copy; All rights reserved by @prakash_baskar</p>

     
      <div className="d-flex gap-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/prakash-baskar-b2a5b32b8/" target="_blank" rel="noopener noreferrer" className="text-white">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
