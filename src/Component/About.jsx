// import "./About.css"; // Import the CSS file

// const About = () => {
//   return (
//    <div id="About">
//      <div  className="about-container pt-5">
//       <h2 className="about-title pt-5">About</h2>
//       <div className="profile-section">
//         {/* <img
//           src="https://via.placeholder.com/150" // Replace with your profile image
//           alt="Prakash Baskar"
//           className="profile-image"
//         /> */}
//         <h1 className="profile-name">Prakash Baskar</h1>
//         <h2 className="profile-title">React Developer | Frontend Developer</h2>
//       </div>

//       {/* About Description */}
//       <p className="about-description">
//         I am a skilled <strong>React Developer</strong> with <strong>2 years of experience</strong> in building 
//         scalable, efficient, and user-friendly web applications. Passionate about crafting seamless UI/UX 
//         experiences, I specialize in <strong>React.js, Redux, and modern frontend technologies</strong>.
//       </p>

//       {/* Info Section */}
//       <div className="info-section">
//         <p><span>🎓 Degree:</span> Bachelor of Computer Applications (BCA)</p>
//         <p><span>📞 Phone:</span> +91 9384418760</p>
//       </div>

//       {/* Social Links */}
//       <div className="button-container">
//         <a href="https://www.linkedin.com/in/prakash-baskar-b2a5b32b8/" target="_blank" rel="noopener noreferrer" className="btn linkedin">
//           🔗 LinkedIn
//         </a>
//         <a href="mailto:prakashprakas2000@gmail.com" className="btn email">
//           📧 Email Me
//         </a>
//       </div>
//     </div>
//    </div>
//   );
// };

// export default About;

import "./About.css";
import profileImage from "../Assets/profile-removebg-preview.png"; // Add your image in Assets folder

const About = () => {
  return (
    <div id="About" className="about-grid-container">
      <div className="about-image-section">
        <img src={profileImage} alt="Prakash Baskar" className="about-profile-image" />
      </div>

      <div className="about-text-section">
        <h2 className="about-heading">About</h2>
        <p className="intro-text">
          I am a <strong>Front-End Web Developer</strong> with a strong interest in creating dynamic and
          user-friendly web solutions. My goal is to bring innovative ideas to life through frontend development.
        </p>

        <h3 className="sub-title">Front-End Developer & Web Developer</h3>
        <p className="description">
          As a Front-End Developer, I specialize in building end-to-end web applications that are both efficient and
          user-centric. With a strong foundation in frontend technologies like <strong>React</strong> and
          <strong> Redux-saga</strong>, I enjoy crafting seamless user experiences and solving real-world problems
          through clean, scalable code.
        </p>

        <div className="about-info">
          <p><strong>🌐 Website:</strong> www.example.com</p>
          <p><strong>📞 Phone:</strong> 9384418760</p>
          <p><strong>🏙️ City:</strong> Kumbakonam, Tamil Nadu</p>
          <p><strong>🎓 Degree:</strong> BCA in Computer Application</p>
          <p><strong>📧 Email:</strong> prakashprakas2000@gmail.com</p>
          <p><strong>🧑‍💻 Freelance:</strong> Available</p>
        </div>

        <p className="final-note">
          As a dedicated Front-End Developer, I take pride in crafting responsive, efficient, and user-focused web
          applications. I enjoy turning complex problems into simple, elegant solutions using modern technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
