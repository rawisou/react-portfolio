import React from 'react'

import './styles/Skills.css'

const Skills = () => {
  return (
    <section className='to-center flex'>
      <div className="section--h3">
        <h3>SKILLS</h3>
      </div>
      <div className="skills__card--content">
        <div className="skills__card__text-box code">
          <p className='head-text'> CODE </p>
          <p> HTML5</p>
          <p> CSS3 </p>
          <p>JavaScript ES6</p>
          <p>React</p>
          <p>Styled Components</p>
          <p>GitHub</p>
        </div>
        <div className="skills__card__text-box toolbox">
          <p className='head-text'> TOOLBOX </p>
          <p> Slack </p>
          <p> Figma </p>
          <p> Adobe Photoshop </p>
          <p> Adobe Illustrator </p>
          <p> Jira </p>
          <p> SQL </p>
          <p> Metabase </p>
          <p> Stripe </p>
        </div>
        <div className="skills__card__text-box more">
          <p className='head-text'> MORE </p>
          <p> Agile methodology </p>
          <p> Concept development </p>
          <p> Payment solutions </p>
        </div>
        <div className="skills__card__text-box upcoming">
          <p className='head-text'> UPCOMING </p>
          <p> Redux </p>
          <p> Node.js </p>
        </div>
      </div>
    </section>
  )
}

export default Skills