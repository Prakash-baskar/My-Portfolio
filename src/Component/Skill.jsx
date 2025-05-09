import React, { useEffect, useState } from "react";
import "./Skill.css"; 

const skills = [
  { name: "React", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "Redux", level: 75 },
  { name: "CSS", level: 90 },
  { name: "TypeScript", level: 65 },
  { name: "HTML", level: 95 },
  { name: "Bootstrap", level: 80 },
  { name: "Firebase", level: 65 },
  { name: "Jquery", level: 50},
  { name: "Ajax", level: 50 },
  { name: "GitHub", level: 80 },
 
];

const Skill = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timers = skills.map((skill, index) =>
      setTimeout(() => {
        setProgress((prev) => {
          const updatedProgress = [...prev];
          updatedProgress[index] = skill.level;
          return updatedProgress;
        });
      }, index * 300) // Delay animation for each skill
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="skill-container pt-5" id="Skill">
      <h2 className="skill-title pt-5">My Skills</h2>
      <div className="skill-grid ">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <p className="skill-name">{skill.name}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
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
