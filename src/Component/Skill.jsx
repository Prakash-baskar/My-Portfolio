import React, { useEffect, useState } from "react";
import "./Skill.css"; 

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Redux", level: 90 },
  { name: "CSS", level: 95 },
  { name: "TypeScript", level: 65 },
  { name: "HTML", level: 95 },
  { name: "Bootstrap", level: 85 },
  { name: "Firebase", level: 70 },
  { name: "Jquery", level: 50 },
  { name: "Ajax", level: 50 },
  { name: "GitHub", level: 85 },
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
            <p className="skill-name">{skill.name}</p>
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
