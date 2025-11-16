import React, { useState, useEffect, useCallback, useContext } from 'react'
import { MainContext, publicProjects, skills } from '../config/base'
import { db } from '../config/firebase';
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"; 


function Home() {
    const siteContent = useContext(MainContext);

    return (
        <>
            <div className="container main-container">
                <section id="mainSection" className="bottom_divider grid-row">
                    <h1 className='main-title'>{siteContent['main-title']?.['content']}</h1>
                    <p className='main-description'>{siteContent['main-description']?.['content']}</p>
                </section>
            </div>
            <div className="container">
                <section id="experience">
                    <h2 className="title">Public Projects</h2>
                    <ul className="list">
                        {publicProjects.map((project, id) => (
                            <li key={id}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <section id="mission">
                    <h2 className="title">Mission</h2>
                    <p className='mission-description' dangerouslySetInnerHTML={{ __html: siteContent["mission-description"]?.['content'] }}></p>
                </section>
                <section id="skills">
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