import React from "react";
import "./Service.css";
import { FaCode, FaLaptopCode, FaPalette, FaProjectDiagram, FaCloudUploadAlt, FaTachometerAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Design",
    description:
      "Creating visually stunning and user-friendly websites with a focus on modern design principles, responsiveness, and a seamless user experience across all devices.",
  },
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Specializing in building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React, ensuring exceptional user experiences across all devices.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Implementation",
    description:
      "Designing intuitive and visually appealing user interfaces while ensuring a seamless user experience by focusing on user needs, usability, and accessibility across platforms.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "API Integration",
    description:
      "Integrating seamless API connections to fetch and update data dynamically, enabling real-time experiences and smooth data interactions.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Version Control & Deployment",
    description:
      "Utilizing Git for efficient version control and deploying projects smoothly using platforms like GitHub Pages, Vercel, and Netlify.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Performance Optimization",
    description:
      "Enhancing website speed and efficiency through code optimization, lazy loading, and best practices for performance and SEO.",
  },
];

const Service = () => {
  return (
    <div id="Services" className="services-section">
      <h2 className="service-title pt-4">Services</h2>
      <p className="section-description">
        As a passionate Frontend Developer, I offer a range of services focused on crafting engaging, responsive, and user-friendly web experiences. From turning creative ideas into functional interfaces to integrating APIs and optimizing performance, I ensure each project is built with precision, creativity, and the latest technologies.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
