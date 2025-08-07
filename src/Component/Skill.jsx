import React, { useEffect, useState } from "react";
import "./Skill.css";
import { FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import { DiFirebase, DiJavascript, DiJqueryLogo } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap } from "react-icons/fa6";




const skills = [
  { name: "React", level: 90, icon: <FaReact size={17} /> },
  { name: "JavaScript", level: 90, icon: <DiJavascript size={17} /> },
  { name: "Redux", level: 90, icon: <TbBrandRedux size={17} /> },
  { name: "CSS", level: 95, icon: <FaCss3Alt size={17} /> },
  { name: "TypeScript", level: 65, icon: <BiLogoTypescript size={17} /> },
  { name: "HTML", level: 95, icon: <TiHtml5 size={17} /> },
  { name: "Bootstrap", level: 85, icon: <FaBootstrap size={17} /> },
  { name: "Firebase", level: 85, icon: <DiFirebase size={17} /> },
  { name: "Jquery", level: 85, icon: <DiJqueryLogo size={17} /> },
  // { name: "Ajax", level: 50, icon: <Zap size={17} /> },
  { name: "GitHub", level: 85, icon: <FaGithub size={17} /> },
];

const Skill = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timers = skills.map((skill, index) =>
      setTimeout(() => {
        setProgress((prev) => {
          const updated = [...prev];
          updated[index] = skill.level;
          return updated;
        });
      }, index * 200)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="skill-container pt-5" id="Skill">
      <h2 className="skill-title pt-5">My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill fade-in">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <p className="skill-name mb-1">{skill.name}</p>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill animated"
                style={{ width: `${progress[index]}%` }}
              >
                {progress[index]}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
