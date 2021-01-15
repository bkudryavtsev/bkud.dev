import React, { Component } from 'react'

import LinkedInIcon from './assets/linkedin.svg'
import EmailIcon from './assets/email.svg'
import GithubIcon from './assets/github.svg'

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
          I am a Computer Science student at the University of Victoria
          passionate about building elegant and efficient applications.
        </p>
        <p style={{ textAlign: 'left' }}>
          <span className="light">
            Vancouver, BC
          </span>
        </p>
        <div className="social">
          <a href="https://www.linkedin.com/in/bkudryavtsev/">
            <img src={LinkedInIcon} alt="Linkedin" />
          </a>
          <a href="mailto:boriskk.work@gmail.com">
            <img src={EmailIcon} alt="Email" />
          </a>
          <a href="https://github.com/bkudryavtsev">
            <img style={{
              paddingTop: '3px',
              width: '56px'
            }} src={GithubIcon} alt="Github" />
          </a>
        </div>
      </div>
    )
  }
}

export default App
