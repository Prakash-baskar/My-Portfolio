import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported


const Footer = () => {
  return (
    <footer className="d-flex flex-column align-items-center bg-black text-white text-center py-4">
      <p className="mb-3">&copy;All rights reserved by @prakash_baskar</p>

      {/* Social Media Icons */}
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
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
