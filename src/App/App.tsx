import React, { Component } from 'react'
import Charm from '../Charm/Charm'
import Summary from '../Summary/Summary'

import './app.css'

class App extends Component {
  componentDidMount() {
    console.log(`
      \)_\(
     ~° °~__ ___
      \`*\´   \´   ==
        \\ ,---| /
        ||    ||    
        ^^    ^^`)
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