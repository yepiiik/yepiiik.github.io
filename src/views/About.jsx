import React, { useCallback, useContext, useEffect } from 'react'
import { MainContext } from '../config/base';

function About() {
  const siteContent = useContext(MainContext);

  return (
    <div className='container snapstart'>
      <img className="about-picture" src={siteContent['about-picture']?.['src']} alt={siteContent['about-picture']?.['alt']} />
      <section id='aboutContent' className='bottom_divider'>
        <h2 className='about-title'>{siteContent['about-title']?.['content']}</h2>
        <p className='about-description'>{siteContent["about-description"]?.['content']}</p>
      </section>
    </div>
  )
}

export default About