import React, { Component } from 'react'

import LinkedInIcon from './assets/linkedin.png'
import EmailIcon from './assets/email.png'
import GithubIcon from './assets/github.png'
import PaperIcon from './assets/paper.png'

import './summary.css'

class App extends Component {
  render() {
    return (
      <div className="summary">
        <h1>Hello!</h1>
        <h2>
          My name is <br />
          <span id="name">Boris Kudryavtsev</span>
        </h2>
        <p>
          I am a graduating Computer Science student at the University of Victoria passionate about building beautiful and efficient applications. Excited to utilize and further develop my skills in computer science and software development alongside industry professionals.
        </p>
        <p style={{ textAlign: 'left' }}>
          <span className="light">
            Vancouver, BC
          </span>
        </p>
        <div className="social">
          <a className="item" href="/Boris_Kudryavtsev.pdf">
            <img src={PaperIcon} alt="Resume" />
            <p>Resume</p>
          </a>
          <a className="item" href="https://www.linkedin.com/in/bkudryavtsev/">
            <img src={LinkedInIcon} alt="Linkedin" />
            <p>LinkedIn</p>
          </a>
          <a className="item" href="mailto:boriskk.work@gmail.com">
            <img src={EmailIcon} alt="Email" />
            <p>Email</p>
          </a>
          <a className="item" href="https://github.com/bkudryavtsev">
            <img src={GithubIcon} alt="Github" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    )
  }
}

export default App
