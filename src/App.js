import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* CSS-s */
import './css/reset.css';
import './css/mobile.css';
import './css/tablet.css';
import './css/desktop.css';
/* icons */
import burger from './img/burger.png';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className='toolbar-nav'> 
          <h1 className='title'>BrowserImage</h1>
          <a onClick='' className='toolbar-nav--burger-button'><img id='toolbar-nav--burger' src={burger} /></a>
          <ul className='toolbar-menu visible'>
            <li><a className='toolbar-menu--button' onClick=''>Open</a></li>
            <li><a className='toolbar-menu--button' onClick=''>Save</a></li>
          </ul>
        </div>

        <div className='workspace-box'>
          <canvas id='mycanvas'> Ez itt egy canvas! </canvas>
        </div>

        <div className='functions-nav'>
          <ul className='functions-menu'>
            <li><a className='functions-menu--button' onClick=''>Rotate</a></li>
            <li><a className='functions-menu--button' onClick=''>Mirroring</a></li>
            <li><a className='functions-menu--button' onClick=''>Effects</a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
