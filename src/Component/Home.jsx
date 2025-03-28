import "./Home.css";
import resume from "../Assets/Prakash Baskar_page-0001.jpg";

const Home = () => {
  return (
    <div className="home-container"  id="Home">
      {/* Profile Image */}
      <img 
        src="https://via.placeholder.com/150" 
        // alt="Prakash" 
        className="profile-image"
      />
      
      {/* Name & Title */}
      <h1 className="name">Prakash</h1>
      <h2 className="title">Frontend Developer</h2>

      {/* Short Bio */}
      <p className="bio">
        Passionate frontend developer with expertise in <strong>React, Redux, and modern UI frameworks</strong>. 
        Building responsive and interactive web applications.
      </p>

      {/* Buttons */}
      <div className="button-group">
        {/* Download CV Button */}
        <a href={resume} download="Prakash Baskar.pdf" className="cv-button">
          Download CV
        </a>

        {/* LinkedIn Profile Button */}
        <a 
          href="https://www.linkedin.com/in/prakash-baskar-b2a5b32b8/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default Home;
