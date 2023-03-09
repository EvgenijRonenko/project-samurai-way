import React from 'react';
import s from './Post.module.css'
import {MyPosts} from '../MyPosts';


type PostsType = {
    id: number
    message: string
    likesCount: number
}

type PostType = {
    posts: PostsType[]

}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://www.filmfutter.com/wp-content/uploads/2020/09/Avatar2Drehende-696x384.jpg"/>
            {props.posts}
            <div>
                <span>{props.posts.likesCount}</span>
            </div>
        </div>
    )
}