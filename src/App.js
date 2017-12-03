import React, { Component } from 'react';
import FileProcessor from 'react-file-processor';
import fileSave from 'react-file-download';

/* Icons */
import burger from './img/burger.png'
import imageII from './img/land.jpg'
/* CSS-s */
import './css/reset.css'
import './css/mobile.css'
import './css/tablet.css'
import './css/desktop.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageData: undefined,
            rotate: false,
            mirror: false,
            effect: false,
            open: false
        };
        this.rot = {
            deg90: false,
            deg180: false,
            deg270: false
        };
    }
    checktoClose(){
        if(this.state.rotate){
            this.refs.rotateB.style.display = "none";
            this.setState({rotate : false});
        }
        if(this.state.mirror){
            this.refs.mirrorB.style.display = "none";
            this.setState({mirror: false});
        }
        if(this.state.effect){
            this.refs.effectB.style.display = "none";
            this.setState({effect : false});
        }
    }
    handleClick(e) {this.refs.myFileInput.chooseFile();}
    handleFileSelect(e, files) {
        console.log(files);
        this.setState({
            myImage: files
        });
    }
    componentDidMount() {this.updateCanvas();}
    updateCanvas() {
        const canv = this.refs.canvas;
        const ctx = canv.getContext('2d');
        const thisImg = this.refs.img;

        thisImg.onload = () => {
            ctx.drawImage(thisImg, 0, 0, window.innerWidth - 100, window.innerHeight - 125);
        };
    }
    rotate90(){

        const canv = this.refs.canvas;
        const ctx = canv.getContext('2d');
        const thisImg = this.refs.img;
        const width = window.innerWidth-100;
        const height = window.innerHeight -125;

        ctx.save();
        ctx.clearRect(0, 0, width, height);
        ctx.rotate(Math.PI/2);
        ctx.drawImage(thisImg,0,-width+(width/7),height,height);
        ctx.restore();
    }
    rotate180(){
        const canv = this.refs.canvas;
        const ctx = canv.getContext('2d');
        const thisImg = this.refs.img;
        const width = window.innerWidth-100;
        const height = window.innerHeight -125;

        ctx.save();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width,height);
        ctx.rotate(Math.PI);
        ctx.drawImage(thisImg,0,0,width,height);
        ctx.restore();
    }
    rotate270(){
        const canv = this.refs.canvas;
        const ctx = canv.getContext('2d');
        const thisImg = this.refs.img;
        const width = window.innerWidth-100;
        const height = window.innerHeight -125;

        ctx.save();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width,height);
        ctx.rotate((3*Math.PI)/2);
        ctx.drawImage(thisImg,0,-width+(width/7),height,height);
        ctx.restore();
    }

    mirror(hori){
        const canv = this.refs.canvas;
        const ctx = canv.getContext('2d');
        const thisImg = this.refs.img;

        ctx.clearRect(0, 0, window.innerWidth - 100, window.innerHeight - 125);

        if(hori){
            ctx.translate(window.innerWidth-100,0);
            ctx.scale(-1,1);
            ctx.drawImage(thisImg,0,0,window.innerHeight+175,window.innerHeight-125);
        } else {
            ctx.translate(0,window.innerHeight-125);
            ctx.scale(1,-1);
            ctx.drawImage(thisImg,0,0,window.innerHeight+175,window.innerHeight-125);
        }
    }
    fx(){
        const width = window.innerWidth - 100;
        const height = window.innerHeight - 125;
        const canv = this.refs.canvas;
        const ctx = canv.getContext('2d');
        const thisImg = this.refs.img;
        ctx.drawImage(thisImg,0,0,width,height);
        const imgData = ctx.getImageData(0,0,width,height).data;

        for(let i=0;imgData.length;i += 4){
            const brightness = 0.34 * imgData[i] + 0.5 * imgData[i + 1] + 0.16 * imgData[i + 2];
            imgData[i] = brightness;
            imgData[i + 1] = brightness;
            imgData[i + 2] = brightness;
        }
        ctx.putImageData(imgData,0,0,width,height);
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
                      this.setState({open : false});
                  } else {
                      menu.style.display = "block";
                      this.setState({open : true});
                  }
              }} className='toolbar-nav--burger-button'><img id='toolbar-nav--burger' src={burger} alt="Menu"/></a>
              <ul ref='menu' id="toolbar-menu">
                  <FileProcessor
                      ref="myFileInput"
                      onFileSelect={this.handleFileSelect.bind(this)}>
                      <li className="toolbar-menu--button" onClick={this.handleClick.bind(this)}>Open</li>
                  </FileProcessor>
                  <li onClick={() => {
                        const imgData = this.refs.canvas.toDataURL();
                        fileSave(imgData,'browser-image.png');
                  }} className="toolbar-menu--button">Save</li>
              </ul>
          </div>
          <div className='workspace-box'>
              <canvas ref='canvas' width={window.innerWidth-100} height={window.innerHeight - 125} id="mycanvas">Canvas don`t work</canvas>
              <img ref="img" src={imageII} alt="p" className="hidden" />
          </div>
          <div className='fucntion-nav-box'>
              <div ref='rotateB' id="rotate-box">
                  <ul className="rotate-menu">
                      <li className="rotate-menu--button" onClick={()=>{
                          this.rotate90();
                      }}>90</li>
                      <li className="rotate-menu--button" onClick={()=>{
                          this.rotate180();
                      }}>180</li>
                      <li className="rotate-menu--button" onClick={()=>{
                          this.rotate270();
                      }}>270</li>
                  </ul>
              </div>
              <div ref='mirrorB' id="mirror-box">
                  <ul className="mirror-menu">
                      <li className="mirror-menu--button" onClick={()=>{this.mirror(true);}}>Horizontal</li>
                      <li className="mirror-menu--button" onClick={()=>{this.mirror(false);}}>Vertical</li>
                  </ul>
              </div>
              <div ref='effectB' id="effect-box">
                  <ul className="effect-menu">
                      <li className="effect-menu--button" onClick={()=>{
                          this.fx();
                      }}>Grayscale</li>
                  </ul>
              </div>
              <div className='functions-nav'>
                  <ul className='functions-menu'>
                      <li><a className='functions-menu--button' onClick={()=>{
                          const x = this.refs.rotateB;
                          if(this.state.rotate){
                              x.style.display = "none";
                              this.setState({rotate : false});
                          } else {
                              this.checktoClose();
                              x.style.display = "block";
                              this.setState({rotate : true});
                          }
                      }}>Rotate</a></li>
                      <li><a className='functions-menu--button' onClick={()=>{
                          const x = this.refs.mirrorB;
                          if(this.state.mirror){
                              x.style.display = "none";
                              this.setState({mirror: false});
                          } else {
                              this.checktoClose();
                              x.style.display = "block";
                              this.setState({mirror: true});
                          }
                      }}>Mirroring</a></li>
                      <li><a className='functions-menu--button' onClick={()=>{
                          const x = this.refs.effectB;
                          if(this.state.effect){
                              x.style.display = "none";
                              this.setState({effect: false});
                          } else {
                              this.checktoClose();
                              x.style.display = "block";
                              this.setState({effect: true});
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