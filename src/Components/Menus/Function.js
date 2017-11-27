/**
 * Created by rober on 2017-11-27.
 */
import React, { Component } from 'react'

class Function extends Component {
    render() {
        return (
            <div className='fucntion-nav-box'>
                <div className='functions-nav'>
                    <ul className='functions-menu'>
                        <li><a className='functions-menu--button' onClick=''>Rotate</a></li>
                        <li><a className='functions-menu--button' onClick=''>Mirroring</a></li>
                        <li><a className='functions-menu--button' onClick=''>Effects</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Function