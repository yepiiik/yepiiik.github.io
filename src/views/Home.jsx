import React, { useState, useEffect } from 'react'
import { publicProjects, skills } from '../config/base'

function Home() {
    return (
        <>
            <div className="container main-container">
                <section id="mainSection" className="bottom_divider grid-row">
                    <h1>Denys Yepik</h1>
                    <p>Application & Software development</p>
                </section>
            </div>
            <div className="container">
                <section id="experience" className="bottom_divider grid-row">
                    <h2 className="title">Public Porjects</h2>
                    <ul className="list">
                        {publicProjects.map((project, id) => (
                            <li key={id}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </li>
                        ))}
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
        </>
    )
}

export default Home