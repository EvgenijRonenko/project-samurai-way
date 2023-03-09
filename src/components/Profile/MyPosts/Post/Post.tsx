import React from 'react';
import s from './Post.module.css'
import {MyPosts} from '../MyPosts';
import {state} from '../../../../redux/state';



export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.filmfutter.com/wp-content/uploads/2020/09/Avatar2Drehende-696x384.jpg"/>
            {state.profilePage.posts}
            <div>
                <span>{state.profilePage.posts[2]}</span>
            </div>
        </div>
    )
}