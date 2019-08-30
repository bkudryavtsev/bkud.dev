import React, { Component } from 'react'
import Charm from '../Charm/Charm'
import Summary from '../Summary/Summary'

import './app.css'

class App extends Component {
  componentDidMount() {
    console.log(`%c
      \)_\(
     ~° °~__ ___
      \`*\´   \´   ==
        \\ ,---| /
        ||    ||    
        ^^    ^^`, 'font-family:monospace')
  }

  render() {
    return(
      <div className='container'>
        <Summary />
        <Charm cellWidth={64} numCells={8} />
      </div>
    )
  }
}

export default App