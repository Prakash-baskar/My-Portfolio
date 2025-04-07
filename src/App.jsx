// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Navbar from "./Component/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Project from "./Component/Project";


// const App = () => {
//   return (
//     <Router>
     
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/project" element={<Project/>} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react'

import Home from './Component/Home'
import MyNavbar from './Component/Navbar'
import About from './Component/About'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Skill from './Component/Skill'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div>
      <div>
      <MyNavbar />
      < Home />
      < About />
      < Project />
      {/* < Skill /> */}
      < Contact />
      < Footer />
      </div>
    </div>
  )
}

export default App
