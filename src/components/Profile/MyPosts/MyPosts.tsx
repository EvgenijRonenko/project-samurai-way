import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';



export const MyPosts = () => {

    const postsData = [
        {id: 1, name: 'Hi, how are you?', likesCount: 1 },
        {id: 2, name: 'It\'s my first post', likesCount: 23},
        ]

    return (
        <div className={s.postsBlock}>
           <h2>My posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>New post</button>
            </div>
            <div className={s.posts}>
                {/*<Post message={'Hi, how are you?'} likesCount={'1'}/>*/}
                {/*<Post message={'It\'s my first post'} likesCount={'23'}/>*/}
            </div>
        </div>
    )
}