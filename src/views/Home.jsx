import React, { useState } from 'react'

function Home() {
    const [skills, setSkills] = useState([
        {name: "React", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Front-end"},
        {name: "Python", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Back-end"},
        {name: "C++", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", category: "Software"},
        {name: "MongoDB", iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "NoSQL"}
    ])

  return (
    <div className="contents">
      <section id="mainSection" className="bottom_divider grid-row">
          <h1>Denys Yepik</h1>
          <p>Application & Software development</p>
      </section>
      <section id="experience" className="bottom_divider grid-row">
          <h2 className="title">Experience</h2>
          <ul className="list">
              <li>2023-now:<br/>Network Engineering</li>
              <li>2022:<br/>“Common” project</li>
          </ul>
      </section>
      <section id="mission" className="bottom_divider grid-row">
          <h2 className="title">Mission</h2>
          <p>Simplify routine, Improve education, Connect people - all that using soft & hard skills</p>
      </section>
      <section id="skills" className="bottom_divider grid-row">
          <h2 className="title">Skills</h2>
          <ul className="skill_list list">
            {skills.map((skill, id) => (
                <li className="skill_item">
                    <span className="prog_lang">
                        <span className="icon">
                            <img src={skill.iconURL} alt={`${skill.name} icon`} />
                        </span>
                        <span>{skill.name}</span>
                    </span>
                    <span>{skill.category}</span>
                </li>
            ))}
          </ul>
      </section>
    </div>
  )
}

export default Home