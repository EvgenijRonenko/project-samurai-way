import React from 'react';
import classes from './Navbar.module.css'

export const Navbar = () => {
    return <nav>
        <div className={classes.nav}>
            <a href={'/profile'}>Profile</a>
        </div>
        <div  className={classes.item}>
            <a href={'/profile'}>Messages</a>
        </div>
        <div className={classes.item}>
            <a href={'/profile'}>News</a>
        </div>
        <div className={classes.item}>
            <a href={'/profile'}>Music</a>
        </div>
        <div className={classes.item}>
            <a href={'/profile'}>Settings</a>
        </div>
    </nav>
}