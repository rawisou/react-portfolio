import React from 'react'

import './styles/Tech.css'

const Tech = () => {
  return (
    <section className="tech__card to-center">
      <div className="section--h3">
        <h3>TECH</h3>
      </div>
      <p>HTML, CSS, Flexbox, <span class="brick-color">JavaScript</span>, ES6, JSX, <span
        class="brick-color">React, React Hooks, Redux,</span></p>
      <p>Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.</p>
    </section>
  )
}

export default Tech