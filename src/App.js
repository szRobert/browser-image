import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* CSS-s */
import './css/reset.css';
import './css/base.css';
import './css/mob.css';
/* .... */
import './css/hig.css';
/* icons */
import burger from './img/burger.png';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className='toolbar-nav'> 
          <h1 className='title'>BrowserImage</h1>
          <a onClick='' className=''><img id='toolbar-menu--burger' src={burger} /></a>
          <ul className='toolbar-menu'>
            <li><button className='toolbar-menu--button' onClick=''>Open</button></li>
            <li><button className='toolbar-menu--button' onClick=''>Save</button></li>
          </ul>
        </div>

        <div className='functions-nav'>
          <ul className='functions-menu'>
            <li><button className='functions-menu--button' onClick=''>Rotate</button></li>
            <li><button className='functions-menu--button' onClick=''>Mirroring</button></li>
            <li><button className='functions-menu--button' onClick=''>Effects</button></li>
          </ul>
        </div>

        <div className='workspace-box'>
          <canvas id='mycanvas'> Ez itt egy canvas! </canvas>
        </div>

      </div>
    );
  }
}

export default App;
