import React from 'react'
import './styles/ForMore.css'

const ForMore = () => {
  return (
    <section className='odd to-center'>
      <div className="section--h3">
        <h3>FOR MORE</h3>
      </div>
      <div className="for-more__card--icons">
        <div>
          <a href="https://www.linkedin.com/in/rawisara-saman-566b3121b/">
            <img src="./images/linkedin.png" alt="Linkedin" />
            <p>LINKEDIN</p>
          </a>
        </div>
        <div>
          <a href="https://github.com/rawisou">
            <img src="./images/github.png" alt="Gitub" />
            <p>GITHUB</p>
          </a>
        </div>

        <div>
          <a href="https://stackoverflow.com/users/17854498/rawisara-saman">
            <img src="./images/stackoverflow.png" alt="StackOverflow" />
            <p>STACK</p>
            <p>OVERFLOW</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ForMore