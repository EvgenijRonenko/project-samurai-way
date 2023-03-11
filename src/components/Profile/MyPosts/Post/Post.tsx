import React from 'react';
import s from './Post.module.css'




type PostType = {
    likesCount: number
    message: string
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://www.filmfutter.com/wp-content/uploads/2020/09/Avatar2Drehende-696x384.jpg"/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}