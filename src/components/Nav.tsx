import React from 'react';
import './NavS.css'

export const Nav = () => {
    return <nav>
        <div className='item'>
            <a>Profile</a>
        </div>
        <div  className='item'>
            <a>Messages</a>
        </div>
        <div className='item'>
            <a>News</a>
        </div>
        <div className='item'>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}