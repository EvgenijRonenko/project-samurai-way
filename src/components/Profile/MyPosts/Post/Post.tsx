import React from 'react';
import s from './Post.module.css'
import {MyPosts} from '../MyPosts';


export const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://www.filmfutter.com/wp-content/uploads/2020/09/Avatar2Drehende-696x384.jpg'/>
            <MyPosts />
        </div>
    )
}