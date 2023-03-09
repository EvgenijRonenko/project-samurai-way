import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {state} from '../../../redux/state';


export const MyPosts = () => {

    /*const postElements = state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)*/

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
                {/*{postElements}*/}
            </div>
        </div>
    )
}