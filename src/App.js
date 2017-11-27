import React, { Component } from 'react'
import PropTypes from 'prop-types'

/* CSS-s */
import './css/reset.css'
import './css/mobile.css'
import './css/tablet.css'
import './css/desktop.css'
/* Comps */
import Toolbar from './Components/Menus/Toolbar'
import Image from './Components/Image'
import Function from './Components/Menus/Function'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Toolbar/>
          <Image/>
          <Function/>
      </div>
    )
  }
}

export default App
