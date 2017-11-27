import React, { Component } from 'react'
import Dropdown from '../../../node_modules/react-dropdown'

/* icons */
import burger from '../../img/burger.png'


class Toolbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
    render(){


        return (
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
                    <a><li className="toolbar-menu--button">Open</li></a>
                    <a><li className="toolbar-menu--button">Save</li></a>
                </ul>
            </div>
        )
    }
}
export default Toolbar;