/**
 * Created by rober on 2017-11-27.
 */
import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import img from '../img/bakko.png'
class Image extends Component {

    componentDidMount(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;

        img.onload = () => {
            ctx.drawImage(img,0,0,window.innerWidth - 100, window.innerHeight-125);
        }

    }

    render(){
        return (
            <div className='workspace-box'>
                <canvas ref='canvas' width={window.innerWidth-100} height={window.innerHeight - 125} id="mycanvas">Canvas don`t work</canvas>
                <img ref='image' src={img} className="hidden" />
            </div>
        )
    }
}
export default Image;