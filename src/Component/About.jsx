import "./About.css"; // Import the CSS file

const About = () => {
  return (
   <div id="About">
     <div  className="about-container pt-5">
      <h2 className="about-title pt-5">About</h2>
      <div className="profile-section">
        {/* <img
          src="https://via.placeholder.com/150" // Replace with your profile image
          alt="Prakash Baskar"
          className="profile-image"
        /> */}
        <h1 className="profile-name">Prakash Baskar</h1>
        <h2 className="profile-title">React Developer | Frontend Developer</h2>
      </div>

      {/* About Description */}
      <p className="about-description">
        I am a skilled <strong>React Developer</strong> with <strong>2 years of experience</strong> in building 
        scalable, efficient, and user-friendly web applications. Passionate about crafting seamless UI/UX 
        experiences, I specialize in <strong>React.js, Redux, and modern frontend technologies</strong>.
      </p>

      {/* Info Section */}
      <div className="info-section">
        <p><span>🎓 Degree:</span> Bachelor of Computer Applications (BCA)</p>
        <p><span>📞 Phone:</span> +91 9384418760</p>
      </div>

      {/* Social Links */}
      <div className="button-container">
        <a href="https://www.linkedin.com/in/prakash-baskar-b2a5b32b8/" target="_blank" rel="noopener noreferrer" className="btn linkedin">
          🔗 LinkedIn
        </a>
        <a href="mailto:prakashprakas2000@gmail.com" className="btn email">
          📧 Email Me
        </a>
      </div>
    </div>
   </div>
  );
};

export default About;

