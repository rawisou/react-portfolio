import React from 'react'
import './styles/Header.css'

const Header = () => {
  return (
    <header>
      <div class="header__linked-icons">
        <a href="https://www.linkedin.com/in/rawisara-saman-566b3121b/">
          <img src="./images/linkedin-header.svg" alt="Linkedin" />
        </a>
        <a href="https://github.com/rawisou">
          <img src="./images/github-header.svg" alt="Github" />
        </a>
        <a href="https://www.frontendmentor.io/profile/rawisou">
          <img src="./images/frontendmentor-header.svg" alt="Frontend mentor" />
        </a>
      </div>
      <div class="header__text">
        <h1>PORTFOLIO: RAWISARA SAMAN</h1>
        <h2>Frontend developer</h2>
        <div class="header__text--span">
          <p>+ ecommerce specialist</p>
          <p>+ fraud analyst</p>
        </div>
      </div>
      <div class="header__profile-pic__container">
        <img class="header__profile-picture--picture" src="./images/profile-pic.svg" alt="Rawisara Saman profile" />
      </div>
    </header>
  )
}

export default Header