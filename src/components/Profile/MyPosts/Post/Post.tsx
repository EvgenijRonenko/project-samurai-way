import React from 'react';
import s from './Post.module.css'
import {MyPosts} from '../MyPosts';

type PostType = {
    id: number
    message: string
    likesCount: number
}


export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://www.filmfutter.com/wp-content/uploads/2020/09/Avatar2Drehende-696x384.jpg'/>
            <MyPosts />
        </div>
    )
}