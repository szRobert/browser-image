import React, { Component } from 'react'
import FileInput from 'react-file-input'

/* icons */
import burger from '../../img/burger.png'


class Toolbar extends Component {

    constructor(props){
        super(props);

    }

    menuAction() {
        function handleClick(e){
            e.preventDefault();
            alert('le nyilik 1x valamikor a jovoben talan');
        }
    }

    handleChange(event) {
    console.log('Selected file:', event.target.files[0]);
    }

    render(){
        return (
            <div className='toolbar-nav'>
                <h1 className='title'>BrowserImage</h1>
                <a onClick={this.menuAction()} className='toolbar-nav--burger-button'><img id='toolbar-nav--burger' src={burger} /></a>
                <ul id='toolbar-menu'>
                    <li><form><FileInput
                        name="myImage"
                        accept=".png"
                        placeholder="Open"
                        className="inputClass"
                        onChange={this.handleChange}
                    /></form></li>
                    <li><a className='toolbar-menu--button'>Save</a></li>
                </ul>
            </div>
        )
    }
}
export default Toolbar;