// import "./Home.css";
// import resume from "../Assets/Prakash Baskar_page-0001.jpg";
// // import profile from "../Assets/profile.jpg";
// const Home = () => {
//   return (
    
//     <div id="Home">
//        <div className="home-container pt-5">
//         <div className="">
//          <img 
//           //  src={profile}
//            className="profile-image-home"
//           //  alt="Prakash"
//          />
//         </div>
     
      
//       {/* Name & Title */}
//       <h1 className="name">Prakash</h1>
//       <h2 className="title">Frontend Developer</h2>

//       {/* Short Bio */}
//       <p className="bio">
//         Passionate frontend developer with expertise in <strong>React, Redux, and modern UI frameworks</strong>. 
//         Building responsive and interactive web applications.
//       </p>

//       {/* Buttons */}
//       <div className="button-group pt-1">
//         <a href={resume} download="Prakash Baskar.pdf" className="cv-button">
//           Download CV
//         </a>
//         <a 
//           href="https://www.linkedin.com/in/prakash-baskar-b2a5b32b8/" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="linkedin-button"
//         >
//           LinkedIn Profile
//         </a>
//       </div>
//     </div>
//    </div>
//   );
// };

// export default Home;

import "./Home.css";
import backgroundImage from "../Assets/hero-bg.jpg"; // Make sure to add a background image

const Home = () => {
  return (
    <div id="Home" className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-container pt-5">
        

        <h1 className="animated-name">PRAKASH</h1>
        <h2 className="animated-title">Frontend Developer & Web Developer</h2>

        <p className="animated-bio">
          Crafting seamless and responsive web experiences using <strong>React, Redux, Javascript</strong> and modern tools.
        </p>

        <div className="button-group pt-1">
          {/* <a href={resume} download="Prakash Baskar.pdf" className="cv-button">
            Download CV
          </a> */}
          {/* <a 
            href="https://www.linkedin.com/in/prakash-baskar-b2a5b32b8/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            LinkedIn Profile
          </a> */}
          <a href="#About" className="about-button">
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
