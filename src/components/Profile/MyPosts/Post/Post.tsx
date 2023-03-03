import React from 'react';
import classes from './Post.module.css'

type PostType = {
    message: string
    likesCount: string
}
export const Post = (props: PostType) => {
    return (
        <div className={classes.item}>
            <img src='https://www.filmfutter.com/wp-content/uploads/2020/09/Avatar2Drehende-696x384.jpg'/>
            post 1
        </div>
    )
}