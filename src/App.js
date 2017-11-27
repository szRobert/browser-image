import React, { Component } from 'react'

/* Icons */
import burger from './img/burger.png'
import img from './img/bakko.png'
/* CSS-s */
import './css/reset.css'
import './css/mobile.css'
import './css/tablet.css'
import './css/desktop.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgRoute: './img/bakko.png',
            rotate: false,
            mirror: false,
            effect: false,
            open: false
        };
    }
    checktoClose(){
        if(this.state.rotate){
            this.refs.rotateB.style.display = "none";
            this.state.rotate = false;
        }
        if(this.state.mirror){
            this.refs.mirrorB.style.display = "none";
            this.state.mirror = false;
        }
        if(this.state.effect){
            this.refs.effectB.style.display = "none";
            this.state.effect = false;
        }
    }
    componentDidMount(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;

        img.onload = () => {
            ctx.drawImage(img,0,0,window.innerWidth - 100, window.innerHeight-125);
        }
    }

    render() {
    return (
      <div className="App">
          <div className='toolbar-nav'>
              <h1 className='title'>BrowserImage</h1>
              <a onClick={() => {
                  const menu = this.refs.menu;
                  if(this.state.open){
                      menu.style.display = "none";
                      this.state.open = false;
                  } else {
                      menu.style.display = "block";
                      this.state.open = true;
                  }
              }} className='toolbar-nav--burger-button'><img id='toolbar-nav--burger' src={burger} /></a>
              <ul ref='menu' id="toolbar-menu">
                  <li onClick={() => {
                      /* Here comes file open part */
                  }} className="toolbar-menu--button">Open</li>
                  <li onClick={() => {
                      /* Here comes file save part */
                  }} className="toolbar-menu--button">Save</li>
              </ul>
          </div>
          <div className='workspace-box'>
              <canvas ref='canvas' width={window.innerWidth-100} height={window.innerHeight - 125} id="mycanvas">Canvas don`t work</canvas>
              <img ref='image' src={img} className="hidden" />
          </div>
          <div className='fucntion-nav-box'>
              <div ref='rotateB' id="rotate-box">
                  <ul className="rotate-menu">
                      <li className="rotate-menu--button" onClick={()=>{

                      }}>90</li>
                      <li className="rotate-menu--button">180</li>
                      <li className="rotate-menu--button">360</li>
                  </ul>
              </div>
              <div ref='mirrorB' id="mirror-box">
                  <ul className="mirror-menu">
                      <li className="mirror-menu--button">Horizontal</li>
                      <li className="mirror-menu--button">Vertical</li>
                  </ul>
              </div>
              <div ref='effectB' id="effect-box">
                  <ul className="effect-menu">
                      <li className="effect-menu--button">Grayscale</li>
                  </ul>
              </div>
              <div className='functions-nav'>
                  <ul className='functions-menu'>
                      <li><a className='functions-menu--button' onClick={()=>{
                          const x = this.refs.rotateB;
                          if(this.state.rotate){
                              x.style.display = "none";
                              this.state.rotate = false;
                          } else {
                              this.checktoClose();
                              x.style.display = "block";
                              this.state.rotate = true;
                          }
                      }}>Rotate</a></li>
                      <li><a className='functions-menu--button' onClick={()=>{
                          const x = this.refs.mirrorB;
                          if(this.state.mirror){
                              x.style.display = "none";
                              this.state.mirror = false;
                          } else {
                              this.checktoClose();
                              x.style.display = "block";
                              this.state.mirror = true;
                          }
                      }}>Mirroring</a></li>
                      <li><a className='functions-menu--button' onClick={()=>{
                          const x = this.refs.effectB;
                          if(this.state.effect){
                              x.style.display = "none";
                              this.state.effect = false;
                          } else {
                              this.checktoClose();
                              x.style.display = "block";
                              this.state.effect = true;
                          }
                      }}>Effects</a></li>
                  </ul>
              </div>
          </div>
      </div>
    )
  }
}
export default App