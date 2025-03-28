import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p className="mb-3">&copy; 2025 Your Company. All rights reserved.</p>

      {/* Social Media Icons */}
      <div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
